"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/hero/AnimatedCounter";

interface TrustCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  value?: number;
  stringValue?: string;
  suffix?: string;
  colorClass: string;
}

export const TrustCard = ({ title, description, icon: Icon, value, stringValue, suffix, colorClass }: TrustCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group w-full h-full"
    >
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${colorClass}`}
        style={{ zIndex: -1 }}
      />
      
      <Card 
        variant="glass" 
        className="relative overflow-hidden flex flex-col p-6 h-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/10"
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`flex items-center justify-center h-12 w-12 rounded-xl bg-background border border-white/10 shadow-inner group-hover:scale-110 transition-transform ${colorClass.replace('bg-', 'text-')}`}>
            <Icon className="h-6 w-6" />
          </div>
          
          <div className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {value !== undefined ? (
              <span className="flex items-center">
                <AnimatedCounter end={value} duration={2} />
                {suffix && <span>{suffix}</span>}
              </span>
            ) : (
              <span>{stringValue}</span>
            )}
          </div>
        </div>
        
        <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
          {description}
        </p>
      </Card>
    </motion.div>
  );
};
