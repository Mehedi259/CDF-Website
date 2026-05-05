"use client";

import { useLanguage } from "@/lib/context/LanguageContext";
import { 
  Command, 
  Aperture, 
  Triangle, 
  Hexagon, 
  Octagon, 
  Compass, 
  Crosshair, 
  Cpu,
  Activity,
  Zap,
  Box,
  Layers,
  Code,
  Monitor
} from "lucide-react";

// Premium Mock Brands with Icons
const topRowBrands = [
  { name: "Apex", icon: Triangle },
  { name: "Lumina", icon: Aperture },
  { name: "Nexus", icon: Command },
  { name: "Forge", icon: Hexagon },
  { name: "Prism", icon: Octagon },
  { name: "Atlas", icon: Compass },
  { name: "Focus", icon: Crosshair },
];

const bottomRowBrands = [
  { name: "Studio", icon: Cpu },
  { name: "Design", icon: Activity },
  { name: "Motion", icon: Zap },
  { name: "Build", icon: Box },
  { name: "Deploy", icon: Layers },
  { name: "Connect", icon: Code },
  { name: "Stream", icon: Monitor },
];

export default function InfiniteLogoCarousel() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden border-t border-slate-800">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-[0.2em] uppercase mb-4">
          Trusted By Global Leaders
        </h3>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto"></div>
      </div>

      <div className="relative w-full flex flex-col gap-8 overflow-hidden z-10">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

        {/* Top Marquee (Moves Left) */}
        <div className="flex w-fit animate-marquee-left hover:animate-pause">
          {[...Array(3)].map((_, i) => (
            <div key={`top-${i}`} className="flex shrink-0 items-center gap-12 px-6">
              {topRowBrands.map((brand, index) => (
                <div 
                  key={`top-${i}-${index}`} 
                  className="group flex items-center gap-3 px-8 py-4 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:bg-slate-800 hover:border-slate-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500 cursor-pointer backdrop-blur-sm"
                >
                  <brand.icon className="w-8 h-8 text-slate-500 group-hover:text-blue-400 transition-colors duration-500" />
                  <span className="text-2xl font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors duration-500">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Marquee (Moves Right) */}
        <div className="flex w-fit animate-marquee-right hover:animate-pause">
          {[...Array(3)].map((_, i) => (
            <div key={`bottom-${i}`} className="flex shrink-0 items-center gap-12 px-6">
              {bottomRowBrands.map((brand, index) => (
                <div 
                  key={`bottom-${i}-${index}`} 
                  className="group flex items-center gap-3 px-8 py-4 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:bg-slate-800 hover:border-slate-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 cursor-pointer backdrop-blur-sm"
                >
                  <brand.icon className="w-8 h-8 text-slate-500 group-hover:text-purple-400 transition-colors duration-500" />
                  <span className="text-2xl font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors duration-500">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
