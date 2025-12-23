import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Rocket, 
  Sun, 
  Code, 
  PenTool,
  ArrowRight,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Third AI",
    category: "Agentic AI Platform",
    description: "A universal Agentic AI platform simplifying data management, automation, and decision-making across industries. Talk to your business data naturally.",
    tags: ["AI/ML", "Enterprise", "SaaS"],
    icon: Brain,
    secondaryIcon: PenTool,
    featured: true,
    link: "#third-ai",
  },
  {
    id: 2,
    title: "Sthapana Technologies",
    category: "AI & Enterprise Solutions",
    description: "Building foundational intelligence for modern enterprises through agentic AI, industrial automation, and clean-energy digitalization.",
    tags: ["Startup", "B2B", "Technology"],
    icon: Rocket,
    featured: true,
    link: "https://www.sthapanatechnologies.com",
  },
  {
    id: 3,
    title: "Stealth Clean Tech Innovation",
    category: "Clean Tech",
    description: "A stealth-mode venture developing breakthrough clean technology solutions for sustainable industrial transformation.",
    tags: ["Clean Tech", "Innovation", "Stealth"],
    icon: Leaf,
    featured: false,
    link: "#stealth",
  },
  {
    id: 4,
    title: "Clean Energy Initiatives",
    category: "Sustainability",
    description: "Active involvement in solar and renewable energy projects, working towards making clean energy accessible and impactful globally.",
    tags: ["Solar", "Sustainability", "Impact"],
    icon: Sun,
    featured: false,
    link: "#vision",
  },
  {
    id: 5,
    title: "Wapventure Solutions",
    category: "Digital Products",
    description: "Enterprise platforms and scalable technology solutions powering business transformation across industries.",
    tags: ["Software", "Enterprise", "Digital"],
    icon: Code,
    featured: false,
    link: "https://www.WapVenture.com",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(200_80%_55%/0.04),transparent_50%)]" />
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Work & Ventures
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Building impactful companies and products at the intersection of 
            AI, enterprise software, and sustainability.
          </p>
          <a 
            href="#contact" 
            className="text-primary font-medium text-lg hover:underline transition-all inline-flex items-center gap-1"
          >
            Join me for next-gen innovation →
          </a>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative p-8 lg:p-10 rounded-3xl glass hover-glow overflow-hidden block"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-48 group-hover:h-48" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    {project.secondaryIcon && (
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <project.secondaryIcon className="w-5 h-5 text-accent" />
                      </div>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <p className="text-sm text-primary mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
              className="group p-6 rounded-2xl glass hover-glow block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-primary mb-1">{project.category}</p>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
