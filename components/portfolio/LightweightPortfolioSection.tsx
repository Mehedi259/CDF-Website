"use client";

import { CheckCircle } from "lucide-react";
import { portfolio } from "@/lib/data";

export default function LightweightPortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolio.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.category}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.client}
                </h3>
                <p className="text-slate-600 mb-6">
                  {project.description}
                </p>

                {/* Result */}
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-green-900 mb-1">
                      Result
                    </p>
                    <p className="text-sm text-green-700">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-slate-900 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                200+
              </div>
              <div className="text-slate-400">
                Successful Projects
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                98.5%
              </div>
              <div className="text-slate-400">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                150+
              </div>
              <div className="text-slate-400">
                Active Clients
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                10M+
              </div>
              <div className="text-slate-400">
                Units Produced
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
