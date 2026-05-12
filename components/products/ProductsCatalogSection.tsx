"use client";

import { useState } from "react";
import { Package, Sparkles, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { productCategories } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsCatalogSection() {
  const { language, t } = useLanguage();
  const currentProducts = productCategories[language];
  const [selectedProduct, setSelectedProduct] = useState<typeof currentProducts[0] | null>(null);

  const openProductDetail = (product: typeof currentProducts[0]) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const handleRequestQuote = (productName: string) => {
    const event = new CustomEvent('requestQuote', { detail: productName });
    window.dispatchEvent(event);
    
    closeProductDetail();
    
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          document.getElementById('requirements')?.focus();
        }, 800);
      }
    }, 300);
  };

  return (
    <>
      <section id="products" className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold mb-6 shadow-sm"
            >
              <Package className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 tracking-wide uppercase">{t("ourProducts")}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 md:mb-8 tracking-tight"
            >
              Premium Apparel{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                Catalog
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              {t("productsSubtitle")}
            </motion.p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentProducts.map((product, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                key={product.id}
                onClick={() => openProductDetail(product)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-slate-200/60 hover:border-blue-200 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Min Order */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      MOQ: <span className="font-semibold text-slate-800">{product.minOrder}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProductDetail}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button
                onClick={closeProductDetail}
                className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-200 backdrop-blur-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-100 flex-shrink-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Available Styles</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.products.map((item, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Minimum Order</h4>
                    <p className="text-xl font-bold text-slate-900">{selectedProduct.minOrder}</p>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <button
                    onClick={() => handleRequestQuote(selectedProduct.name)}
                    className="inline-flex w-full items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
