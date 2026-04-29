"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import PatternBackground from "@/components/backgrounds/PatternBackground";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
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
    
    try {
      // EmailJS configuration
      // You need to replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID' || !serviceId) {
        // Fallback to mailto if EmailJS is not configured
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
        
        alert("Your email client will open to send the message. Please click send in your email application.");
        setFormData({ name: "", email: "", company: "", phone: "", requirements: "" });
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company_name: formData.company,
        phone_number: formData.phone || 'Not provided',
        message: formData.requirements,
        to_email: 'info@cdfstudio.com',
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", phone: "", requirements: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      alert("There was an error sending your message. Please try again or contact us directly at info@cdfstudio.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
      {/* Pattern Background */}
      <PatternBackground variant="dots" className="opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Start Your Manufacturing Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your project? Fill out the form below and our team will respond
            within 24 hours with a detailed proposal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Request a Production Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your project: product type, quantity, timeline, quality requirements, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Email</div>
                    <a href="mailto:info@cdfstudio.com" className="text-blue-600 hover:text-blue-700">
                      info@cdfstudio.com
                    </a>
                    <div className="text-sm text-slate-500 mt-1">
                      Response within 24 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Phone</div>
                    <a href="tel:+31687620061" className="text-blue-600 hover:text-blue-700">
                      +31 6 87620061
                    </a>
                    <div className="text-sm text-slate-500 mt-1">
                      Mon-Fri, 9AM-6PM EST
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">WhatsApp</div>
                    <a href="https://wa.me/31687620061" className="text-blue-600 hover:text-blue-700">
                      +31 6 87620061
                    </a>
                    <div className="text-sm text-slate-500 mt-1">
                      Instant messaging support
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Factory Location</div>
                    <div className="text-slate-600">
                      Industrial Zone, Sector 45<br />
                      Manufacturing District<br />
                      Bangladesh
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  All times are in Eastern Standard Time (EST). For urgent inquiries outside
                  business hours, please use WhatsApp.
                </p>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-blue-100 leading-relaxed">
                We understand that time is critical in manufacturing. Our team commits to
                responding to all inquiries within 24 hours with a detailed proposal tailored
                to your specific requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
