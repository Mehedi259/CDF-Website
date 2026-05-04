"use client";

import { Factory, Layers, Clipboard, Package, Tag, ShieldCheck, ArrowRight, Sparkles, Zap } from "lucide-react";
import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import PatternBackground from "@/components/backgrounds/PatternBackground";

const iconMap = {
  factory: Factory,
  layers: Layers,
  clipboard: Clipboard,
  package: Package,
  tag: Tag,
  "shield-check": ShieldCheck,
};

// Service slug mapping - maps service ID to URL slug
const serviceSlugMap: Record<number, string> = {
  1: "apparel-manufacturing",
  2: "fabric-sourcing",
  3: "sampling-prototyping",
  4: "bulk-production",
  5: "private-label-oem-odm",
  6: "quality-control",
  7: "pattern-making-grading",
  8: "embroidery-printing",
  9: "washing-finishing",
  10: "packaging-labeling",
  11: "logistics-shipping",
  12: "design-consultation",
};

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* PatternCraft Style Background */}
      <PatternBackground variant="patterncraft-grid" className="opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manufacturing Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to delivery, we provide end-to-end apparel manufacturing services
            tailored to your business needs
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const serviceSlug = serviceSlugMap[service.id];
            
            return (
              <Link
                key={service.id}
                href={`/services/${serviceSlug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent cursor-pointer block"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                {/* Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Sparkles className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-bold">View Details</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Premium Benefit Card */}
                  <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                        Business Benefit
                      </p>
                    </div>
                    <p className="text-sm text-blue-700 font-medium">
                      {service.benefit}
                    </p>
                  </div>

                  {/* Example with Check */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {service.example}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Premium CTA */}
        <div className="text-center mt-16">
          <div className="inline-block relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            {/* Button */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              <span>Discuss Your Project Requirements</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
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
      `}</style>
    </section>
  );
}
