import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Mic, Award, Globe, BookOpen, Heart, Sparkles } from "lucide-react";

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,hsl(180_70%_45%/0.04),transparent_50%)]" />
      
      <div className="container-wide relative z-10">
        {/* Clean Energy Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Clean Energy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powering a Sustainable Future
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Actively involved in solar and renewable energy projects, driven by the 
                  philosophy that clean energy should be accessible and impactful for everyone.
                </p>
                <p>
                  Building next-generation clean energy solutions in stealth — a long-term 
                  global impact initiative focused on making sustainable energy the default, 
                  not the exception.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl glass p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
                  <Sun className="w-32 h-32 text-primary relative z-10" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block text-center">
            Leadership & Global Exposure
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Shaping Conversations That Matter
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Youngest CEO",
                description: "Appointed as the youngest CEO of Connect India Japan",
              },
              {
                icon: Mic,
                title: "Rising Sun Conclave",
                description: "Youngest speaker, sharing stage with senior industry leaders",
              },
              {
                icon: Globe,
                title: "Global Ecosystem",
                description: "Deep experience across India–Japan business ecosystems",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                className="text-center p-6 rounded-2xl glass"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Versatility */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Beyond Business
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              The Human Behind the Ventures
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: BookOpen, label: "Published Author" },
                { icon: Sparkles, label: "Creative Pursuits" },
                { icon: Heart, label: "Philanthropy" },
                { icon: Sun, label: "Mindfulness" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl glass">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Published author of <span className="text-foreground">"World of Hidden Thoughts"</span>, 
              with creative pursuits spanning poetry, dance, and music. A firm believer that 
              clarity of mind leads to better leadership and better technology.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="rounded-3xl glass p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Values & Philosophy</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Purpose-driven innovation",
                "Technology as an enabler, not complexity",
                "Clean energy as a priority",
                "Conscious, ethical growth",
              ].map((value, index) => (
                <div key={value} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
