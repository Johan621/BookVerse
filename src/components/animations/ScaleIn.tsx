"use client";

import * as React from "react";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { scaleUp, fadeIn } from "./variants";

interface ScaleInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const ScaleIn = React.forwardRef<HTMLDivElement, ScaleInProps>(
  ({ children, delay = 0, style, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    return (
      <motion.div
        ref={ref}
        variants={shouldReduceMotion ? fadeIn : scaleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        exit="exit"
        style={{ ...style, transitionDelay: `${delay}s` }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScaleIn.displayName = "ScaleIn";
