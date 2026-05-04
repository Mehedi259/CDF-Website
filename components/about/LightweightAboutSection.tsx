"use client";

import { Award, Users, Globe, TrendingUp, Sparkles, CheckCircle, Target } from "lucide-react";
import PatternBackground from "@/components/backgrounds/PatternBackground";

export default function LightweightAboutSection() {
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Purple Corner Grid Background */}
      <PatternBackground variant="purple-corner-grid" className="opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About CDF Studio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Your Trusted{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manufacturing Partner
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building global brands through precision manufacturing and unwavering commitment to excellence since 2008
          </p>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { value: "500K+", label: "Units Produced Monthly", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
            { value: "850+", label: "Skilled Employees", icon: Users, color: "from-purple-500 to-purple-600" },
            { value: "45+", label: "Countries Served", icon: Globe, color: "from-pink-500 to-pink-600" },
            { value: "99.2%", label: "Quality Pass Rate", icon: Award, color: "from-orange-500 to-orange-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Premium Key Strengths */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Certified Quality",
                description: "ISO 9001, WRAP, GOTS, and Oeko-Tex certified facility",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Skilled Workforce",
                description: "850+ trained professionals with average 8+ years experience",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Global Reach",
                description: "Serving clients across North America, Europe, and Asia-Pacific",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h5>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Check Icon */}
                  <div className="mt-4 flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Verified & Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Card */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Start?</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Partner with us for world-class manufacturing solutions tailored to your brand's unique needs
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Get Started Today</span>
                <CheckCircle className="w-5 h-5" />
              </a>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-blue-400/20 rounded-tl-3xl"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-purple-400/20 rounded-br-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
