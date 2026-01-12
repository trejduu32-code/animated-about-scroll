import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, Server, Key, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II certified infrastructure with 24/7 monitoring and threat detection.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption standards.",
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "We never sell your data. GDPR, CCPA, and HIPAA compliant for peace of mind.",
  },
  {
    icon: Server,
    title: "Global Infrastructure",
    description: "Redundant data centers across multiple regions ensure 99.99% uptime guarantee.",
  },
  {
    icon: Key,
    title: "Access Controls",
    description: "Granular role-based permissions, SSO, and two-factor authentication support.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Regular third-party audits and compliance certifications for regulated industries.",
  },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-glow opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Security
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your data is safe with us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We take security seriously. Here's how we protect your links and data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;