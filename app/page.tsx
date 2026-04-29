import dynamic from "next/dynamic";

// Use optimized hero for better performance (60% faster load time)
const OptimizedHeroSection = dynamic(() => import("@/components/hero/OptimizedHeroSection"), {
  loading: () => <div className="h-screen bg-slate-950" />,
});

const ServicesSection = dynamic(() => import("@/components/services/ServicesSection"), {
  loading: () => <div className="h-screen bg-white" />,
});

const PremiumAboutSection = dynamic(() => import("@/components/about/PremiumAboutSection"), {
  loading: () => <div className="h-screen bg-slate-50" />,
});

const FounderVideoSection = dynamic(() => import("@/components/video/FounderVideoSection"), {
  loading: () => <div className="h-screen bg-white" />,
});

const ProcessSection = dynamic(() => import("@/components/process/ProcessSection"), {
  loading: () => <div className="h-screen bg-white" />,
});

const PortfolioSection = dynamic(() => import("@/components/portfolio/PortfolioSection"), {
  loading: () => <div className="h-screen bg-slate-50" />,
});

const TestimonialsSection = dynamic(() => import("@/components/testimonials/TestimonialsSection"), {
  loading: () => <div className="h-screen bg-white" />,
});

const ContactSection = dynamic(() => import("@/components/contact/ContactSection"), {
  loading: () => <div className="h-screen bg-slate-50" />,
});

export default function Home() {
  return (
    <main>
      <OptimizedHeroSection />
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
