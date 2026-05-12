"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import Image from "next/image";
import { founderQuotes } from "@/lib/data";

const slides = [
  {
    titleKey: "heroTitle1",
    subtitleKey: "heroSubtitle1",
    image: "/hero/hero-1.jpg",
    alt: "Modern manufacturing facility",
    founderIndex: 0, // Iris van Herpen
  },
  {
    titleKey: "heroTitle2",
    subtitleKey: "heroSubtitle2",
    image: "/hero/hero-2.png",
    alt: "Production line",
    founderIndex: 1, // Lidewij Edelkoort
  },
  {
    titleKey: "heroTitle3",
    subtitleKey: "heroSubtitle3",
    image: "/hero/hero-3.png",
    alt: "Quality control",
    founderIndex: 2, // Viktor Horsting
  }
];

export default function OptimizedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, t } = useLanguage();

  // Auto-rotate slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      id="home"
      className="relative h-screen w-full overflow-hidden bg-slate-900"
    >
      {/* Background Slides - Optimized: Only render current and next */}
      {slides.map((slide, index) => {
        const isCurrent = index === currentSlide;
        const isNext = index === (currentSlide + 1) % slides.length;
        
        // Only render current and next slide
        if (!isCurrent && !isNext) return null;
        
        return (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: isCurrent ? 1 : 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 z-10" />
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={60}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        );
      })}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Main Content */}
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6"
                  >
                    <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                      {t("trustedSince")}
                    </span>
                  </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-[1.1]"
                    >
                    <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                      {t(slides[currentSlide].titleKey)}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed"
                  >
                    {t(slides[currentSlide].subtitleKey)}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-5"
                  >
                    <a
                      href="#contact"
                      className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative z-10 flex items-center">
                        {t("requestQuote")}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Founder Quote Card (Glass Morphism) */}
            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  {/* Glass Morphism Card */}
                  <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] animate-float">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl border-4 border-slate-900">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Founder Image */}
                    <div className="mb-6">
                      <div className="relative w-24 h-24 mx-auto">
                        <Image
                          src={founderQuotes[language as "en" | "nl"][slides[currentSlide].founderIndex].image}
                          alt={founderQuotes[language as "en" | "nl"][slides[currentSlide].founderIndex].author}
                          fill
                          className="rounded-full object-cover border-4 border-white/30"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-white text-lg md:text-xl font-medium leading-relaxed mb-6 text-center">
                      "{founderQuotes[language as "en" | "nl"][slides[currentSlide].founderIndex].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="text-center">
                      <div className="font-bold text-white text-lg mb-1">
                        {founderQuotes[language as "en" | "nl"][slides[currentSlide].founderIndex].author}
                      </div>
                      <div className="text-blue-300 text-sm font-medium">
                        {founderQuotes[language as "en" | "nl"][slides[currentSlide].founderIndex].role}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-600/20 rounded-full blur-3xl -z-10"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 z-30"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
