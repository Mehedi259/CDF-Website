import dynamic from "next/dynamic";
import PremiumHeroSection from "@/components/hero/PremiumHeroSection";
import ServicesSection from "@/components/services/ServicesSection";

// Lazy load heavy components
const PremiumAboutSection = dynamic(() => import("@/components/about/PremiumAboutSection"), {
  loading: () => <div className="h-screen" />,
});
const ProcessSection = dynamic(() => import("@/components/process/ProcessSection"), {
  loading: () => <div className="h-screen" />,
});
const PortfolioSection = dynamic(() => import("@/components/portfolio/PortfolioSection"), {
  loading: () => <div className="h-screen" />,
});
const TestimonialsSection = dynamic(() => import("@/components/testimonials/TestimonialsSection"), {
  loading: () => <div className="h-screen" />,
});
const ContactSection = dynamic(() => import("@/components/contact/ContactSection"), {
  loading: () => <div className="h-screen" />,
});
const ConfettiEffect = dynamic(() => import("@/components/animations/ConfettiEffect"), {
  ssr: false,
});
const PremiumPopup = dynamic(() => import("@/components/ui/PremiumPopup"), {
  ssr: false,
});
const FounderVideoSection = dynamic(() => import("@/components/video/FounderVideoSection"), {
  loading: () => <div className="h-screen" />,
});

export default function Home() {
  return (
    <main>
      {/* Welcome Confetti Animation */}
      <ConfettiEffect 
        duration={3000}
        particleCount={50}
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
