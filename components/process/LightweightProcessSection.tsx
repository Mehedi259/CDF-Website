"use client";

import { MessageSquare, Pencil, Beaker, Cog, CheckCircle, Truck } from "lucide-react";
import { processSteps } from "@/lib/data";

const iconMap = [MessageSquare, Pencil, Beaker, Cog, CheckCircle, Truck];

export default function LightweightProcessSection() {
  return (
    <section id="process" className="relative py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            From Concept to Delivery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A streamlined, transparent workflow designed to bring your vision to life
          </p>
        </div>

        {/* Process Timeline - Simple */}
        <div className="max-w-4xl mx-auto space-y-6">
          {processSteps.map((step, index) => {
            const Icon = iconMap[index];

            return (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Timeline */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-900 rounded-xl px-10 py-6 text-white">
            <div className="text-sm font-semibold text-blue-400 mb-2">
              TYPICAL PROJECT TIMELINE
            </div>
            <div className="text-4xl font-bold mb-2">60-90 Days</div>
            <div className="text-slate-400 text-sm">
              From initial consultation to final delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
