"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FloatingProps extends HTMLMotionProps<"div"> {
  yOffset?: number;
  duration?: number;
  delay?: number;
}

export const Floating = React.forwardRef<HTMLDivElement, FloatingProps>(
  ({ children, yOffset = 15, duration = 4, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        animate={{
          y: [0, -yOffset, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Floating.displayName = "Floating";
