"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { fadeIn } from "./variants";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const FadeIn = React.forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, style, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={fadeIn}
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

FadeIn.displayName = "FadeIn";
