import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Shreyansh Singh — Building intelligent systems with purpose, clarity, and global impact.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a 
              href="#third-ai" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Third AI
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
