import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, BarChart3, Shield, Zap, Globe, Palette } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Custom Short Links",
    description: "Create memorable, branded short URLs that reflect your identity.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track clicks, locations, and referrers with real-time insights.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with SSL encryption and privacy controls.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Global CDN ensures your links redirect in milliseconds worldwide.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deployed across multiple regions for maximum availability.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "QR codes, link previews, and branded landing pages included.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group glass p-8 rounded-2xl transition-all hover:border-primary/50 hover:shadow-glow"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
        <feature.icon className="w-7 h-7 text-foreground" />
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools to shorten, track, and manage your links with precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;