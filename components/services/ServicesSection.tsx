"use client";

import { Factory, Layers, Clipboard, Package, Tag, ShieldCheck, ArrowRight, Sparkles, Zap, X, CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
import { services } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

const iconMap = {
  factory: Factory,
  layers: Layers,
  clipboard: Clipboard,
  package: Package,
  tag: Tag,
  "shield-check": ShieldCheck,
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const openServiceDetail = (service: typeof services[0]) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };
  return (
    <section 
      id="services" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

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
          {services.slice(0, 6).map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                onClick={() => openServiceDetail(service)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent cursor-pointer"
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
              </div>
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp">
            {/* Close Button */}
            <button
              onClick={closeServiceDetail}
              className="absolute top-6 right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Image Section */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                
                {/* Service Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-white text-sm font-bold mb-4 shadow-lg">
                      {(() => {
                        const Icon = iconMap[selectedService.icon as keyof typeof iconMap];
                        return <Icon className="w-5 h-5" />;
                      })()}
                      <span>Premium Service</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {selectedService.title}
                    </h2>
                    <p className="text-xl text-white/90 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Details Content */}
              <div className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  {/* Key Benefits */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <Sparkles className="w-7 h-7 text-blue-600" />
                      Business Benefits
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {selectedService.benefit}
                      </p>
                    </div>
                  </div>

                  {/* Success Example */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                      Success Story
                    </h3>
                    <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                      <p className="text-lg text-green-900 leading-relaxed">
                        {selectedService.example}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <TrendingUp className="w-7 h-7 text-blue-600" />
                      What's Included
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { title: "Expert Consultation", desc: "Dedicated team to understand your requirements" },
                        { title: "Quality Assurance", desc: "Multi-stage inspection and quality control" },
                        { title: "Timely Delivery", desc: "On-time delivery with progress tracking" },
                        { title: "Competitive Pricing", desc: "Best value for premium quality services" },
                        { title: "Custom Solutions", desc: "Tailored to your specific business needs" },
                        { title: "24/7 Support", desc: "Responsive customer service team" },
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{idx + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                            <p className="text-sm text-slate-600">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Timeline */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <Clock className="w-7 h-7 text-blue-600" />
                      Service Process
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: "1", title: "Initial Consultation", desc: "Discuss your requirements and project scope" },
                        { step: "2", title: "Proposal & Quote", desc: "Receive detailed proposal with pricing" },
                        { step: "3", title: "Production Start", desc: "Begin manufacturing with quality checks" },
                        { step: "4", title: "Delivery", desc: "On-time delivery with full documentation" },
                      ].map((process, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                            {process.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 mb-1">{process.title}</h4>
                            <p className="text-sm text-slate-600">{process.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-25"></div>
                    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Get Started with {selectedService.title}?
                      </h3>
                      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your project requirements and receive a customized quote
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="#contact"
                          onClick={closeServiceDetail}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                          <span>Request Quote</span>
                          <ArrowRight className="w-5 h-5" />
                        </a>
                        <button
                          onClick={closeServiceDetail}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all duration-300"
                        >
                          <span>View Other Services</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
