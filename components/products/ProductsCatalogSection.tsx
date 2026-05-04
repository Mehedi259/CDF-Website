"use client";

import { useState } from "react";
import { X, ArrowRight, Package, Sparkles } from "lucide-react";
import Image from "next/image";
import PatternBackground from "@/components/backgrounds/PatternBackground";

// Product Categories Data
const productCategories = [
  {
    id: 1,
    name: "T-Shirts & Tops",
    description: "Premium quality cotton and polyester blend t-shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    products: ["Basic Tees", "Polo Shirts", "Long Sleeve", "Tank Tops", "Henley Shirts"],
    minOrder: "500 units",
    featured: true,
  },
  {
    id: 2,
    name: "Pants & Trousers",
    description: "Formal and casual pants with perfect fit",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    products: ["Chinos", "Dress Pants", "Cargo Pants", "Jeans", "Joggers"],
    minOrder: "300 units",
    featured: true,
  },
  {
    id: 3,
    name: "Blazers & Jackets",
    description: "Tailored blazers and premium outerwear",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    products: ["Business Blazers", "Casual Jackets", "Bomber Jackets", "Windbreakers", "Hoodies"],
    minOrder: "200 units",
    featured: true,
  },
  {
    id: 4,
    name: "Footwear",
    description: "Quality shoes for every occasion",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    products: ["Formal Shoes", "Sneakers", "Loafers", "Boots", "Sandals"],
    minOrder: "500 pairs",
    featured: true,
  },
  {
    id: 5,
    name: "Accessories",
    description: "Complete your look with premium accessories",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80",
    products: ["Ties", "Bow Ties", "Belts", "Scarves", "Pocket Squares"],
    minOrder: "1000 units",
    featured: false,
  },
  {
    id: 6,
    name: "Shirts & Dress Shirts",
    description: "Formal and casual shirts for all occasions",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    products: ["Dress Shirts", "Casual Shirts", "Oxford Shirts", "Flannel", "Denim Shirts"],
    minOrder: "400 units",
    featured: false,
  },
  {
    id: 7,
    name: "Sportswear",
    description: "High-performance athletic wear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    products: ["Sports Jerseys", "Track Pants", "Shorts", "Leggings", "Sports Bras"],
    minOrder: "600 units",
    featured: false,
  },
  {
    id: 8,
    name: "Workwear & Uniforms",
    description: "Durable uniforms for professionals",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    products: ["Corporate Uniforms", "Medical Scrubs", "Chef Uniforms", "Security Wear", "Industrial Wear"],
    minOrder: "300 units",
    featured: false,
  },
  {
    id: 9,
    name: "Denim Collection",
    description: "Premium denim jeans and jackets",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    products: ["Slim Fit Jeans", "Straight Fit", "Bootcut", "Denim Jackets", "Denim Shirts"],
    minOrder: "400 units",
    featured: false,
  },
  {
    id: 10,
    name: "Kids Wear",
    description: "Comfortable and stylish clothing for children",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80",
    products: ["Kids T-Shirts", "Kids Pants", "School Uniforms", "Baby Rompers", "Kids Jackets"],
    minOrder: "500 units",
    featured: false,
  },
  {
    id: 11,
    name: "Swimwear",
    description: "Beach and pool ready swimwear",
    image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=800&q=80",
    products: ["Swim Trunks", "Bikinis", "One-Piece", "Rash Guards", "Board Shorts"],
    minOrder: "400 units",
    featured: false,
  },
  {
    id: 12,
    name: "Underwear & Innerwear",
    description: "Comfortable everyday essentials",
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=800&q=80",
    products: ["Boxers", "Briefs", "Undershirts", "Socks", "Thermal Wear"],
    minOrder: "1000 units",
    featured: false,
  },
];

