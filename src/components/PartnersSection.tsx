import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "TechCorp", "InnovateLabs", "CloudScale", "DataFlow",
  "NextGen", "FutureTech", "SmartSystems", "DigiWorks",
  "ByteForce", "CodeMaster", "NetPro", "SyncHub",
];

const PartnersSection = () => {
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
            Trusted By
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industry leaders choose us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of companies that trust me.xo.je for their link management.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass p-6 rounded-xl flex items-center justify-center hover:border-primary/50 transition-all group"
            >
              <span className="font-display text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;