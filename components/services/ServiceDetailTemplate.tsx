"use client";

import { ArrowRight, CheckCircle, Sparkles, Clock, Package, Factory, Layers, Clipboard, Tag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap = {
  factory: Factory,
  layers: Layers,
  clipboard: Clipboard,
  package: Package,
  tag: Tag,
  "shield-check": ShieldCheck,
};

interface ServiceDetailProps {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
  image: string;
  benefit: string;
  example: string;
}

export default function ServiceDetailTemplate({
  iconName,
  title,
  description,
  image,
  benefit,
  example,
}: ServiceDetailProps) {
  const Icon = iconMap[iconName];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-white text-sm font-bold mb-4 shadow-lg">
              <Icon className="w-5 h-5" />
              <span>Premium Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Business Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-blue-600" />
              Business Benefits
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <p className="text-lg text-slate-700 leading-relaxed">
                {benefit}
              </p>
            </div>
          </div>

          {/* Success Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Success Story
            </h2>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <p className="text-lg text-green-900 leading-relaxed">
                {example}
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Package className="w-8 h-8 text-blue-600" />
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Expert Consultation", desc: "Dedicated team to understand your requirements" },
                { title: "Quality Assurance", desc: "Multi-stage inspection and quality control" },
                { title: "Timely Delivery", desc: "On-time delivery with progress tracking" },
                { title: "Competitive Pricing", desc: "Best value for premium quality services" },
                { title: "Custom Solutions", desc: "Tailored to your specific business needs" },
                { title: "24/7 Support", desc: "Responsive customer service team" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              Service Process
            </h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Initial Consultation", desc: "Discuss your requirements and project scope" },
                { step: "2", title: "Proposal & Quote", desc: "Receive detailed proposal with pricing" },
                { step: "3", title: "Production Start", desc: "Begin manufacturing with quality checks" },
                { step: "4", title: "Delivery", desc: "On-time delivery with full documentation" },
              ].map((process, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{process.title}</h3>
                    <p className="text-slate-600">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-25"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started with {title}?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and receive a customized quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
