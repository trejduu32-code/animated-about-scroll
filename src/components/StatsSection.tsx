import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "B+", label: "Links Created", color: "from-blue-500 to-cyan-500" },
  { value: 2, suffix: "M+", label: "Active Users", color: "from-purple-500 to-pink-500" },
  { value: 99.99, suffix: "%", label: "Uptime", color: "from-green-500 to-emerald-500" },
  { value: 195, suffix: "+", label: "Countries", color: "from-orange-500 to-red-500" },
];

const AnimatedCounter = ({ value, suffix, inView, color }: { value: number; suffix: string; inView: boolean; color: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2500;
    const steps = 80;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 100) / 100);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-secondary/50" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
        animate={{ y: [0, -50, 0], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Trusted Worldwide
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold">
            Numbers that{" "}
            <motion.span 
              className="text-gradient"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              speak
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} color={stat.color} />
              <motion.p 
                className="text-muted-foreground mt-4 text-lg"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;