import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal use and testing.",
    features: [
      "Up to 100 links/month",
      "Basic analytics",
      "Standard short URLs",
      "7-day link history",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For professionals and growing businesses.",
    features: [
      "Unlimited links",
      "Advanced analytics",
      "Custom branded domains",
      "QR code generation",
      "API access",
      "Priority support",
      "Team collaboration",
      "Link expiration controls",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "per month",
    description: "For large teams and organizations.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO integration",
      "Dedicated account manager",
      "Custom SLA",
      "Advanced security",
      "White-label solution",
      "Custom integrations",
      "Audit logs",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "glass border-primary/50 shadow-glow"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 bg-gradient-primary px-4 py-1 rounded-full text-sm font-medium text-foreground">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">/{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-primary text-foreground shadow-glow hover:scale-105"
                    : "glass text-foreground hover:bg-secondary"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;