import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "me.xo.je was born from a simple idea: make link sharing beautiful and intelligent. Started in a small apartment with just two developers.",
  },
  {
    year: "2021",
    title: "First 100K Users",
    description: "Reached our first major milestone. Launched custom domains feature and expanded our infrastructure to three continents.",
  },
  {
    year: "2022",
    title: "Enterprise Launch",
    description: "Introduced enterprise features including SSO, advanced analytics, and dedicated support. Partnered with Fortune 500 companies.",
  },
  {
    year: "2023",
    title: "API & Integrations",
    description: "Launched our public API and native integrations with popular tools like Zapier, Slack, and HubSpot. Developer community grows to 50K+.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded to 150+ countries with localized experiences. Processed over 1 billion redirects monthly.",
  },
  {
    year: "2025",
    title: "AI-Powered Features",
    description: "Introduced AI-powered link optimization, predictive analytics, and smart suggestions. The future of link management is here.",
  },
];

const TimelineSection = () => {
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
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for the future
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From a simple idea to a global platform trusted by millions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary -translate-x-1/2 shadow-glow z-10" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="glass p-6 rounded-2xl hover:border-primary/50 transition-all">
                  <span className="text-primary font-display text-2xl font-bold">
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;