import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Link2 className="w-5 h-5 text-foreground" />
            </div>
            <span className="font-display text-xl font-bold">
              me<span className="text-primary">.xo</span>.je
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
            <a
              href="https://me.xo.je"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-2.5 rounded-full font-medium text-foreground transition-all hover:scale-105"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Features
              </a>
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Demo
              </a>
              <a
                href="https://me.xo.je"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary px-6 py-3 rounded-full font-medium text-foreground mt-2"
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;