import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link2, Copy, Check, ArrowRight } from "lucide-react";

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    if (url.trim()) {
      const hash = Math.random().toString(36).substring(2, 8);
      setShortUrl(`me.xo.je/${hash}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${shortUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Try It Now
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience the magic
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how easy it is to create a short link in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass p-8 md:p-12 rounded-3xl">
            {/* Input area */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="url"
                  placeholder="Paste your long URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <button
                onClick={handleShorten}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-primary px-8 py-4 rounded-xl font-semibold text-foreground shadow-glow transition-all hover:scale-105"
              >
                Shorten
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Result area */}
            {shortUrl && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="bg-secondary/50 rounded-xl p-6 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                    <Link2 className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="font-mono text-lg text-foreground truncate">
                    {shortUrl}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="shrink-0 inline-flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-secondary"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;