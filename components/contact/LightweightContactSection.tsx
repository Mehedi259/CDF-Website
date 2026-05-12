"use client";

import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Clock, CheckCircle, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { motion } from "framer-motion";

export default function LightweightContactSection() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    requirements: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleQuoteRequest = (e: Event) => {
      const customEvent = e as CustomEvent;
      const productName = customEvent.detail;
      if (productName) {
        setFormData(prev => ({
          ...prev,
          requirements: `I am interested in getting a quote for: ${productName}\n\n${prev.requirements}`
        }));
      }
    };

    window.addEventListener('requestQuote', handleQuoteRequest);
    return () => window.removeEventListener('requestQuote', handleQuoteRequest);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple mailto fallback
    const subject = `New Production Quote Request from ${formData.company}`;
    const body = `
New Production Quote Request

Full Name: ${formData.name}
Business Email: ${formData.email}
Company Name: ${formData.company}
Phone Number: ${formData.phone || 'Not provided'}

Project Requirements:
${formData.requirements}

---
This inquiry was submitted through the CDF Studio website contact form.
    `.trim();

    const mailtoLink = `mailto:info@cdfstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    alert("Your email client will open to send the message.");
    setFormData({ name: "", email: "", company: "", phone: "", requirements: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 tracking-wide uppercase">{t("getInTouch")}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            {t("startJourney").split(" ").slice(0, 2).join(" ")} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">{t("startJourney").split(" ").slice(2).join(" ")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {t("contactSubtitle")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="group relative h-full flex flex-col"
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Request a Quote
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">{t("fullName")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">{t("businessEmail")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">{t("companyName")}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-bold text-slate-700 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-slate-900 placeholder:text-slate-400"
                    placeholder="Tell us about your project requirements, quantities, timeline, etc."
                  />
                </div>

                <div className="mt-auto pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn relative w-full"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover/btn:opacity-50 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      <Send className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Premium Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="flex flex-col h-full justify-between gap-6"
          >
            {/* Contact Cards */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Contact Info
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Email</div>
                      <a href="mailto:info@cdfstudio.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                        info@cdfstudio.com
                      </a>
                      <div className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Response within 24 hours
                      </div>
                    </div>
                  </div>

                  <div className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Phone</div>
                      <a href="tel:+31687620061" className="text-purple-600 hover:text-purple-700 font-semibold">
                        +31 6 87620061
                      </a>
                      <div className="text-sm text-slate-500 mt-1">
                        Mon-Fri, 9AM-6PM CET
                      </div>
                    </div>
                  </div>

                  <div className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">WhatsApp</div>
                      <a href="https://wa.me/31687620061" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">
                        +31 6 87620061
                      </a>
                      <div className="text-sm text-slate-500 mt-1">
                        Instant messaging support
                      </div>
                    </div>
                  </div>

                  <div className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Office Location</div>
                      <div className="text-slate-600 text-sm leading-relaxed">
                        Amsterdam, Netherlands<br />
                        <span className="text-slate-500">Factory: Bangladesh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Business Hours */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                    <span className="text-slate-300">Monday - Friday</span>
                    <span className="font-bold text-blue-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                    <span className="text-slate-300">Saturday</span>
                    <span className="font-bold text-purple-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                    <span className="text-slate-300">Sunday</span>
                    <span className="font-bold text-slate-400">Closed</span>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-blue-400/20 rounded-tr-3xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-purple-400/20 rounded-bl-3xl"></div>
              </div>
            </div>

            {/* Premium Promise Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Our Promise</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  We respond to all inquiries within 24 hours with a detailed proposal tailored to your requirements. Your success is our priority.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
