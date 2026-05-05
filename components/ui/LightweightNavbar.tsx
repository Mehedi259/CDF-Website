"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const navLinks = [
  { nameKey: "home", href: "/#home" },
  { nameKey: "services", href: "/#services" },
  { nameKey: "about", href: "/#about" },
  { nameKey: "process", href: "/#process" },
  { nameKey: "portfolio", href: "/#portfolio" },
  { nameKey: "testimonials", href: "/#testimonials" },
];

export default function LightweightNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Simple active section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
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
      {/* Compact Transparent Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="container mx-auto">
          <div
            className={`rounded-xl border transition-all duration-300 px-4 py-2 ${
              scrolled
                ? "bg-white/95 backdrop-blur-lg border-slate-200 shadow-lg"
                : "bg-white/10 backdrop-blur-md border-white/20 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Compact Logo */}
              <a
                href="/"
                className="flex items-center gap-2 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <div className={`font-bold text-sm transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
                  CDF Studio
                </div>
              </a>

              {/* Desktop Navigation - Compact */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.nameKey}
                      href={link.href}
                      className={`relative px-3 py-1.5 rounded-lg font-medium text-sm transition-all ${
                        scrolled
                          ? isActive 
                            ? "bg-blue-600 text-white" 
                            : "text-slate-700 hover:bg-slate-100"
                          : isActive 
                            ? "bg-white/20 text-white" 
                            : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      {t(link.nameKey)}
                    </a>
                  );
                })}
              </div>

              {/* Desktop CTA - Compact */}
              <div className="hidden lg:flex items-center gap-2">
                <LanguageSwitcher />
                <a
                  href="tel:+31687620061"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
                    scrolled
                      ? "text-slate-700 hover:bg-slate-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="font-medium">+31 6 87620061</span>
                </a>
                <a
                  href="/#contact"
                  className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold rounded-lg transition-all shadow-md"
                >
                  {t("getQuote")}
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-1.5 rounded-lg transition-colors ${
                  scrolled
                    ? "text-slate-900 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden shadow-2xl">
            <div className="h-full flex flex-col p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-900" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-2 mb-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.nameKey}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 rounded-lg font-semibold transition-all ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t(link.nameKey)}
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Contact */}
              <div className="mt-auto space-y-3">
                <div className="flex justify-center mb-4">
                  <LanguageSwitcher />
                </div>
                <a
                  href="tel:+31687620061"
                  className="flex items-center gap-3 text-slate-700 p-3 rounded-lg hover:bg-slate-100"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-sm">+31 6 87620061</span>
                </a>
                <a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
