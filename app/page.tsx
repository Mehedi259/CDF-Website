import dynamic from "next/dynamic";

// Ultra-lightweight components - NO Framer Motion animations
const OptimizedHeroSection = dynamic(() => import("@/components/hero/OptimizedHeroSection"));
const ServicesSection = dynamic(() => import("@/components/services/ServicesSection"));
const LightweightAboutSection = dynamic(() => import("@/components/about/LightweightAboutSection"));
const FounderVideoSection = dynamic(() => import("@/components/video/FounderVideoSection"));
const LightweightProcessSection = dynamic(() => import("@/components/process/LightweightProcessSection"));
const LightweightPortfolioSection = dynamic(() => import("@/components/portfolio/LightweightPortfolioSection"));
const LightweightTestimonialsSection = dynamic(() => import("@/components/testimonials/LightweightTestimonialsSection"));
const LightweightContactSection = dynamic(() => import("@/components/contact/LightweightContactSection"));

export default function Home() {
  return (
    <main>
      <OptimizedHeroSection />
      <ServicesSection />
      <LightweightAboutSection />
      <FounderVideoSection />
      <LightweightProcessSection />
      <LightweightPortfolioSection />
      <LightweightTestimonialsSection />
      <LightweightContactSection />
    </main>
  );
}
