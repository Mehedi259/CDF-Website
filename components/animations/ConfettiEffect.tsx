"use client";

import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
  drift: number;
}

interface ConfettiEffectProps {
  duration?: number; // Duration in milliseconds (default: 4000ms = 4s)
  particleCount?: number; // Number of confetti particles (default: 80)
  colors?: string[]; // Custom colors
  autoStart?: boolean; // Auto start on mount (default: true)
}

export default function ConfettiEffect({
  duration = 4000,
  particleCount = 80,
  colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", 
    "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2",
    "#FF69B4", "#FFD700", "#00CED1", "#FF4500"
  ],
  autoStart = true,
}: ConfettiEffectProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!autoStart) return;

    // Check if already seen (optional)
    // const hasSeenConfetti = sessionStorage.getItem("hasSeenConfetti");
    // if (hasSeenConfetti) return;

    // Generate confetti particles
    const particles: Confetti[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100, // Random horizontal position (0-100%)
        animationDuration: 2500 + Math.random() * 2000, // 2.5s to 4.5s fall time
        animationDelay: Math.random() * 1500, // Stagger start times (0-1.5s)
        size: 8 + Math.random() * 8, // Size variation (8px to 16px)
        rotation: Math.random() * 360, // Initial rotation
        rotationSpeed: 180 + Math.random() * 540, // Rotation during fall (180-720 degrees)
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.6 + Math.random() * 0.4, // Opacity variation (0.6 to 1.0)
        drift: -30 + Math.random() * 60, // Horizontal drift (-30px to +30px)
      });
    }

    setConfetti(particles);
    setIsActive(true);

    // Stop animation after duration
    const timer = setTimeout(() => {
      setIsActive(false);
      // Clean up after animation completes
      setTimeout(() => {
        setConfetti([]);
        // sessionStorage.setItem("hasSeenConfetti", "true");
      }, 5000); // Wait for all particles to fall off screen
    }, duration);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart, duration, particleCount]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="confetti-particle absolute"
          style={{
            left: `${particle.left}%`,
            top: "-20px", // Start above screen
            width: `${particle.size}px`,
            height: `${particle.size * 0.6}px`, // Rectangle shape
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `confettiFall ${particle.animationDuration}ms ease-in forwards`,
            animationDelay: `${particle.animationDelay}ms`,
            borderRadius: "2px",
            // CSS variables for animation
            "--drift": `${particle.drift}px`,
            "--rotation": `${particle.rotationSpeed}deg`,
          } as React.CSSProperties}
        />
      ))}

      <style jsx>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift)) rotate(var(--rotation));
            opacity: 0;
          }
        }

        .confetti-particle {
          will-change: transform, opacity;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
