import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the URL shortening work?",
    answer: "Our service takes your long URL and creates a unique short alias. When someone clicks the short link, they're instantly redirected to your original destination. The entire process happens in milliseconds thanks to our global CDN infrastructure.",
  },
  {
    question: "Can I customize my short links?",
    answer: "Absolutely! With our Pro and Enterprise plans, you can create custom aliases like me.xo.je/your-brand. You can also connect your own domain for fully branded short URLs.",
  },
  {
    question: "What analytics are available?",
    answer: "We provide comprehensive analytics including click counts, geographic data, referrer information, device types, browser stats, and time-based trends. Enterprise users get access to advanced cohort analysis and custom reports.",
  },
  {
    question: "Is there an API available?",
    answer: "Yes! Our RESTful API allows you to create, manage, and track links programmatically. Full documentation and SDKs for popular languages are available for Pro and Enterprise users.",
  },
  {
    question: "How secure are my links?",
    answer: "Security is our top priority. All links use HTTPS encryption, and we offer password protection, expiration dates, and geographic restrictions. Enterprise users get additional security features like SSO and audit logs.",
  },
  {
    question: "Can I edit or delete a link after creating it?",
    answer: "Yes, you can edit the destination URL or delete any link at any time. Changes take effect immediately across our global network.",
  },
  {
    question: "What happens if I exceed my link limit?",
    answer: "On the Free plan, you'll receive a notification when approaching your limit. You can upgrade anytime for unlimited links, or wait for your monthly reset.",
  },
  {
    question: "Do you offer team collaboration features?",
    answer: "Pro and Enterprise plans include team features like shared link libraries, role-based permissions, and collaborative workspaces. Perfect for marketing teams and agencies.",
  },
];

const FAQItem = ({ faq, index, isInView }: { faq: typeof faqs[0]; index: number; isInView: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-display text-lg font-medium text-foreground pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about me.xo.je
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;