import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Code, Cpu, Leaf } from "lucide-react";

const businesses = [
  {
    name: "Sthapana Technologies Pvt. Ltd.",
    icon: Cpu,
    focus: "Agentic AI • Enterprise Intelligence • Industrial Automation • Clean-Energy Digitalization",
    description: "Building foundational intelligence for modern enterprises. Core product: Third AI — designed to transform how organizations access, understand, and act on their data.",
    highlight: "Core Product: Third AI",
  },
  {
    name: "Wapventure Solutions Pvt. Ltd.",
    icon: Code,
    focus: "Enterprise Platforms • Digital Products • Scalable Technology Solutions",
    description: "The execution and innovation engine — delivering robust technology solutions that power business transformation across industries.",
    highlight: "Innovation Engine",
  },
];

export function BusinessesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="businesses" className="section-padding relative" ref={ref}>
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Companies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Building for the Long Term
          </h2>
          <p className="text-muted-foreground text-lg">
            Impact-driven companies designed to compound value over decades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group relative p-8 lg:p-10 rounded-3xl glass hover-glow overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <business.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {business.highlight}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold mb-3">
                  {business.name}
                </h3>
                
                <p className="text-sm text-primary/80 mb-4">
                  {business.focus}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {business.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
