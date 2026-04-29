"use client";

import { Award, Users, Globe, TrendingUp } from "lucide-react";

export default function LightweightAboutSection() {
  return (
    <section 
      id="about" 
      className="relative py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Trusted Manufacturing Partner
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building global brands through precision manufacturing and unwavering commitment to excellence
          </p>
        </div>

        {/* Stats Grid - Simple, No Animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: "500K+", label: "Units Produced Monthly", icon: TrendingUp },
            { value: "850+", label: "Skilled Employees", icon: Users },
            { value: "45+", label: "Countries Served", icon: Globe },
            { value: "99.2%", label: "Quality Pass Rate", icon: Award },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths - Simple Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              icon: Award,
              title: "Certified Quality",
              description: "ISO 9001, WRAP, GOTS, and Oeko-Tex certified facility",
            },
            {
              icon: Users,
              title: "Skilled Workforce",
              description: "850+ trained professionals with average 8+ years experience",
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Serving clients across North America, Europe, and Asia-Pacific",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-slate-900 mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
