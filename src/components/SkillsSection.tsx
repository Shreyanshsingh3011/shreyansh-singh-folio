import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Artificial Intelligence", level: 95 },
  { name: "Product Strategy", level: 90 },
  { name: "Enterprise Software", level: 88 },
  { name: "Clean Energy", level: 85 },
  { name: "Business Development", level: 92 },
  { name: "Leadership", level: 90 },
];

const expertise = [
  "Agentic AI Systems",
  "Data Platform Architecture",
  "SaaS Development",
  "Industrial Automation",
  "Renewable Energy",
  "Startup Building",
  "Strategic Partnerships",
  "Cross-border Business",
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skills & Capabilities
          </h2>
          <p className="text-muted-foreground text-lg">
            A unique blend of technical depth, business acumen, and visionary thinking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skills Bars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Expertise Tags */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6">Areas of Focus</h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 rounded-xl glass text-sm hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-border/50">
              {[
                { label: "Years of Experience", value: "5+" },
                { label: "Companies Founded", value: "2" },
                { label: "Industries Served", value: "5+" },
                { label: "Global Partnerships", value: "10+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
