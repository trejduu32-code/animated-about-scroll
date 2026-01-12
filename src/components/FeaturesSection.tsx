import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, BarChart3, Shield, Zap, Globe, Palette, Gift } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "100% Free Forever",
    description: "No hidden fees, no premium tiers. Everything is completely free.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Link2,
    title: "Custom Short Links",
    description: "Create memorable, branded short URLs that reflect your identity.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track clicks, locations, and referrers with real-time insights.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with SSL encryption and privacy controls.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Global CDN ensures your links redirect in milliseconds worldwide.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deployed across multiple regions for maximum availability.",
    gradient: "from-teal-500 to-blue-500",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group glass p-8 rounded-3xl transition-all hover:border-primary/50 relative overflow-hidden"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />
      
      <motion.div 
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 relative`}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <feature.icon className="w-8 h-8 text-white" />
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      
      <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

      {/* Decorative corner */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </motion.div>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Features
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Everything you need.{" "}
            <span className="text-gradient">Free.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Powerful tools to shorten, track, and manage your links with precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;