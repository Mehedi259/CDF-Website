"use client";

import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Clock, CheckCircle, Globe } from "lucide-react";
import { useState } from "react";
import PatternBackground from "@/components/backgrounds/PatternBackground";

export default function LightweightContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    requirements: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      {/* PatternCraft Background */}
      <PatternBackground variant="patterncraft-radial" className="opacity-35" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Start Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manufacturing Journey
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your project? Fill out the form and we'll respond within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Premium Contact Form */}
          <div className="group relative">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Request a Quote
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                    Full Name *
                  </label>
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
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                    Business Email *
                  </label>
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
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">
                    Company Name *
                  </label>
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
              </form>
            </div>
          </div>

          {/* Premium Contact Information */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
