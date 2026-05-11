"use client";

import { CheckCircle } from "lucide-react";
import { portfolio } from "@/lib/data";
import { useLanguage } from "@/lib/context/LanguageContext";
import { motion } from "framer-motion";

export default function LightweightPortfolioSection() {
  const { language, t } = useLanguage();
  const currentPortfolio = portfolio[language];
  return (
    <section id="portfolio" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">{t("caseStudies")}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t("successStories")}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t("portfolioSubtitle")}</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentPortfolio.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              key={project.id}
              className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
