import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, BarChart3, Palette, Globe, Code, Bot } from "lucide-react";

const integrations = [
  {
    icon: Zap,
    name: "Zapier",
    category: "Automation",
    description: "Connect with 5000+ apps automatically",
  },
  {
    icon: BarChart3,
    name: "Google Analytics",
    category: "Analytics",
    description: "Sync link data with your GA dashboard",
  },
  {
    icon: Palette,
    name: "Canva",
    category: "Design",
    description: "Create branded QR codes and graphics",
  },
  {
    icon: Globe,
    name: "WordPress",
    category: "CMS",
    description: "Native plugin for easy integration",
  },
  {
    icon: Code,
    name: "Slack",
    category: "Communication",
    description: "Shorten links directly from Slack",
  },
  {
    icon: Bot,
    name: "HubSpot",
    category: "CRM",
    description: "Track link performance in your CRM",
  },
];

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Integrations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Works with your tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seamlessly integrate with the tools you already use every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <integration.icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-semibold text-foreground">
                    {integration.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                    {integration.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            And 100+ more integrations available through our API and Zapier
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;