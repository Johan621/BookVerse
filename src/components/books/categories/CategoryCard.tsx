"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  count: number;
  colorClass: string;
}

export const CategoryCard = ({ title, icon: Icon, count, colorClass }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayCount, setDisplayCount] = useState(count);
  const controls = useAnimation();

  // Simple count up effect on hover if we want an animated count
  useEffect(() => {
    if (isHovered) {
      let current = 0;
      const step = Math.max(Math.floor(count / 20), 1);
      const timer = setInterval(() => {
        current += step;
        if (current >= count) {
          setDisplayCount(count);
          clearInterval(timer);
        } else {
          setDisplayCount(current);
        }
      }, 30);
      return () => clearInterval(timer);
    } else {
      setDisplayCount(count);
    }
  }, [isHovered, count]);

  return (
    <motion.div
      onHoverStart={() => {
        setIsHovered(true);
        controls.start({ rotate: [0, -10, 10, -10, 0], scale: 1.2 });
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        controls.start({ rotate: 0, scale: 1 });
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group cursor-pointer w-full"
    >
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${colorClass}`}
        style={{ zIndex: -1 }}
      />
      
      <Card 
        variant="glass" 
        className={`relative overflow-hidden flex flex-col items-center justify-center p-6 gap-4 border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/10`}
      >
        {/* Animated Icon */}
        <motion.div 
          animate={controls}
          className={`flex items-center justify-center h-14 w-14 rounded-full bg-background border border-white/10 shadow-inner ${colorClass.replace('bg-', 'text-')}`}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        
        <div className="flex flex-col items-center text-center">
          <h3 className="font-bold text-foreground tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1 tabular-nums transition-colors duration-300 group-hover:text-foreground">
            {new Intl.NumberFormat("en-IN").format(displayCount)}+ Books
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
