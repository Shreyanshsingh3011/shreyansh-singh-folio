import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Mail, label: "Personal Email", href: "mailto:shreyansh.singh3011@gmail.com", username: "shreyansh.singh3011@gmail.com" },
  { icon: Mail, label: "Business Email", href: "mailto:ceo@sthapanatechnologies.com", username: "ceo@sthapanatechnologies.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shreyansh-singh-259773216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", username: "shreyansh-singh" },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(200_80%_55%/0.06),transparent_50%)]" />
      
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether it's a collaboration, partnership, investment opportunity, 
            or just a conversation — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  required 
                  className="bg-secondary/50 border-border/50 h-12"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="bg-secondary/50 border-border/50 h-12"
                />
              </div>
              <Input 
                placeholder="Subject" 
                required 
                className="bg-secondary/50 border-border/50 h-12"
              />
              <Textarea 
                placeholder="Tell me about your project or inquiry..." 
                required 
                rows={5}
                className="bg-secondary/50 border-border/50 resize-none"
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-lg font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover-glow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-sm font-medium truncate">{link.username}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Open to:</span> Strategic 
                partnerships, investment conversations, advisory roles, and speaking engagements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
