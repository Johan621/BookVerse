"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { slideUp } from "./variants";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const SlideUp = React.forwardRef<HTMLDivElement, SlideUpProps>(
  ({ children, delay = 0, style, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={slideUp}
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

SlideUp.displayName = "SlideUp";
