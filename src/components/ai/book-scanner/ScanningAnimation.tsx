"use client";

import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ScanningAnimationProps {
  imagePreview: string | null;
  progress: number;
}

export const ScanningAnimation = ({ imagePreview, progress }: ScanningAnimationProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative rounded-3xl overflow-hidden glass border border-white/10 aspect-[3/4] flex items-center justify-center shadow-2xl">
        
        {/* Mock Image Placeholder or Real Image */}
        {imagePreview ? (
          <Image 
            src={imagePreview} 
            alt="Book Cover Preview" 
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover opacity-80"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10" />
        )}

        {/* Animated Scanning Laser */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_3px_rgba(120,119,198,0.8)] z-20"
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* Scanning Overlay Gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent z-10 pointer-events-none"
          animate={{
            backgroundPosition: ["0% -100%", "0% 200%"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ backgroundSize: "100% 200%" }}
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        
        {/* Center Loading Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass border border-primary/30 rounded-2xl p-4 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md z-30">
          <Loader2 className="w-8 h-8 text-primary animate-spin mb-2" />
          <p className="text-sm font-bold text-foreground">Analyzing Cover</p>
          <p className="text-xs text-primary font-mono mt-1">{progress}% Complete</p>
        </div>

      </div>
    </div>
  );
};
