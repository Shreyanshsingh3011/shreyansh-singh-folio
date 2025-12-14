import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(200_80%_55%/0.04),transparent_50%)]" />
      
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Shreyansh Singh
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am an entrepreneur, innovator, and technologist building at the intersection 
              of industrial AI, enterprise software, and clean energy. My work is driven by 
              a singular purpose: creating technology that solves real problems at scale.
            </p>
            <p>
              As the founder of <span className="text-foreground font-medium">Sthapana Technologies</span> and{" "}
              <span className="text-foreground font-medium">Wapventure Solutions</span>, I lead 
              teams building foundational infrastructure for the next generation of intelligent enterprises.
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I had the privilege of being the youngest appointed CEO of{" "}
              <span className="text-foreground font-medium">Connect India Japan</span>, and the 
              youngest speaker at the <span className="text-foreground font-medium">Rising Sun Conclave</span>, 
              sharing insights alongside senior industry leaders and policymakers.
            </p>
            <p>
              My belief is simple: build long-term, impact-driven companies that compound value 
              over decades. Technology should enable, not complicate. Clean energy should be 
              accessible, not exclusive.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50"
        >
          {[
            { label: "Companies Founded", value: "2" },
            { label: "Industries Served", value: "5+" },
            { label: "Global Partnerships", value: "10+" },
            { label: "Years Building", value: "5+" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
