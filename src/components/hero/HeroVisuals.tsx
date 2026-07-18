"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { BookOpen, RefreshCw, Zap } from "lucide-react";
import { Parallax } from "@/components/animations/Parallax";
import { Floating } from "@/components/animations/Floating";

export const HeroVisuals = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center lg:justify-end">
      {/* Decorative center orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[300px] w-full max-w-[300px] rounded-full bg-primary/20 blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative w-full max-w-md aspect-square">
        {/* Main Floating Book Card */}
        <Parallax offset={20}>
          <Floating yOffset={10} duration={6} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[280px]">
            <Card variant="glass-heavy" padding="lg" className="flex flex-col items-center gap-4 bg-background/40 backdrop-blur-xl border-white/10 shadow-2xl">
              <div className="w-24 h-32 rounded-md bg-gradient-to-br from-primary to-blue-600 shadow-inner flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-white opacity-80" />
              </div>
              <div className="space-y-2 text-center w-full">
                <div className="h-4 w-3/4 mx-auto rounded-full bg-muted animate-pulse" />
                <div className="h-3 w-1/2 mx-auto rounded-full bg-muted/70 animate-pulse" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                <RefreshCw className="h-3 w-3" /> Ready to Exchange
              </div>
            </Card>
          </Floating>
        </Parallax>

        {/* Top Right Floating Element */}
        <Parallax offset={40}>
          <Floating yOffset={15} duration={5} delay={1} className="absolute -top-4 -right-4 z-30">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 rounded-2xl glass p-4 shadow-xl border-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Instant Match</p>
                <p className="text-xs text-muted-foreground">Algorithm</p>
              </div>
            </motion.div>
          </Floating>
        </Parallax>

        {/* Bottom Left Floating Element */}
        <Parallax offset={-30}>
          <Floating yOffset={12} duration={7} delay={2} className="absolute -bottom-8 -left-8 z-30">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 rounded-2xl glass p-4 shadow-xl border-white/10"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white z-${40-i*10}`}>
                    S{i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">5,000+ Students</p>
                <p className="text-xs text-muted-foreground">Active daily</p>
              </div>
            </motion.div>
          </Floating>
        </Parallax>
        
        {/* Animated Connection Lines SVG */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none z-10 opacity-50" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 50 350 C 150 300, 250 100, 350 50"
            stroke="url(#gradient-line)"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient-line" x1="50" y1="350" x2="350" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" className="text-primary" />
              <stop offset="1" stopColor="currentColor" className="text-blue-500" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>
  );
};
