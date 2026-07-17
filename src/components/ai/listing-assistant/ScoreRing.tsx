"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScoreRingProps {
  score: number;
  label: string;
  size?: number;
  className?: string;
}

export const ScoreRing = ({ score, label, size = 120, className }: ScoreRingProps) => {
  const strokeWidth = size * 0.1;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = (val: number) => {
    if (val < 50) return "#ef4444"; // red-500
    if (val < 80) return "#eab308"; // yellow-500
    return "#10b981"; // emerald-500
  };

  const color = getColor(score);

  return (
    <div className={cn("relative flex flex-col items-center", className)} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-white/10"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          className="text-2xl font-bold tracking-tighter"
          style={{ color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {score}
        </motion.span>
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">
          {label}
        </span>
      </div>
    </div>
  );
};
