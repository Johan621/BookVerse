"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  delay?: number;
}

export const StatCard = ({ title, value, icon: Icon, trend, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex justify-between items-start">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
          
          {trend && (
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                trend.value >= 0 
                  ? "bg-green-500/20 text-green-400" 
                  : "bg-red-500/20 text-red-400"
              }`}>
                {trend.value >= 0 ? "+" : ""}{trend.value}%
              </span>
              <span className="text-xs text-muted-foreground">{trend.label}</span>
            </div>
          )}
        </div>
        
        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </motion.div>
  );
};
