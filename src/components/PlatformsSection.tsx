import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Monitor, Tablet, Watch, Tv, Car } from "lucide-react";

const platforms = [
  { icon: Monitor, name: "Desktop", description: "Full-featured web dashboard for power users" },
  { icon: Smartphone, name: "Mobile", description: "Native iOS and Android apps" },
  { icon: Tablet, name: "Tablet", description: "Optimized tablet experience" },
  { icon: Watch, name: "Wearables", description: "Quick access from your smartwatch" },
  { icon: Tv, name: "Smart TV", description: "Share links on the big screen" },
  { icon: Car, name: "Automotive", description: "CarPlay and Android Auto integration" },
];

const PlatformsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Everywhere
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Available on all platforms
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access your links from any device, anywhere in the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl text-center group hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <platform.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {platform.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;