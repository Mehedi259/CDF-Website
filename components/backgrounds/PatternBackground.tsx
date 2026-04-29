"use client";

import { motion } from "framer-motion";

interface PatternBackgroundProps {
  variant?: "dots" | "grid" | "circuit" | "topography" | "hexagon" | "waves";
  className?: string;
}

export default function PatternBackground({ 
  variant = "circuit", 
  className = "" 
}: PatternBackgroundProps) {
  
  const patterns = {
    // Circuit Board Pattern (Tech/Manufacturing)
    circuit: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"/>
            <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"/>
            
            {/* Vertical lines */}
            <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"/>
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"/>
            <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1"/>
            
            {/* Circuit nodes */}
            <circle cx="20" cy="20" r="3" fill="rgba(59, 130, 246, 0.3)"/>
            <circle cx="50" cy="20" r="2" fill="rgba(59, 130, 246, 0.2)"/>
            <circle cx="80" cy="20" r="3" fill="rgba(59, 130, 246, 0.3)"/>
            <circle cx="20" cy="50" r="2" fill="rgba(59, 130, 246, 0.2)"/>
            <circle cx="50" cy="50" r="4" fill="rgba(59, 130, 246, 0.4)"/>
            <circle cx="80" cy="50" r="2" fill="rgba(59, 130, 246, 0.2)"/>
            <circle cx="20" cy="80" r="3" fill="rgba(59, 130, 246, 0.3)"/>
            <circle cx="50" cy="80" r="2" fill="rgba(59, 130, 246, 0.2)"/>
            <circle cx="80" cy="80" r="3" fill="rgba(59, 130, 246, 0.3)"/>
            
            {/* Small connecting dots */}
            <circle cx="35" cy="20" r="1" fill="rgba(59, 130, 246, 0.15)"/>
            <circle cx="65" cy="20" r="1" fill="rgba(59, 130, 246, 0.15)"/>
            <circle cx="20" cy="35" r="1" fill="rgba(59, 130, 246, 0.15)"/>
            <circle cx="20" cy="65" r="1" fill="rgba(59, 130, 246, 0.15)"/>
          </pattern>
          
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)"/>
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.05)"/>
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
        <rect width="100%" height="100%" fill="url(#circuitGradient)"/>
      </svg>
    ),

    // Topography Pattern (Premium/Elegant)
    topography: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="topography" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M20 20 Q 40 10, 60 20 T 100 20" stroke="rgba(59, 130, 246, 0.1)" fill="none" strokeWidth="1"/>
            <path d="M20 40 Q 40 30, 60 40 T 100 40" stroke="rgba(59, 130, 246, 0.12)" fill="none" strokeWidth="1"/>
            <path d="M20 60 Q 40 50, 60 60 T 100 60" stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
            <path d="M20 80 Q 40 70, 60 80 T 100 80" stroke="rgba(59, 130, 246, 0.1)" fill="none" strokeWidth="1"/>
            <path d="M20 100 Q 40 90, 60 100 T 100 100" stroke="rgba(59, 130, 246, 0.12)" fill="none" strokeWidth="1"/>
            <path d="M20 120 Q 40 110, 60 120 T 100 120" stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
            <path d="M20 140 Q 40 130, 60 140 T 100 140" stroke="rgba(59, 130, 246, 0.1)" fill="none" strokeWidth="1"/>
            <path d="M20 160 Q 40 150, 60 160 T 100 160" stroke="rgba(59, 130, 246, 0.12)" fill="none" strokeWidth="1"/>
            <path d="M20 180 Q 40 170, 60 180 T 100 180" stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
            
            <path d="M100 20 Q 120 10, 140 20 T 180 20" stroke="rgba(59, 130, 246, 0.1)" fill="none" strokeWidth="1"/>
            <path d="M100 40 Q 120 30, 140 40 T 180 40" stroke="rgba(59, 130, 246, 0.12)" fill="none" strokeWidth="1"/>
            <path d="M100 60 Q 120 50, 140 60 T 180 60" stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
            <path d="M100 80 Q 120 70, 140 80 T 180 80" stroke="rgba(59, 130, 246, 0.1)" fill="none" strokeWidth="1"/>
            <path d="M100 100 Q 120 90, 140 100 T 180 100" stroke="rgba(59, 130, 246, 0.12)" fill="none" strokeWidth="1"/>
            <path d="M100 120 Q 120 110, 140 120 T 180 120" stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
            <path d="M100 140 Q 120 130, 140 140 T 180 140" stroke="rgba(59, 130, 246, 0.1)" fill="none" strokeWidth="1"/>
            <path d="M100 160 Q 120 150, 140 160 T 180 160" stroke="rgba(59, 130, 246, 0.12)" fill="none" strokeWidth="1"/>
            <path d="M100 180 Q 120 170, 140 180 T 180 180" stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topography)"/>
      </svg>
    ),

    // Hexagon Pattern (Modern/Tech)
    hexagon: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagon" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
            <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1"/>
            <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="1"/>
            <circle cx="28" cy="16" r="2" fill="rgba(59, 130, 246, 0.2)"/>
            <circle cx="28" cy="50" r="1.5" fill="rgba(59, 130, 246, 0.15)"/>
            <circle cx="28" cy="84" r="2" fill="rgba(59, 130, 246, 0.2)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagon)"/>
      </svg>
    ),

    // Dots Pattern (Clean/Minimal)
    dots: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="rgba(59, 130, 246, 0.2)"/>
            <circle cx="20" cy="20" r="0.5" fill="rgba(59, 130, 246, 0.4)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
    ),

    // Grid Pattern (Professional)
    grid: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
            <circle cx="0" cy="0" r="1.5" fill="rgba(59, 130, 246, 0.2)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
    ),

    // Waves Pattern (Fluid/Dynamic)
    waves: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="waves" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q 25 30, 50 50 T 100 50 T 150 50 T 200 50" 
                  stroke="rgba(59, 130, 246, 0.1)" fill="none" strokeWidth="1"/>
            <path d="M0 60 Q 25 40, 50 60 T 100 60 T 150 60 T 200 60" 
                  stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
            <path d="M0 70 Q 25 50, 50 70 T 100 70 T 150 70 T 200 70" 
                  stroke="rgba(59, 130, 246, 0.06)" fill="none" strokeWidth="1"/>
            <path d="M0 40 Q 25 20, 50 40 T 100 40 T 150 40 T 200 40" 
                  stroke="rgba(59, 130, 246, 0.08)" fill="none" strokeWidth="1"/>
            <path d="M0 30 Q 25 10, 50 30 T 100 30 T 150 30 T 200 30" 
                  stroke="rgba(59, 130, 246, 0.06)" fill="none" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)"/>
      </svg>
    ),
  };

  return (
    <motion.div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Pattern Layer */}
      <div className="absolute inset-0">
        {patterns[variant]}
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}
