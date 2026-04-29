"use client";

import { motion } from "framer-motion";
import { Factory, Layers, Clipboard, Package, Tag, ShieldCheck, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PatternBackground from "@/components/backgrounds/PatternBackground";

const iconMap = {
  factory: Factory,
  layers: Layers,
  clipboard: Clipboard,
  package: Package,
  tag: Tag,
  "shield-check": ShieldCheck,
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingCards, setIsScrollingCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scrollRef.current) return;

      const section = sectionRef.current;
      const scrollContainer = scrollRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        setIsScrollingCards(true);

        // Calculate scroll progress (0 to 1)
        const sectionHeight = section.offsetHeight;
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(scrolled / (sectionHeight - windowHeight), 1);
        setScrollProgress(progress);

        // Calculate horizontal scroll position
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const targetScroll = progress * maxScroll;
        scrollContainer.scrollLeft = targetScroll;
      } else {
        setIsScrollingCards(false);
      }
    };

    // Custom wheel event handler
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || !scrollRef.current) return;

      const section = sectionRef.current;
      const scrollContainer = scrollRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport and not at bottom
      if (rect.top <= 0 && rect.bottom > windowHeight) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;

        // If scrolling down and cards not finished
        if (e.deltaY > 0 && currentScroll < maxScroll - 10) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
        }
        // If scrolling up and at start of cards
        else if (e.deltaY < 0 && currentScroll > 10) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
        }
        // If cards finished scrolling, allow normal scroll
        else if (e.deltaY > 0 && currentScroll >= maxScroll - 10) {
          // Allow normal scroll to continue
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative bg-gradient-to-b from-white to-slate-50 scroll-mt-20"
      style={{ minHeight: '200vh' }} // Reduced for better scroll feel with wider cards
    >
      {/* Pattern Background */}
      <PatternBackground variant="hexagon" className="opacity-40" />
      
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4"
            >
              Our Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Comprehensive Manufacturing Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto"
            >
              From concept to delivery, we provide end-to-end apparel manufacturing services
              tailored to your business needs
            </motion.p>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Cards */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "smooth",
              }}
            >
              {services.slice(0, 5).map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap];
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-[700px]"
                  >
                    {/* Horizontal Layout: Image Left, Content Right */}
                    <div className="flex">
                      {/* Left Side - Image */}
                      <div className="relative w-[280px] flex-shrink-0 overflow-hidden">
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={280}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/20 to-slate-900/40" />
                        
                        {/* Icon on Image */}
                        <div className="absolute bottom-6 left-6">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>

                        {/* Service Number */}
                        <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg">
                          {index + 1}
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-base mb-5 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Benefit Badge */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-600"
                          >
                            <p className="text-sm font-semibold text-blue-900 mb-2">
                              💼 Business Benefit
                            </p>
                            <p className="text-sm text-blue-700 font-medium">
                              {service.benefit}
                            </p>
                          </motion.div>
                        </div>

                        {/* Bottom Section */}
                        <div>
                          {/* Example */}
                          <div className="pt-4 border-t border-slate-200 mb-4">
                            <p className="text-sm text-slate-500 italic flex items-start gap-2">
                              <span className="text-green-600 font-bold flex-shrink-0 text-lg">✓</span>
                              <span>{service.example}</span>
                            </p>
                          </div>

                          {/* Hover Arrow */}
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            className="flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <span className="text-sm">Learn More</span>
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scroll Hint */}
          {scrollProgress < 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8"
            >
              <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
                <span className="animate-bounce">↓</span>
                Keep scrolling to see all services
                <span className="animate-bounce">↓</span>
              </p>
            </motion.div>
          )}

          {scrollProgress >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Discuss Your Project Requirements
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
