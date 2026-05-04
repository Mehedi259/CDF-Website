"use client";

import { MessageSquare, Pencil, Beaker, Cog, CheckCircle, Truck, ArrowRight, Clock, Sparkles } from "lucide-react";
import { processSteps } from "@/lib/data";
import { useState } from "react";
import PatternBackground from "@/components/backgrounds/PatternBackground";

const iconMap = [MessageSquare, Pencil, Beaker, Cog, CheckCircle, Truck];

export default function LightweightProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Purple Corner Grid Background */}
      <PatternBackground variant="purple-corner-grid" className="opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            From Concept to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Delivery
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A streamlined, transparent workflow designed to bring your vision to life with precision and excellence
          </p>
        </div>

        {/* Premium Process Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = iconMap[index];
              const isEven = index % 2 === 0;
              const isHovered = hoveredStep === index;

              return (
                <div
                  key={step.step}
                  className="relative"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Mobile & Tablet Layout */}
                  <div className="md:hidden">
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Icon */}
                          <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                              {step.step}
                            </div>
                          </div>

                          {/* Duration Badge */}
                          <div className="ml-auto">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <span className="text-sm font-semibold text-blue-700">
                                {step.duration}
                              </span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating Sides */}
                  <div className="hidden md:block">
                    <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content Card */}
                      <div className="w-5/12">
                        <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200 ${isHovered ? 'scale-105' : ''}`}>
                          {/* Gradient Border Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
                          
                          <div className="relative z-10">
                            {/* Duration Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-4">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <span className="text-sm font-semibold text-blue-700">
                                {step.duration}
                              </span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                              {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              {step.description}
                            </p>

                            {/* Arrow Indicator */}
                            <div className={`absolute top-1/2 ${isEven ? '-right-6' : '-left-6'} transform -translate-y-1/2`}>
                              <ArrowRight className={`w-6 h-6 text-blue-400 ${!isEven ? 'rotate-180' : ''}`} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Icon */}
                      <div className="w-2/12 flex justify-center">
                        <div className="relative">
                          <div className={`w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 ${isHovered ? 'scale-125 rotate-6' : ''}`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            {step.step}
                          </div>
                          
                          {/* Pulse Effect */}
                          {isHovered && (
                            <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20"></div>
                          )}
                        </div>
                      </div>

                      {/* Empty Space for Alternating Layout */}
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium Total Timeline Card */}
        <div className="mt-20 text-center">
          <div className="inline-block relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-x"></div>
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl px-12 py-10 text-white shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <div className="text-sm font-bold text-blue-400 tracking-wider uppercase">
                  Typical Project Timeline
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                60-90 Days
              </div>
              <div className="text-slate-400 text-base">
                From initial consultation to final delivery
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-purple-400/30 rounded-br-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
