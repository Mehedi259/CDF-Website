"use client";

import { Award, Users, Globe, TrendingUp, Sparkles, CheckCircle, Target, Package, MessageSquare, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { motion } from "framer-motion";
import { stats, companyData } from "@/lib/data";

export default function LightweightAboutSection() {
  const { language, t } = useLanguage();
  const currentStats = stats[language];
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Main Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 tracking-wide uppercase">About CDF Studio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            A manufacturing partner built around the needs of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">early-stage brands.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium space-y-6 text-left md:text-center"
          >
            <p>
              CDF Studio is a B2B clothing manufacturing partner for startup and early-stage fashion brands. We work with founders who are developing new collections and need a structured, dependable production process — not just a factory that processes an order.
            </p>
            <p>
              From fabric sourcing and sampling through production, quality control, and shipment coordination, we manage each stage with consistent communication, realistic timelines, and a focus on fit, finish, and repeatable quality.
            </p>
          </motion.div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="group relative bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Make clothing manufacturing more accessible, reliable, and responsible for startup fashion brands.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
              className="group relative bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Become a trusted long-term manufacturing partner for founders who value clarity, quality, and ethical production.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="max-w-5xl mx-auto mt-12 md:mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Package className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Low MOQ</h4>
              <p className="text-slate-600 leading-relaxed">
                We work with brands building carefully. Small, intentional production runs are where good collections start.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Transparent Communication</h4>
              <p className="text-slate-600 leading-relaxed">
                You'll know where your order stands at every stage — clear updates, realistic timelines, no surprises.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Responsible Production</h4>
              <p className="text-slate-600 leading-relaxed">
                Ethical manufacturing practices are part of how we work, not something we add on as a marketing claim.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Premium CTA Card */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Start?</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Partner with us for world-class manufacturing solutions tailored to your brand's unique needs
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Get Started Today</span>
                <CheckCircle className="w-5 h-5" />
              </a>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-blue-400/20 rounded-tl-3xl"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-purple-400/20 rounded-br-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
