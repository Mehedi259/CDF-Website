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
const FounderVideoSection = dynamic(() => import("@/components/video/FounderVideoSection"), {
  loading: () => <div className="h-screen" />,
});

export default function Home() {
  return (
    <main>
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
