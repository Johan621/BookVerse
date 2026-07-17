"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGaugeProps {
  value: number; // 0 to 100
  label: string;
  size?: number;
  className?: string;
}

export const AnimatedGauge = ({ value, label, size = 160, className }: AnimatedGaugeProps) => {
  const strokeWidth = size * 0.08;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  // Arc only goes 75% of the circle to look like a gauge
  const arcLength = circumference * 0.75;
  const strokeDashoffset = arcLength - (value / 100) * arcLength;

  // Map value to color (Red -> Yellow -> Green)
  const getColor = (val: number) => {
    if (val < 40) return "#ef4444"; // red-500
    if (val < 70) return "#eab308"; // yellow-500
    return "#10b981"; // emerald-500
  };

  const color = getColor(value);

  return (
    <div className={cn("relative flex flex-col items-center", className)} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-[135deg]"
      >
        {/* Background Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-white/10"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
        />
        {/* Progress Arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
          initial={{ strokeDashoffset: arcLength }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
        <motion.span 
          className="text-3xl font-bold tracking-tighter"
          style={{ color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {value}%
        </motion.span>
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">
          {label}
        </span>
      </div>
    </div>
  );
};
