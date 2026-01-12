import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "me.xo.je transformed how we share links. The analytics are incredibly detailed and the short URLs look professional.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
  },
  {
    quote: "Finally, a URL shortener that doesn't compromise on speed or security. Our team relies on it daily.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "StartupLabs",
  },
  {
    quote: "The custom branding options are fantastic. Our clients love the professional short links we send them.",
    author: "Emily Rodriguez",
    role: "Agency Owner",
    company: "Digital Spark",
  },
  {
    quote: "We've tried many URL shorteners, but none match the simplicity and power of me.xo.je. Game changer.",
    author: "David Kim",
    role: "Product Manager",
    company: "InnovateCo",
  },
  {
    quote: "The real-time analytics helped us understand our audience better. Worth every penny.",
    author: "Lisa Thompson",
    role: "Growth Lead",
    company: "ScaleUp",
  },
  {
    quote: "Seamless integration with our workflow. The API is well-documented and easy to use.",
    author: "Alex Rivera",
    role: "Developer",
    company: "CodeCraft",
  },
];

const TestimonialsSection = () => {
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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Loved by thousands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our users are saying about their experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl relative group hover:border-primary/50 transition-all"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
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

export default TestimonialsSection;