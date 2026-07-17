"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface PriceTrendGraphProps {
  data: number[]; // e.g., prices over the last 6 months
  months: string[];
}

export const PriceTrendGraph = ({ data, months }: PriceTrendGraphProps) => {
  const maxPrice = Math.max(...data) * 1.1;
  const minPrice = Math.min(...data) * 0.9;
  
  // Create points for SVG
  const width = 400;
  const height = 150;
  const padding = 20;
  
  const points = data.map((price, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((price - minPrice) / (maxPrice - minPrice)) * (height - padding * 2);
    return `${x},${y}`;
  });

  const pathD = `M ${points.join(" L ")}`;
  
  // Create gradient path for filling below the line
  const fillPathD = `${pathD} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`;

  return (
    <div className="w-full h-full relative font-mono text-[10px]">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="trendGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(120, 119, 198, 0.4)" />
            <stop offset="100%" stopColor="rgba(120, 119, 198, 0)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="currentColor" className="text-white/5" strokeDasharray="4 4" />
        <line x1={padding} y1={height/2} x2={width - padding} y2={height/2} stroke="currentColor" className="text-white/5" strokeDasharray="4 4" />
        
        {/* Fill Area */}
        <motion.path
          d={fillPathD}
          fill="url(#trendGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Points */}
        {points.map((point, i) => {
          const [x, y] = point.split(",");
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              className="fill-background stroke-primary"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1, type: "spring" }}
            />
          );
        })}

        {/* X-Axis Labels */}
        {months.map((month, i) => {
          const x = padding + (i / (months.length - 1)) * (width - padding * 2);
          return (
            <text
              key={month}
              x={x}
              y={height - 2}
              textAnchor="middle"
              className="fill-muted-foreground"
            >
              {month}
            </text>
          );
        })}
      </svg>
    </div>
  );
};
