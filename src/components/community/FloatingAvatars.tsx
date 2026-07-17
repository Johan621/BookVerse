"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Floating } from "@/components/animations/Floating";
import { Parallax } from "@/components/animations/Parallax";

// Simulated avatar clusters
const AVATAR_CLUSTERS = [
  { id: 1, top: "20%", left: "15%", delay: 0, scale: 1, offset: 20, duration: 4.5 },
  { id: 2, top: "60%", left: "10%", delay: 1, scale: 0.8, offset: -15, duration: 5.2 },
  { id: 3, top: "15%", left: "80%", delay: 0.5, scale: 1.1, offset: 30, duration: 4.8 },
  { id: 4, top: "70%", left: "85%", delay: 1.5, scale: 0.9, offset: -20, duration: 5.7 },
  { id: 5, top: "40%", left: "90%", delay: 0.8, scale: 0.7, offset: 10, duration: 4.2 },
  { id: 6, top: "85%", left: "50%", delay: 0.3, scale: 1.2, offset: 25, duration: 5.9 },
];

export const FloatingAvatars = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Map Style Dots Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Glowing nodes simulating campus hubs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

      {AVATAR_CLUSTERS.map((cluster) => (
        <div 
          key={cluster.id} 
          className="absolute"
          style={{ top: cluster.top, left: cluster.left, transform: `scale(${cluster.scale})` }}
        >
          <Parallax offset={cluster.offset}>
            <Floating duration={cluster.duration} delay={cluster.delay} yOffset={15}>
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-pulse" />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full glass border-white/20 shadow-lg overflow-hidden bg-background/50">
                  <div className="w-full h-full bg-gradient-to-br from-primary/40 to-blue-500/40" />
                  <svg className="absolute w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                {/* Simulated connection line randomly showing */}
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: [0, 0.5, 0], width: [0, 100, 0] }}
                  transition={{ duration: 3, delay: cluster.delay + 2, repeat: Infinity, repeatDelay: 5 }}
                  className="absolute top-1/2 left-full h-[1px] bg-gradient-to-r from-primary to-transparent origin-left"
                />
              </div>
            </Floating>
          </Parallax>
        </div>
      ))}
    </div>
  );
};
