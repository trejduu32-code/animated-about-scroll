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
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span 
            className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
            animate={{ letterSpacing: ["0.1em", "0.2em", "0.1em"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            How It Works
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold">
            Three simple steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center"
            >
              {/* Animated connector line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-primary/50 to-transparent"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.3 }}
                  />
                </motion.div>
              )}

              <motion.div
                className="inline-flex items-center justify-center w-32 h-32 rounded-full glass mb-8 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0px hsl(204 100% 50% / 0)",
                    "0 0 30px hsl(204 100% 50% / 0.3)",
                    "0 0 0px hsl(204 100% 50% / 0)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                }}
              >
                <motion.span 
                  className="font-display text-4xl font-bold text-gradient"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {step.number}
                </motion.span>
                
                {/* Orbiting dot */}
                <motion.div
                  className="absolute w-3 h-3 rounded-full bg-primary"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  style={{ 
                    transformOrigin: "64px 64px",
                    top: 0,
                    left: "50%",
                    marginLeft: "-6px"
                  }}
                />
              </motion.div>

              <motion.h3 
                className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                {step.title}
              </motion.h3>
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