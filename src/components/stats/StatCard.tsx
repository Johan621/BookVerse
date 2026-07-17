"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/hero/AnimatedCounter";

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
  colorClass: string;
}

export const StatCard = ({ title, value, suffix = "", prefix = "", icon: Icon, colorClass }: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative group w-full h-full"
    >
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${colorClass.replace('text-', 'bg-')}`}
        style={{ zIndex: -1 }}
      />
      
      <Card 
        variant="glass" 
        className="relative overflow-hidden flex flex-col items-center justify-center p-6 h-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 hover:bg-white/10 text-center"
      >
        <div className={`p-3 rounded-2xl bg-background border border-white/10 shadow-inner mb-4 group-hover:scale-110 transition-transform ${colorClass}`}>
          <Icon className="h-6 w-6" />
        </div>
        
        <div className={`text-4xl font-extrabold tracking-tight mb-2 flex items-center justify-center ${colorClass}`}>
          {prefix}
          <AnimatedCounter end={value} duration={2.5} />
          {suffix}
        </div>
        
        <h3 className="font-medium text-muted-foreground text-sm uppercase tracking-wider">{title}</h3>
      </Card>
    </motion.div>
  );
};
