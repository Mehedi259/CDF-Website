"use client";

import { useState } from "react";
import { X, ArrowRight, Package, Sparkles } from "lucide-react";
import Image from "next/image";

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
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const featuredProducts = productCategories.filter(p => p.featured);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    document.body.style.overflow = "unset";
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
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200"
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
                    className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
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
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
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
    </>
  );
}
