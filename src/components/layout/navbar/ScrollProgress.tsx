"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary to-blue-500"
      style={{ scaleX }}
    />
  );
};
