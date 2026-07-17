"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";

interface ParallaxProps extends HTMLMotionProps<"div"> {
  offset?: number;
}

export const Parallax = React.forwardRef<HTMLDivElement, ParallaxProps>(
  ({ children, offset = 50, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: internalRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
      <div ref={internalRef} style={{ display: "contents" }}>
        <motion.div
          ref={ref}
          style={{ y }}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

Parallax.displayName = "Parallax";
