"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                B2B Clothing Manufacturing Partner
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-slate-800 leading-tight">
              Production support<br/>for startup fashion<br/>brands.
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              We guide early-stage brands through the full manufacturing process — from fabric selection and sampling to quality control and delivery — with transparent communication at every step.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-[#1e293b] hover:bg-slate-900 text-white text-sm font-bold tracking-wider transition-colors shadow-lg"
              >
                GET IN TOUCH
              </Link>
              <Link 
                href="#process" 
                className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-400 text-slate-800 text-sm font-bold tracking-wider transition-colors shadow-sm"
              >
                SEE OUR PROCESS
              </Link>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="relative h-[600px] w-full overflow-hidden shadow-2xl rounded-sm"
          >
            <Image
              src="/hero/services-support.png" 
              alt="Clothing rack with premium knitwear"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-6 left-6 bg-white p-6 shadow-xl border-l-4 border-slate-800"
            >
              <h4 className="font-bold text-slate-900 text-sm mb-1">End-to-End Support</h4>
              <p className="text-xs text-slate-500 font-medium">Sampling - Production - Delivery</p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
