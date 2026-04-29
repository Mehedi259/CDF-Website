"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function FounderVideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Auto-play when modal opens
    if (isModalOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isModalOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4"
              >
                Meet Our Founders
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Story, Your Success
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover how CDF Studio is revolutionizing apparel manufacturing with innovation, quality, and partnership.
              </p>
            </motion.div>

            {/* Video Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
              onClick={openModal}
            >
              {/* Main Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                {/* High-Quality Thumbnail Image */}
                <Image
                  src="/founders/founder-video-thumb.webp"
                  alt="CDF Studio Founders"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative mb-6"
                  >
                    {/* Pulsing Ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-white rounded-full"
                    />
                    
                    {/* Play Button */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-blue-600 transition-colors duration-300">
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ml-1" fill="currentColor" />
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Watch Our Story
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      3 minutes • Behind the scenes at CDF Studio
                    </p>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            </motion.div>

            {/* Stats Below Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { label: "Years Experience", value: "15+" },
                { label: "Global Clients", value: "500+" },
                { label: "Production Capacity", value: "500K+", suffix: "/month" },
                { label: "Team Members", value: "850+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                    {stat.suffix && <span className="text-lg text-slate-500">{stat.suffix}</span>}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Container */}
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  controls
                  controlsList="nodownload"
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                >
                  <source
                    src="/founders/our_story.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Controls Overlay (Optional) */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                    onClick={togglePlay}
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-10 h-10 text-slate-900 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  CDF Studio: Crafting Excellence Since 2008
                </h3>
                <p className="text-white/80">
                  Learn how we're transforming the apparel manufacturing industry
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
