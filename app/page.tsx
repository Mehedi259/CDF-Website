import PremiumHeroSection from "@/components/hero/PremiumHeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import PremiumAboutSection from "@/components/about/PremiumAboutSection";
import ProcessSection from "@/components/process/ProcessSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main>
      <PremiumHeroSection />
      <ServicesSection />
      <PremiumAboutSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
