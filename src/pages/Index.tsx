import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ThirdAISection } from "@/components/ThirdAISection";
import { BusinessesSection } from "@/components/BusinessesSection";
import { VisionSection } from "@/components/VisionSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ThirdAISection />
      <BusinessesSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
