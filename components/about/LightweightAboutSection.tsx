"use client";

import { Award, Users, Globe, TrendingUp, Sparkles, CheckCircle, Target } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { motion } from "framer-motion";
import { stats, companyData } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

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
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 tracking-wide uppercase">{t("aboutCdf")}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            {t("trustedPartner").split(" ").slice(0, 2).join(" ")} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t("trustedPartner").split(" ").slice(2).join(" ")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {t("aboutSubtitle")}
          </motion.p>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {currentStats.map((stat, index) => {
            const statsDecorations = [
              { color: "from-blue-500 to-blue-600" },
              { color: "from-purple-500 to-purple-600" },
              { color: "from-pink-500 to-pink-600" },
              { color: "from-orange-500 to-orange-600" },
            ];
            const decoration = statsDecorations[index] || statsDecorations[0];
            return (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${decoration.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out`}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3 tracking-tight">
                <AnimatedCounter value={stat.value} duration={2} />
              </div>
              <div className="text-base text-slate-500 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          );
          })}
        </div>

        {/* Premium Key Strengths */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Certified Quality",
                description: "ISO 9001, WRAP, GOTS, and Oeko-Tex certified facility",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Skilled Workforce",
                description: "850+ trained professionals with average 8+ years experience",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Global Reach",
                description: "Serving clients across North America, Europe, and Asia-Pacific",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h5>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Check Icon */}
                  <div className="mt-4 flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Verified & Certified</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
