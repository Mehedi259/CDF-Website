"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import Image from "next/image";
import { founderQuotes } from "@/lib/data";
import PatternBackground from "@/components/backgrounds/PatternBackground";

const slides = [
  {
    titleKey: "heroTitle1",
    subtitleKey: "heroSubtitle1",
    image: "/hero/hero-1.webp",
    alt: "Modern manufacturing facility",
    founderIndex: 0, // Sarah Chen
  },
  {
    titleKey: "heroTitle2",
    subtitleKey: "heroSubtitle2",
    image: "/hero/hero-2.webp",
    alt: "Production line",
    founderIndex: 1, // Michael Rodriguez
  },
  {
    titleKey: "heroTitle3",
    subtitleKey: "heroSubtitle3",
    image: "/hero/hero-3.webp",
    alt: "Quality control",
    founderIndex: 4, // Emma Thompson
  },
  {
    titleKey: "heroTitle4",
    subtitleKey: "heroSubtitle4",
    image: "/hero/hero-4.webp",
    alt: "Sustainable fashion",
    founderIndex: 2, // Priya Sharma
  },
  {
    titleKey: "heroTitle5",
    subtitleKey: "heroSubtitle5",
    image: "/hero/hero-5.webp",
    alt: "Custom design",
    founderIndex: 3, // David Kim
  },
  {
    titleKey: "heroTitle6",
    subtitleKey: "heroSubtitle6",
    image: "/hero/hero-6.webp",
    alt: "Fast production",
    founderIndex: 5, // James Wilson
  },
  {
    titleKey: "heroTitle7",
    subtitleKey: "heroSubtitle7",
    image: "/hero/hero-7.webp",
    alt: "Global logistics",
    founderIndex: 6, // Sofia Martinez
  },
  {
    titleKey: "heroTitle8",
    subtitleKey: "heroSubtitle8",
    image: "/hero/hero-8.webp",
    alt: "Competitive pricing",
    founderIndex: 7, // Robert Chang
  },
];

export default function OptimizedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

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
      {/* Purple Corner Grid Background */}
      <PatternBackground variant="purple-corner-grid" className="opacity-100" />
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    {t(slides[currentSlide].titleKey)}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
                  >
                    {t(slides[currentSlide].subtitleKey)}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
                    >
                      {t("requestQuote")}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="#services"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
                    >
                      {t("viewCapabilities")}
                      <Play className="ml-2 w-5 h-5" />
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
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Founder Image */}
                    <div className="mb-6">
                      <div className="relative w-24 h-24 mx-auto">
                        <Image
                          src={founderQuotes[slides[currentSlide].founderIndex].image}
                          alt={founderQuotes[slides[currentSlide].founderIndex].author}
                          fill
                          className="rounded-full object-cover border-4 border-white/30"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-white text-lg md:text-xl font-medium leading-relaxed mb-6 text-center">
                      "{founderQuotes[slides[currentSlide].founderIndex].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="text-center">
                      <div className="font-bold text-white text-lg mb-1">
                        {founderQuotes[slides[currentSlide].founderIndex].author}
                      </div>
                      <div className="text-blue-300 text-sm font-medium">
                        {founderQuotes[slides[currentSlide].founderIndex].role}
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

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-blue-500" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Next slide"
        >
          →
        </button>
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
