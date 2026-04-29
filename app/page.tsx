import PremiumHeroSection from "@/components/hero/PremiumHeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import PremiumAboutSection from "@/components/about/PremiumAboutSection";
import ProcessSection from "@/components/process/ProcessSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";
import ConfettiEffect from "@/components/animations/ConfettiEffect";
import PremiumPopup from "@/components/ui/PremiumPopup";
import FounderVideoSection from "@/components/video/FounderVideoSection";

export default function Home() {
  return (
    <main>
      {/* Welcome Confetti Animation */}
      <ConfettiEffect 
        duration={4000}
        particleCount={100}
      />

      {/* Welcome Popup - Shows after 4 seconds */}
      <PremiumPopup 
        type="welcome" 
        delay={4000}
      />

      {/* Inquiry Popup - Shows after scrolling 1500px */}
      <PremiumPopup 
        type="inquiry" 
        scrollTrigger={1500}
      />
      
      <PremiumHeroSection />
      <ServicesSection />
      <PremiumAboutSection />
      <FounderVideoSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
