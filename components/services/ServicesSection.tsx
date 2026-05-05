"use client";

import { Factory, Layers, Clipboard, Package, Tag, ShieldCheck, ArrowRight, Sparkles, Zap } from "lucide-react";
import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { motion } from "framer-motion";

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
  const { language, t } = useLanguage();
  const currentServices = services[language];
  return (
    <section 
      id="services" 
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm font-semibold mb-6 backdrop-blur-md"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 tracking-wide uppercase">{t("ourCapabilities")}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            {t("comprehensiveSolutions").split(" ")[0]} <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">{t("comprehensiveSolutions").substring(t("comprehensiveSolutions").indexOf(" ") + 1)}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t("servicesSubtitle")}
          </motion.p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentServices.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const serviceSlug = serviceSlugMap[service.id];
            
            return (
              <motion.a
                initial={{ opacity: 0, x: index % 3 === 0 ? -80 : index % 3 === 2 ? 80 : 0, y: index % 3 === 1 ? 80 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                key={service.id}
                href={`/services/${serviceSlug}`}
                className="group relative bg-slate-900/40 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all duration-500 border border-white/10 hover:border-blue-500/50 cursor-pointer block backdrop-blur-sm hover:-translate-y-2"
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
                    <div className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold shadow-xl border border-white/10">
                      0{index + 1}
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

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Premium Benefit Card */}
                  <div className="mb-6 p-4 bg-slate-900/50 rounded-xl border border-white/5 group-hover:border-blue-500/30 transition-colors">
                    <div className="flex items-start gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                        Business Benefit
                      </p>
                    </div>
                    <p className="text-sm text-slate-300 font-medium">
                      {service.benefit}
                    </p>
                  </div>

                  {/* Example with Check */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm text-slate-400 line-clamp-2">
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
              </motion.a>
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
              <span>{t("discussProject")}</span>
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
