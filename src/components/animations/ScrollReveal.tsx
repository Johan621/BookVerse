"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, direction = "up", ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
      target: internalRef,
      offset: ["0 1", "1.2 1"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
    const yTransform = useTransform(scrollYProgress, [0, 1], [direction === "up" ? 50 : direction === "down" ? -50 : 0, 0]);
    const xTransform = useTransform(scrollYProgress, [0, 1], [direction === "left" ? 50 : direction === "right" ? -50 : 0, 0]);

    return (
      <div ref={internalRef} style={{ display: "contents" }}>
        <motion.div
          ref={ref}
          style={{ 
            opacity, 
            y: yTransform,
            x: xTransform 
          }}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";
