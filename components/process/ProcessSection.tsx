"use client";

import { motion } from "framer-motion";
import { MessageSquare, Pencil, Beaker, Cog, CheckCircle, Truck } from "lucide-react";
import { processSteps } from "@/lib/data";
import PatternBackground from "@/components/backgrounds/PatternBackground";

const iconMap = [MessageSquare, Pencil, Beaker, Cog, CheckCircle, Truck];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 bg-white scroll-mt-20 overflow-hidden">
      {/* Pattern Background */}
      <PatternBackground variant="grid" className="opacity-25" />
      
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
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            From Concept to Delivery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A streamlined, transparent workflow designed to bring your vision to life with
            precision and efficiency
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = iconMap[index];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <span className="inline-block mt-2 sm:mt-0 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-blue-600 to-blue-300" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Total Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-900 rounded-2xl px-12 py-8 text-white">
            <div className="text-sm font-semibold text-blue-400 mb-2">
              TYPICAL PROJECT TIMELINE
            </div>
            <div className="text-5xl font-bold mb-2">60-90 Days</div>
            <div className="text-slate-400">
              From initial consultation to final delivery
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-6">
            Ready to start your manufacturing project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
