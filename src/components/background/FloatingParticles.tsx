"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FloatingParticles = ({ particleCount = 30 }: { particleCount?: number }) => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; offsetX: number; duration: number }[]>([]);

  // Generate particles on mount or when particleCount changes
  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      offsetX: Math.random() * 50 - 25,
      duration: Math.random() * 10 + 10,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, [particleCount]);

  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => {
        const particleMotion = { offsetX: particle.offsetX, duration: particle.duration };
      return (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 dark:bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particleMotion.offsetX, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particleMotion.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      );
      })}
    </div>
  );
};
