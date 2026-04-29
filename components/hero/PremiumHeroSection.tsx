"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import PatternBackground from "@/components/backgrounds/PatternBackground";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="relative h-screen w-full overflow-hidden bg-slate-950"
    >
      {/* Premium Pattern Background */}
      <PatternBackground variant="circuit" />

      {/* Background Slides with Enhanced Effects */}
      {slides.map((slide, index) => (
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
          
          {/* Image with Ken Burns Effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            animate={{
              scale: currentSlide === index ? [1, 1.1] : 1,
            }}
            transition={{ duration: 5, ease: "easeOut" }}
          />
        </motion.div>
      ))}

      {/* Content with Advanced Animations */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
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
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
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
                className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl"
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
