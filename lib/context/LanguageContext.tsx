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
    servicesSubtitle: "From concept to delivery, we provide end-to-end apparel manufacturing services tailored to your business needs",
    businessBenefit: "Business Benefit",
    viewDetails: "View Details",
    discussProject: "Discuss Your Project Requirements",
    
    // Products
    ourProducts: "Our Products",
    premiumCatalog: "Premium Apparel Catalog",
    productsSubtitle: "From t-shirts to blazers, we manufacture and supply high-quality apparel for global brands",
    featured: "Featured",
    minOrder: "MOQ:",
    viewAllProducts: "View All Products",
    completeCatalog: "Complete Product Catalog",
    browseAll: "Browse all",
    categoriesWeManufacture: "categories we manufacture",
    availableProducts: "Available Products:",
    more: "more",
    dontSeeWhatYouNeed: "Don't See What You're Looking For?",
    weOfferCustom: "We offer custom manufacturing solutions. Contact us to discuss your specific requirements.",
    contactUs: "Contact Us",
    productTypes: "Product Types",
    leadTime: "Lead Time",
    days: "Days",
    featuresSpecs: "Features & Specifications",
    readyToOrder: "Ready to Order",
    contactToday: "Contact us today to discuss your requirements, get a quote, and start your order",
    browseMore: "Browse More Products",

    // About
    aboutCdf: "About CDF Studio",
    trustedPartner: "Your Trusted Manufacturing Partner",
    aboutSubtitle: "Building global brands through precision manufacturing and unwavering commitment to excellence since 2008",
    verifiedCertified: "Verified & Certified",
    readyToStart: "Ready to Start?",
    letsBuild: "Let's Build Something Amazing Together",
    partnerWithUs: "Partner with us for world-class manufacturing solutions tailored to your brand's unique needs",
    getStarted: "Get Started Today",

    // Video
    meetFounders: "Meet Our Founders",
    ourStory: "Our Story, Your Success",
    videoSubtitle: "Discover how CDF Studio is revolutionizing apparel manufacturing with innovation, quality, and partnership.",
    watchStory: "Watch Our Story",
    videoDuration: "3 minutes • Behind the scenes at CDF Studio",

    // Process
    ourProcess: "Our Process",
    howWeWork: "How We Work",
    processSubtitle: "A streamlined manufacturing workflow designed for efficiency, transparency, and premium quality",
    typicalTimeline: "Typical Project Timeline",
    fromInitial: "From initial consultation to final delivery",

    // Portfolio
    caseStudies: "Case Studies",
    successStories: "Success Stories",
    portfolioSubtitle: "Real results from real partnerships",
    result: "Result",

    // Testimonials
    clientTestimonials: "Client Testimonials",
    trustedByLeaders: "Trusted by Industry Leaders",
    testimonialsSubtitle: "Here's what our partners say about working with us",

    // Contact
    getInTouch: "Get In Touch",
    startJourney: "Start Your Manufacturing Journey",
    contactSubtitle: "Ready to discuss your project? Fill out the form and we'll respond within 24 hours",
    fullName: "Full Name *",
    businessEmail: "Business Email *",
    contactCompanyName: "Company Name *",
    phoneNumber: "Phone Number",
    projectReqs: "Project Requirements *",
    sendInquiry: "Send Inquiry",
    sending: "Sending...",
    contactInfo: "Contact Info",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    officeLocation: "Office Location",
    responseWithin: "Response within 24 hours",
    businessHoursText: "Mon-Fri, 9AM-6PM CET",
    instantMessaging: "Instant messaging support",
    businessHours: "Business Hours",
    mondayFriday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    ourPromise: "Our Promise",
    promiseText: "We respond to all inquiries within 24 hours with a detailed proposal tailored to your requirements. Your success is our priority.",

    // Common
    learnMore: "Learn More",
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
    servicesSubtitle: "Van concept tot levering bieden wij end-to-end kledingproductiediensten op maat van uw bedrijfsbehoeften",
    businessBenefit: "Zakelijk Voordeel",
    viewDetails: "Bekijk Details",
    discussProject: "Bespreek Uw Projectvereisten",

    // Products
    ourProducts: "Onze Producten",
    premiumCatalog: "Premium Kledingcatalogus",
    productsSubtitle: "Van t-shirts tot blazers, wij produceren en leveren hoogwaardige kleding voor wereldwijde merken",
    featured: "Uitgelicht",
    minOrder: "MOQ:",
    viewAllProducts: "Bekijk Alle Producten",
    completeCatalog: "Volledige Productcatalogus",
    browseAll: "Blader door alle",
    categoriesWeManufacture: "categorieën die wij produceren",
    availableProducts: "Beschikbare Producten:",
    more: "meer",
    dontSeeWhatYouNeed: "Ziet U Niet Wat U Zoekt?",
    weOfferCustom: "Wij bieden maatwerk productieoplossingen. Neem contact met ons op om uw specifieke wensen te bespreken.",
    contactUs: "Neem Contact Op",
    productTypes: "Productsoorten",
    leadTime: "Doorlooptijd",
    days: "Dagen",
    featuresSpecs: "Kenmerken & Specificaties",
    readyToOrder: "Klaar om te Bestellen",
    contactToday: "Neem vandaag nog contact met ons op om uw vereisten te bespreken, een offerte aan te vragen en uw bestelling te starten",
    browseMore: "Blader Door Meer Producten",

    // About
    aboutCdf: "Over CDF Studio",
    trustedPartner: "Uw Vertrouwde Productiepartner",
    aboutSubtitle: "Wereldwijde merken bouwen door precisieproductie en niet-aflatende toewijding aan uitmuntendheid sinds 2008",
    verifiedCertified: "Geverifieerd & Gecertificeerd",
    readyToStart: "Klaar om te Beginnen?",
    letsBuild: "Laten we Samen Iets Geweldigs Bouwen",
    partnerWithUs: "Werk met ons samen voor productoplossingen van wereldklasse, afgestemd op de unieke behoeften van uw merk",
    getStarted: "Begin Vandaag Nog",

    // Video
    meetFounders: "Ontmoet Onze Oprichters",
    ourStory: "Ons Verhaal, Uw Succes",
    videoSubtitle: "Ontdek hoe CDF Studio de kledingindustrie revolutioneert met innovatie, kwaliteit en partnerschap.",
    watchStory: "Bekijk Ons Verhaal",
    videoDuration: "3 minuten • Achter de schermen bij CDF Studio",

    // Process
    ourProcess: "Ons Proces",
    howWeWork: "Hoe Wij Werken",
    processSubtitle: "Een gestroomlijnde productieworkflow ontworpen voor efficiëntie, transparantie en premium kwaliteit",
    typicalTimeline: "Typische Project Tijdlijn",
    fromInitial: "Van het eerste consult tot de uiteindelijke levering",

    // Portfolio
    caseStudies: "Casestudies",
    successStories: "Succesverhalen",
    portfolioSubtitle: "Echte resultaten uit echte partnerschappen",
    result: "Resultaat",

    // Testimonials
    clientTestimonials: "Klantbeoordelingen",
    trustedByLeaders: "Vertrouwd door Industrieleiders",
    testimonialsSubtitle: "Dit is wat onze partners zeggen over de samenwerking met ons",

    // Contact
    getInTouch: "Neem Contact Op",
    startJourney: "Start Uw Productiereis",
    contactSubtitle: "Klaar om uw project te bespreken? Vul het formulier in en we reageren binnen 24 uur",
    fullName: "Volledige Naam *",
    businessEmail: "Zakelijk E-mailadres *",
    contactCompanyName: "Bedrijfsnaam *",
    phoneNumber: "Telefoonnummer",
    projectReqs: "Projectvereisten *",
    sendInquiry: "Aanvraag Verzenden",
    sending: "Bezig met verzenden...",
    contactInfo: "Contactgegevens",
    email: "E-mailadres",
    phone: "Telefoon",
    whatsapp: "WhatsApp",
    officeLocation: "Kantoorlocatie",
    responseWithin: "Reactie binnen 24 uur",
    businessHoursText: "Ma-Vr, 9:00-18:00 CET",
    instantMessaging: "Directe berichtenondersteuning",
    businessHours: "Openingstijden",
    mondayFriday: "Maandag - Vrijdag",
    saturday: "Zaterdag",
    sunday: "Zondag",
    closed: "Gesloten",
    ourPromise: "Onze Belofte",
    promiseText: "We reageren op alle vragen binnen 24 uur met een gedetailleerd voorstel op maat. Uw succes is onze prioriteit.",

    // Common
    learnMore: "Meer Informatie",
  },
};
