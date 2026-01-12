import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const useCases = [
  {
    title: "Marketing Campaigns",
    description: "Track click-through rates and conversion metrics for every campaign link. A/B test different destinations and optimize for performance.",
    stats: "42% higher CTR",
  },
  {
    title: "Social Media",
    description: "Share clean, branded links across all platforms. Instagram bio links, Twitter threads, LinkedIn posts – all trackable in one dashboard.",
    stats: "2.5x engagement",
  },
  {
    title: "Email Marketing",
    description: "Replace long UTM-filled URLs with clean short links. Improve deliverability and track opens without complex setup.",
    stats: "18% better deliverability",
  },
  {
    title: "Influencer Partnerships",
    description: "Create unique tracked links for each influencer. Measure true ROI and commission performance accurately.",
    stats: "Real-time attribution",
  },
  {
    title: "E-commerce",
    description: "Shorten product URLs for SMS marketing, print ads, and packaging QR codes. Track offline-to-online conversions.",
    stats: "35% more conversions",
  },
  {
    title: "Event Management",
    description: "Create memorable links for registrations, schedules, and resources. Track engagement before, during, and after events.",
    stats: "50% faster check-ins",
  },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Use Cases
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for every scenario
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From startups to enterprises, see how teams use me.xo.je to drive results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {useCase.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {useCase.description}
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {useCase.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;