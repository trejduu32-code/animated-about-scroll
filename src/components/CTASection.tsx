import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Gift } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Animated orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
            animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
            animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Floating particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-green-500/20 px-6 py-3 rounded-full mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Gift className="w-5 h-5 text-green-500" />
              <span className="text-lg text-green-500 font-semibold">100% Free Forever</span>
              <Sparkles className="w-5 h-5 text-green-500" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Ready to shorten your
              <br />
              <motion.span 
                className="text-gradient"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                first link?
              </motion.span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join millions of users who trust me.xo.je for their link management needs. 
              <span className="text-foreground font-medium"> No credit card. No catch. Just free.</span>
            </p>

            <motion.a
              href="https://me.xo.je"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 80px hsl(204 100% 50% / 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-primary px-12 py-6 rounded-full font-semibold text-xl text-foreground shadow-glow transition-all"
            >
              <span>Start Free Now</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;