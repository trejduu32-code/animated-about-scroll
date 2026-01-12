import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "me.xo.je transformed how we share links. The analytics are incredibly detailed and the short URLs look professional.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "Google",
    rating: 5,
  },
  {
    quote: "Finally, a URL shortener that doesn't compromise on speed or security. Our team relies on it daily.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "Microsoft",
    rating: 5,
  },
  {
    quote: "The custom branding options are fantastic. Our clients love the professional short links we send them.",
    author: "Emily Rodriguez",
    role: "Agency Owner",
    company: "Meta",
    rating: 5,
  },
  {
    quote: "We've tried many URL shorteners, but none match the simplicity and power of me.xo.je. Game changer.",
    author: "David Kim",
    role: "Product Manager",
    company: "Amazon",
    rating: 5,
  },
  {
    quote: "The real-time analytics helped us understand our audience better. Completely free is just unbelievable.",
    author: "Lisa Thompson",
    role: "Growth Lead",
    company: "Netflix",
    rating: 5,
  },
  {
    quote: "Seamless integration with our workflow. The API is well-documented and easy to use.",
    author: "Alex Rivera",
    role: "Developer",
    company: "Spotify",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity }}
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
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Testimonials
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Loved by{" "}
            <span className="text-gradient">millions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-3xl relative group hover:border-primary/50 transition-all"
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
              </motion.div>
              
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  </motion.div>
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-foreground font-bold"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.author.charAt(0)}
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at <span className="text-primary">{testimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Decorative gradient */}
              <motion.div
                className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;