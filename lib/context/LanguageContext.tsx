"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Company
    companyName: "CDF Studio",
    tagline: "Premium Apparel Solutions",
    
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    process: "Process",
    portfolio: "Portfolio",
    testimonials: "Testimonials",
    contact: "Contact",
    getQuote: "Get Quote",
    
    // Hero
    heroTitle1: "We Manufacture Premium Apparel for Global Brands",
    heroSubtitle1: "ISO-certified facility producing 500,000+ units monthly for international retailers and fashion brands across 45+ countries",
    heroTitle2: "End-to-End Apparel Solutions",
    heroSubtitle2: "From fabric sourcing to final delivery - complete manufacturing partnership for brands of all sizes",
    heroTitle3: "Quality You Can Trust",
    heroSubtitle3: "99.2% quality pass rate with multi-stage inspection process and international certifications",
    heroTitle4: "Sustainable Manufacturing Excellence",
    heroSubtitle4: "Eco-friendly production processes with GOTS certification and zero-waste initiatives for conscious brands",
    heroTitle5: "Custom Design & Development",
    heroSubtitle5: "Expert design team bringing your vision to life with trend forecasting and technical design support",
    heroTitle6: "Fast Turnaround Times",
    heroSubtitle6: "Industry-leading production speed with 7-day sampling and flexible bulk production schedules",
    heroTitle7: "Global Logistics Network",
    heroSubtitle7: "Seamless worldwide shipping with trusted freight partners and real-time tracking for on-time delivery",
    heroTitle8: "Competitive Pricing",
    heroSubtitle8: "Direct factory pricing with no middlemen, reducing costs by 40% while maintaining premium quality",
    requestQuote: "Request a Quote",
    viewCapabilities: "View Capabilities",
    trustedSince: "Trusted Manufacturing Partner Since 2008",
    
    // Services
    ourCapabilities: "Our Capabilities",
    comprehensiveSolutions: "Comprehensive Manufacturing Solutions",
    
    // Common
    learnMore: "Learn More",
    contactUs: "Contact Us",
  },
  nl: {
    // Company
    companyName: "CDF Studio",
    tagline: "Premium Kledingoplossingen",
    
    // Navigation
    home: "Home",
    services: "Diensten",
    about: "Over Ons",
    process: "Proces",
    portfolio: "Portfolio",
    testimonials: "Getuigenissen",
    contact: "Contact",
    getQuote: "Offerte Aanvragen",
    
    // Hero
    heroTitle1: "Wij Produceren Premium Kleding voor Wereldwijde Merken",
    heroSubtitle1: "ISO-gecertificeerde faciliteit die maandelijks 500.000+ eenheden produceert voor internationale retailers en modemerken in 45+ landen",
    heroTitle2: "End-to-End Kledingoplossingen",
    heroSubtitle2: "Van stofinkoop tot eindlevering - compleet productie partnerschap voor merken van alle groottes",
    heroTitle3: "Kwaliteit Waar U Op Kunt Vertrouwen",
    heroSubtitle3: "99,2% kwaliteitsgoedkeuring met meertraps inspectieproces en internationale certificeringen",
    heroTitle4: "Duurzame Productie-excellentie",
    heroSubtitle4: "Milieuvriendelijke productieprocessen met GOTS-certificering en zero-waste initiatieven voor bewuste merken",
    heroTitle5: "Aangepast Ontwerp & Ontwikkeling",
    heroSubtitle5: "Expert ontwerpteam dat uw visie tot leven brengt met trendvoorspelling en technische ontwerpondersteuning",
    heroTitle6: "Snelle Doorlooptijden",
    heroSubtitle6: "Toonaangevende productiesnelheid met 7-daagse bemonstering en flexibele bulkproductieschema's",
    heroTitle7: "Wereldwijd Logistiek Netwerk",
    heroSubtitle7: "Naadloze wereldwijde verzending met vertrouwde vrachtpartners en realtime tracking voor tijdige levering",
    heroTitle8: "Concurrerende Prijzen",
    heroSubtitle8: "Directe fabrieksprijzen zonder tussenpersonen, kosten verlagen met 40% met behoud van premiumkwaliteit",
    requestQuote: "Offerte Aanvragen",
    viewCapabilities: "Bekijk Mogelijkheden",
    trustedSince: "Vertrouwde Productiepartner Sinds 2008",
    
    // Services
    ourCapabilities: "Onze Mogelijkheden",
    comprehensiveSolutions: "Uitgebreide Productieoplossingen",
    
    // Common
    learnMore: "Meer Informatie",
    contactUs: "Neem Contact Op",
  },
};
