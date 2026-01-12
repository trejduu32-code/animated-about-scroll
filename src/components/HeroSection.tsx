import { motion } from "framer-motion";
import { Link2, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow animate-pulse-glow" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/50"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/30"
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/40"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Link2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">URL Shortener Portfolio</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">me.</span>
            <span className="text-gradient">xo</span>
            <span className="text-foreground">.je</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your long URLs into memorable, trackable short links. 
            <span className="text-foreground"> Minimalist. Fast. Powerful.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#features"
              className="group inline-flex items-center gap-2 bg-gradient-primary px-8 py-4 rounded-full font-semibold text-foreground shadow-glow transition-all hover:scale-105"
            >
              Explore Features
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full font-semibold text-foreground transition-all hover:bg-secondary"
            >
              See Demo
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;