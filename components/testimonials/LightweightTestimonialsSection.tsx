"use client";

import { Star, Quote, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { testimonials } from "@/lib/data";
import PatternBackground from "@/components/backgrounds/PatternBackground";

export default function LightweightTestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Purple Corner Grid Background */}
      <PatternBackground variant="purple-corner-grid" className="opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here's what our partners say about working with us
          </p>
        </div>

        {/* Premium Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

              {/* Quote Icon with Gradient */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Premium Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="relative">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  </div>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Premium Author Card */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-blue-200 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Premium Trust Badges */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-16">
              <div className="grid md:grid-cols-3 gap-10 text-center">
                {[
                  { icon: TrendingUp, value: "15+ Years", label: "Industry Experience", color: "from-blue-400 to-cyan-400" },
                  { icon: Users, value: "99.2%", label: "Client Satisfaction Rate", color: "from-purple-400 to-pink-400" },
                  { icon: Award, value: "85%", label: "Repeat Business Rate", color: "from-orange-400 to-red-400" },
                ].map((stat, index) => (
                  <div key={index} className="group/stat">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform group-hover/stat:scale-110 group-hover/stat:rotate-6 transition-all duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

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
