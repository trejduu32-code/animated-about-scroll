import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Paste Your Link",
    description: "Drop in any long URL you want to shorten.",
  },
  {
    number: "02",
    title: "Customize",
    description: "Choose a custom alias or let us generate one.",
  },
  {
    number: "03",
    title: "Share & Track",
    description: "Share your link and monitor performance in real-time.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Three simple steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <motion.div
                className="inline-flex items-center justify-center w-24 h-24 rounded-full glass mb-8 relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-display text-3xl font-bold text-gradient">
                  {step.number}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity" />
              </motion.div>

              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;