"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

const navLinks = [
  { nameKey: "home", href: "#home" },
  { nameKey: "services", href: "#services" },
  { nameKey: "about", href: "#about" },
  { nameKey: "process", href: "#process" },
  { nameKey: "portfolio", href: "#portfolio" },
  { nameKey: "testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Intersection Observer for active section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach(link => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-6"
      >
        <div className="container mx-auto">
          <motion.div
            animate={{
              backgroundColor: scrolled 
                ? "rgba(255, 255, 255, 0.98)" 
                : "rgba(255, 255, 255, 0.05)",
              backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
              boxShadow: scrolled 
                ? "0 10px 40px rgba(0, 0, 0, 0.1)" 
                : "0 5px 20px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/20 dark:border-slate-700/50 px-8 py-5 dark:bg-slate-900/95"
            style={{
              WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
            }}
          >
            <div className="flex items-center justify-between">
              {/* Logo - Vertical Layout */}
              <motion.a
                href="#home"
                className="flex flex-col items-center gap-1 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-2xl">C</span>
                </motion.div>
                <div className={`font-bold text-sm leading-tight transition-colors text-center ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
                  CDF Studio
                </div>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.a
                      key={link.nameKey}
                      href={link.href}
                      className="relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`relative z-10 ${
                        scrolled
                          ? isActive ? "text-white" : "text-slate-700 dark:text-slate-300"
                          : isActive ? "text-white" : "text-white/90"
                      }`}>
                        {t(link.nameKey)}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className={`absolute inset-0 rounded-xl ${
                            scrolled ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-white/20"
                          }`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {!isActive && (
                        <motion.div
                          className={`absolute inset-0 rounded-xl ${
                            scrolled ? "bg-slate-100 dark:bg-slate-800" : "bg-white/10"
                          } opacity-0 hover:opacity-100 transition-opacity`}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <motion.a
                  href="tel:+18005551234"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    scrolled
                      ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      : "text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium text-sm">+1 (800) 555-1234</span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("getQuote")}
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl"
            >
              <div className="h-full flex flex-col p-8">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-slate-900" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2 mb-8">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <motion.a
                        key={link.nameKey}
                        href={link.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                        className={`relative px-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t(link.nameKey)}
                        {isActive && (
                          <motion.div
                            layoutId="activeMobileSection"
                            className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-auto space-y-4">
                  <motion.a
                    href="tel:+18005551234"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors p-4 rounded-xl hover:bg-slate-100"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">+1 (800) 555-1234</span>
                  </motion.a>
                  <motion.a
                    href="mailto:info@cdfstudio.com"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors p-4 rounded-xl hover:bg-slate-100"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">info@cdfstudio.com</span>
                  </motion.a>
                  <motion.a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request a Quote
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
