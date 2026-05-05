"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse value string (e.g., "500K+", "98.5%", "150+")
  const stringValue = String(value);
  const numericMatch = stringValue.match(/[\d.]+/);
  const numericPart = numericMatch ? parseFloat(numericMatch[0]) : 0;
  
  // Extract prefix and suffix around the number
  const parts = stringValue.split(/[\d.]+/);
  const prefix = parts[0] || "";
  const suffix = parts[1] || "";
  
  // Detect if the number has decimals
  const hasDecimals = stringValue.includes(".");
  const decimals = hasDecimals ? (stringValue.split(".")[1]?.length || 0) : 0;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericPart, {
        duration: duration,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(v);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericPart, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {hasDecimals ? displayValue.toFixed(decimals) : Math.floor(displayValue)}
      {suffix}
    </span>
  );
}
