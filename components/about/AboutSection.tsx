"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { companyData, stats, trustIndicators } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Trusted Manufacturing Partner
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building global brands through precision manufacturing and unwavering commitment to quality
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Manufacturing Excellence Since {companyData.established}
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                {companyData.name} was founded with a singular mission: to provide world-class
                apparel manufacturing services that empower brands to scale globally without
                compromising on quality or ethics.
              </p>
              <p>
                What started as a small facility with 50 employees has grown into a
                state-of-the-art manufacturing complex spanning 200,000 sq ft, employing over{" "}
                {companyData.employees} skilled professionals, and serving clients in{" "}
                {companyData.countries} countries.
              </p>
              <p>
                Our ISO-certified facility combines traditional craftsmanship with cutting-edge
                technology. We've invested heavily in automation, quality control systems, and
                sustainable manufacturing practices to ensure every garment meets international
                standards.
              </p>
              <p>
                We don't just manufacture products—we build partnerships. Our team works closely
                with each client to understand their unique requirements, market positioning, and
                growth objectives. This collaborative approach has resulted in long-term
                relationships with Fortune 500 companies and emerging brands alike.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-blue-600 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Our Mission</h4>
              <p className="leading-relaxed">
                To be the most trusted manufacturing partner for apparel brands worldwide by
                delivering exceptional quality, maintaining ethical practices, and fostering
                innovation in every aspect of production.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Strengths */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">
                Why Global Brands Choose Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">
                      Certified Quality
                    </h5>
                    <p className="text-sm text-slate-600">
                      ISO 9001, WRAP, GOTS, and Oeko-Tex certified facility
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">
                      Skilled Workforce
                    </h5>
                    <p className="text-sm text-slate-600">
                      850+ trained professionals with average 8+ years experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">
                      Global Reach
                    </h5>
                    <p className="text-sm text-slate-600">
                      Serving clients across North America, Europe, and Asia-Pacific
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">
                      Scalable Capacity
                    </h5>
                    <p className="text-sm text-slate-600">
                      From 1,000 to 500,000 units per order with flexible MOQs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">
                International Certifications
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {trustIndicators.map((cert, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-semibold text-blue-400">
                      {cert.title}
                    </div>
                    <div className="text-sm text-slate-400">
                      {cert.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
