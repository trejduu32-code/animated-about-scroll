import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Zap, Heart } from "lucide-react";

const FreePlanSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { Icon: Zap, title: "Unlimited Links", description: "Create as many short links as you need" },
    { Icon: Gift, title: "All Features Included", description: "Analytics, custom aliases, QR codes, and more" },
    { Icon: Heart, title: "No Hidden Costs", description: "Free today, free tomorrow, free forever" },
  ];

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-500/20 px-6 py-3 rounded-full mb-8"
            animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px hsl(142 76% 36% / 0)", "0 0 30px hsl(142 76% 36% / 0.3)", "0 0 0px hsl(142 76% 36% / 0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Gift className="w-5 h-5 text-green-500" />
            <span className="text-lg text-green-500 font-semibold">100% Free</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Why charge when we can{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">give?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            We believe great tools should be accessible to everyone. That's why me.xo.je is completely free, with no premium tiers or hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glass p-10 rounded-3xl text-center relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                animate={{ boxShadow: ["0 0 0px hsl(142 76% 36% / 0)", "0 0 30px hsl(142 76% 36% / 0.4)", "0 0 0px hsl(142 76% 36% / 0)"] }}
                transition={{ boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.5 } }}
              >
                <benefit.Icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreePlanSection;