"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import PatternBackground from "@/components/backgrounds/PatternBackground";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import { founderQuotes } from "@/lib/data";
import Image from "next/image";

const slides = [
  {
    titleKey: "heroTitle1",
    subtitleKey: "heroSubtitle1",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
    alt: "Modern manufacturing facility",
  },
  {
    titleKey: "heroTitle2",
    subtitleKey: "heroSubtitle2",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1920&q=80",
    alt: "Production line",
  },
  {
    titleKey: "heroTitle3",
    subtitleKey: "heroSubtitle3",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
    alt: "Quality control",
  },
  {
    titleKey: "heroTitle4",
    subtitleKey: "heroSubtitle4",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=1920&q=80",
    alt: "Sustainable fashion",
  },
  {
    titleKey: "heroTitle5",
    subtitleKey: "heroSubtitle5",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
    alt: "Custom design",
  },
  {
    titleKey: "heroTitle6",
    subtitleKey: "heroSubtitle6",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1920&q=80",
    alt: "Fast production",
  },
  {
    titleKey: "heroTitle7",
    subtitleKey: "heroSubtitle7",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80",
    alt: "Global logistics",
  },
  {
    titleKey: "heroTitle8",
    subtitleKey: "heroSubtitle8",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&q=80",
    alt: "Competitive pricing",
  },
];

export default function PremiumHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Sync quote with slide
  useEffect(() => {
    setCurrentQuote(currentSlide % founderQuotes.length);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <motion.section 
      id="home"
      style={{ opacity, scale }}
      className="relative h-screen w-full overflow-hidden bg-slate-950"
    >
      {/* Premium Pattern Background */}
      <PatternBackground variant="circuit" />

      {/* Background Slides with Enhanced Effects */}
      {slides.map((slide, index) => {
        // Only render current, previous, and next slides for better performance
        const shouldRender = 
          index === currentSlide || 
          index === (currentSlide - 1 + slides.length) % slides.length ||
          index === (currentSlide + 1) % slides.length;
        
        if (!shouldRender) return null;
        
        return (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Gradient Overlays with Animation */}
            <motion.div 
              className="absolute inset-0 z-10"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90 z-10" />
            
            {/* Optimized Image with Next.js Image component */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={75}
              sizes="100vw"
              className="object-cover"
              style={{
                transform: currentSlide === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 5s ease-out',
              }}
            />
          </motion.div>
        );
      })}

      {/* Content with Advanced Animations */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="max-w-3xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Premium Badge with Glow */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-md"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(37, 99, 235, 0.3)",
                        "0 0 40px rgba(37, 99, 235, 0.5)",
                        "0 0 20px rgba(37, 99, 235, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-sm font-semibold tracking-wide">
                      {t("trustedSince")}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Animated Title with Text Reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                    <TextReveal 
                      text={t(slides[currentSlide].titleKey)}
                      className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                      delay={0.5}
                    />
                  </h1>
                </motion.div>

                {/* Subtitle with Stagger Animation */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed"
                >
                  {t(slides[currentSlide].subtitleKey)}
                </motion.p>

                {/* Premium CTA Buttons with Magnetic Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <MagneticButton
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:shadow-blue-500/70"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      {t("requestQuote")}
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </MagneticButton>

                  <MagneticButton
                    href="#services"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      {t("viewCapabilities")}
                      <Play className="w-6 h-6" />
                    </span>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Founder Quotes Cards */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md h-[500px]">
                {founderQuotes.map((quote, index) => (
                  <motion.div
                    key={quote.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ 
                      opacity: currentQuote === index ? 1 : 0,
                      scale: currentQuote === index ? 1 : 0.8,
                      rotateY: currentQuote === index ? 0 : 90,
                      zIndex: currentQuote === index ? 10 : 0,
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Glassmorphism Card */}
                    <div className="relative h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
                      
                      {/* Quote Icon */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Quote Text */}
                      <div className="relative mb-8">
                        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic">
                          "{quote.quote}"
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="relative flex items-center gap-4 mt-auto">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                          <Image
                            src={quote.image}
                            alt={quote.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">
                            {quote.author}
                          </h4>
                          <p className="text-blue-300 text-sm">
                            {quote.role}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-6">
        <motion.button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          ←
        </motion.button>
        
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-12 bg-gradient-to-r from-blue-500 to-purple-500" 
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <motion.button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          →
        </motion.button>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 z-30"
      >
        <div className="flex flex-col items-center gap-3 text-white/80">
          <span className="text-sm font-medium tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-14 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-2 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