export default function ProductsCatalogSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof productCategories[0] | null>(null);

  const featuredProducts = productCategories.filter(p => p.featured);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const openProductDetail = (product: typeof productCategories[0]) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="products" className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* PatternCraft Background */}
        <PatternBackground variant="electric-grid" className="opacity-50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm font-semibold mb-6">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Products
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Premium Apparel{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Catalog
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From t-shirts to blazers, we manufacture and supply high-quality apparel for global brands
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openProductDetail(product)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </span>
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Package className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-bold">View Details</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  {/* Min Order */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      MOQ: <span className="font-semibold text-slate-700">{product.minOrder}</span>
                    </span>
                    <ArrowRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button
              onClick={openModal}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "12+", label: "Product Categories" },
              { value: "50+", label: "Product Types" },
              { value: "500K+", label: "Units/Month Capacity" },
              { value: "100%", label: "Quality Guaranteed" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Catalog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
          <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  Complete Product Catalog
                </h3>
                <p className="text-blue-100">
                  Browse all {productCategories.length} categories we manufacture
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productCategories.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      closeModal();
                      openProductDetail(product);
                    }}
                    className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                      
                      {product.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* View Details Overlay */}
                      <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Package className="w-10 h-10 mx-auto mb-2" />
                          <p className="font-bold text-sm">View Details</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {product.description}
                      </p>

                      {/* Product List */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">
                          Available Products:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.products.slice(0, 3).map((item, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white text-slate-700 rounded-lg text-xs border border-slate-200"
                            >
                              {item}
                            </span>
                          ))}
                          {product.products.length > 3 && (
                            <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">
                              +{product.products.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Min Order */}
                      <div className="pt-4 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            Min Order:
                          </span>
                          <span className="text-sm font-bold text-blue-600">
                            {product.minOrder}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA at bottom */}
              <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                  Don't See What You're Looking For?
                </h4>
                <p className="text-slate-600 mb-6">
                  We offer custom manufacturing solutions. Contact us to discuss your specific requirements.
                </p>
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal - E-commerce Style */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp">
            {/* Close Button */}
            <button
              onClick={closeProductDetail}
              className="absolute top-6 right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Image Section */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                
                {/* Product Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-4xl mx-auto">
                    {selectedProduct.featured && (
                      <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold mb-4 shadow-lg">
                        ⭐ Featured Product
                      </span>
                    )}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xl text-white/90">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Details Content */}
              <div className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  {/* Key Info Cards */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                        Minimum Order
                      </div>
                      <div className="text-3xl font-bold text-blue-900">
                        {selectedProduct.minOrder}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-600 mb-2 uppercase tracking-wide">
                        Product Types
                      </div>
                      <div className="text-3xl font-bold text-purple-900">
                        {selectedProduct.products.length}+
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                      <div className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
                        Lead Time
                      </div>
                      <div className="text-3xl font-bold text-green-900">
                        30-45 Days
                      </div>
                    </div>
                  </div>

                  {/* Available Products */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <Package className="w-7 h-7 text-blue-600" />
                      Available Product Types
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProduct.products.map((item, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features & Specifications */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <Sparkles className="w-7 h-7 text-blue-600" />
                      Features & Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { title: "Premium Materials", desc: "High-quality fabrics sourced from certified suppliers" },
                        { title: "Custom Branding", desc: "Add your logo, labels, and custom packaging" },
                        { title: "Quality Control", desc: "Multi-stage inspection process (AQL 2.5 standard)" },
                        { title: "Flexible MOQ", desc: "Scalable orders from small batches to bulk production" },
                        { title: "Fast Turnaround", desc: "Efficient production with on-time delivery guarantee" },
                        { title: "Global Shipping", desc: "Worldwide delivery with trusted logistics partners" },
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                            <p className="text-sm text-slate-600">{feature.desc}</p>
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
                        Ready to Order {selectedProduct.name}?
                      </h3>
                      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your requirements, get a quote, and start your order
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="#contact"
                          onClick={closeProductDetail}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                          <span>Request Quote</span>
                          <ArrowRight className="w-5 h-5" />
                        </a>
                        <button
                          onClick={closeProductDetail}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all duration-300"
                        >
                          <span>Browse More Products</span>
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

      <style jsx>{`
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
    </>
  );
}
