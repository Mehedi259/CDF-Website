"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Globe, TrendingUp, Zap, Shield } from "lucide-react";
import { companyData, stats, trustIndicators } from "@/lib/data";
import { useRef } from "react";
import PatternBackground from "@/components/backgrounds/PatternBackground";
import CountUpStats from "@/components/animations/CountUpStats";
import ParallaxSection from "@/components/animations/ParallaxSection";

export default function PremiumAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Premium Pattern Background */}
      <PatternBackground variant="topography" className="opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Advanced Animation */}
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-blue-600 text-sm font-bold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              ABOUT US
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Your Trusted Manufacturing Partner
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Building global brands through precision manufacturing and unwavering commitment to excellence
          </motion.p>
        </motion.div>

        {/* Premium Stats Grid with Count-Up Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { value: 500, suffix: "K+", label: "Units Produced Monthly", icon: TrendingUp },
            { value: 850, suffix: "+", label: "Skilled Employees", icon: Users },
            { value: 45, suffix: "+", label: "Countries Served", icon: Globe },
            { value: 99.2, suffix: "%", label: "Quality Pass Rate", icon: Shield },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 border border-slate-200 overflow-hidden shadow-lg">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Count Up Number */}
                <div className="relative z-10">
                  <CountUpStats
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
                  />
                  <div className="text-slate-600 font-medium text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content - Features and Certifications */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
              {/* Key Strengths */}
              {[
                {
                  icon: Award,
                  title: "Certified Quality",
                  description: "ISO 9001, WRAP, GOTS, and Oeko-Tex certified facility",
                  color: "from-blue-600 to-cyan-600",
                },
                {
                  icon: Users,
                  title: "Skilled Workforce",
                  description: "850+ trained professionals with average 8+ years experience",
                  color: "from-purple-600 to-pink-600",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Serving clients across North America, Europe, and Asia-Pacific",
                  color: "from-green-600 to-emerald-600",
                },
                {
                  icon: Zap,
                  title: "Scalable Capacity",
                  description: "From 1,000 to 500,000 units per order with flexible MOQs",
                  color: "from-orange-600 to-red-600",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="group relative"
                >
                  <div className="relative bg-white backdrop-blur-xl rounded-2xl p-6 border border-slate-200 overflow-hidden shadow-lg">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-start gap-5 relative z-10">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <div>
                        <h5 className="font-bold text-xl text-slate-900 mb-2">
                          {feature.title}
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Certifications Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 border border-blue-400 overflow-hidden shadow-xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">
                  International Certifications
                </h4>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {trustIndicators.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
                    >
                      <div className="font-bold text-white mb-1 text-sm">
                        {cert.title}
                      </div>
                      <div className="text-xs text-blue-100">
                        {cert.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
