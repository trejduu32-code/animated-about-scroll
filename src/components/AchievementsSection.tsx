import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Globe, Clock, Award, Heart } from "lucide-react";

const achievements = [
  { icon: TrendingUp, value: "10B+", label: "Links Redirected" },
  { icon: Users, value: "2M+", label: "Active Users" },
  { icon: Globe, value: "195", label: "Countries Served" },
  { icon: Clock, value: "<50ms", label: "Average Latency" },
  { icon: Award, value: "#1", label: "Link Shortener 2024" },
  { icon: Heart, value: "99.9%", label: "Customer Satisfaction" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Achievements
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Milestones we're proud of
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our growth reflects the trust millions of users place in us every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl text-center group hover:border-primary/50 transition-all"
            >
              <achievement.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-display text-3xl font-bold text-gradient mb-2">
                {achievement.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;