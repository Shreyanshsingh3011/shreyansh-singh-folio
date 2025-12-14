import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Mic, Globe, BookOpen, Heart, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "Present",
    title: "Founder & CEO — Sthapana Technologies",
    description: "Building Third AI and leading enterprise AI innovation",
  },
  {
    year: "2023",
    title: "Youngest CEO — Connect India Japan",
    description: "Appointed as the youngest CEO, bridging India-Japan business ecosystems",
  },
  {
    year: "2022",
    title: "Rising Sun Conclave Speaker",
    description: "Youngest speaker, sharing stage with senior industry leaders and policymakers",
  },
  {
    year: "2021",
    title: "Founded Wapventure Solutions",
    description: "Launched enterprise platform and digital solutions company",
  },
  {
    year: "2020",
    title: "Published Author",
    description: "Released 'World of Hidden Thoughts' — a collection of poetry and reflections",
  },
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building for Impact
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                I'm an entrepreneur, innovator, and technologist driven by the belief 
                that technology should simplify, not complicate. My work spans AI, 
                enterprise software, and clean energy — always with a focus on 
                long-term impact.
              </p>
              <p>
                Beyond building companies, I'm a published author, creative thinker, 
                and advocate for conscious leadership. I believe clarity of mind 
                leads to better technology and better outcomes for everyone.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "Youngest CEO" },
                { icon: Mic, label: "Global Speaker" },
                { icon: BookOpen, label: "Published Author" },
                { icon: Heart, label: "Philanthropist" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl glass"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-8">The Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                    
                    <span className="text-xs text-primary font-medium">{milestone.year}</span>
                    <h4 className="font-semibold mt-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
