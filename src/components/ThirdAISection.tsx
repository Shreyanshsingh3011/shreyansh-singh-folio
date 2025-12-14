import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Globe, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Database,
    title: "Unified Data Access",
    description: "Connect seamlessly across ERP, databases, and operational tools in one platform.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Natural language interface — simply talk to your business data.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Intelligent automation that learns and adapts to your processes.",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    description: "Variance detection, forecasting, and actionable intelligence on demand.",
  },
  {
    icon: Globe,
    title: "Cross-Industry Scale",
    description: "Built for manufacturing, finance, energy, logistics, and beyond.",
  },
];

export function ThirdAISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="third-ai" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(200_80%_55%/0.08),transparent_60%)] pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Product
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Third AI
          </h2>
          <p className="text-xl text-muted-foreground">
            Universal Agentic AI for Data Management
          </p>
          <p className="text-muted-foreground mt-4">
            A first-of-its-kind platform designed for every sector — making data 
            management effortless, decisions intelligent, and operations autonomous.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-8 rounded-2xl glass hover-glow cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex flex-col justify-center"
          >
            <h3 className="text-lg font-semibold mb-3">Ready to Transform?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Experience the simplicity, speed, and scalability of Third AI.
            </p>
            <Button variant="hero" size="lg" className="w-fit" asChild>
              <a href="#contact">
                Request a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border/50"
        >
          {["Simplicity", "Speed", "Scalability", "Cross-Industry"].map((prop) => (
            <div key={prop} className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">{prop}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
