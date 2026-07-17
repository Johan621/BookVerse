"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, TrendingUp, Search } from "lucide-react";
import { Floating } from "@/components/animations/Floating";
import { Parallax } from "@/components/animations/Parallax";
import { GlowOrbs } from "@/components/background/GlowOrbs";

export const AIVisualization = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <GlowOrbs />
      </div>

      <div className="relative w-full max-w-sm aspect-square">
        {/* Animated Connecting Lines (Neural Network style) */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none z-10" viewBox="0 0 400 400">
          <motion.path
            d="M 200 200 L 100 100 M 200 200 L 300 100 M 200 200 L 100 300 M 200 200 L 300 300"
            stroke="url(#ai-gradient)"
            strokeWidth="2"
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="ai-gradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" className="text-primary" />
              <stop offset="1" stopColor="currentColor" className="text-purple-500" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Hub */}
        <Floating duration={5} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full glass border-white/20 shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] backdrop-blur-xl">
            <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" style={{ animationDuration: '3s' }} />
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
        </Floating>

        {/* Node 1 */}
        <Parallax offset={20}>
          <Floating duration={4} delay={0.5} yOffset={10} className="absolute top-8 left-8 z-20">
            <div className="flex h-14 w-14 items-center justify-center rounded-full glass border-white/10 shadow-lg text-blue-400">
              <BookOpen className="h-6 w-6" />
            </div>
          </Floating>
        </Parallax>

        {/* Node 2 */}
        <Parallax offset={-15}>
          <Floating duration={6} delay={1} yOffset={15} className="absolute top-8 right-8 z-20">
            <div className="flex h-14 w-14 items-center justify-center rounded-full glass border-white/10 shadow-lg text-purple-400">
              <TrendingUp className="h-6 w-6" />
            </div>
          </Floating>
        </Parallax>

        {/* Node 3 */}
        <Parallax offset={30}>
          <Floating duration={5.5} delay={1.5} yOffset={12} className="absolute bottom-8 left-8 z-20">
            <div className="flex h-14 w-14 items-center justify-center rounded-full glass border-white/10 shadow-lg text-emerald-400">
              <Search className="h-6 w-6" />
            </div>
          </Floating>
        </Parallax>

        {/* Node 4 */}
        <Parallax offset={-25}>
          <Floating duration={4.5} delay={2} yOffset={8} className="absolute bottom-8 right-8 z-20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full glass border-white/10 shadow-lg text-amber-400">
              <span className="font-bold">AI</span>
            </div>
          </Floating>
        </Parallax>

        {/* Scanning beam effect */}
        <motion.div
          animate={{ y: ["0%", "400%", "0%"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-40 opacity-50 blur-[1px]"
        />
      </div>
    </div>
  );
};
