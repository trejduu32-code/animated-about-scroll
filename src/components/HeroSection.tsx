import { motion } from "framer-motion";
import { Link2, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-[120px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground">100% Free Forever</span>
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main heading with letter animation */}
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
          >
            {["m", "e", "."].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.6 }}
                className="text-foreground inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {["x", "o"].map((letter, i) => (
              <motion.span
                key={`xo-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.05, duration: 0.6 }}
                className="text-gradient inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {[".", "j", "e"].map((letter, i) => (
              <motion.span
                key={`je-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.05, duration: 0.6 }}
                className="text-foreground inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your long URLs into 
            <motion.span 
              className="text-foreground"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            > memorable</motion.span>, 
            <motion.span 
              className="text-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            > trackable</motion.span> short links.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://me.xo.je"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px hsl(204 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-gradient-primary px-10 py-5 rounded-full font-semibold text-lg text-foreground shadow-glow transition-all"
            >
              <span>Start Free Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 glass px-10 py-5 rounded-full font-semibold text-lg text-foreground transition-all hover:bg-secondary"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: "10B+", label: "Links Created" },
              { value: "2M+", label: "Happy Users" },
              { value: "100%", label: "Free Forever" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                className="text-center"
              >
                <motion.p 
                  className="font-display text-3xl md:text-4xl font-bold text-gradient"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-14 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-3"
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;