"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { scaleUp } from "./variants";

export const ScaleIn = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={scaleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScaleIn.displayName = "ScaleIn";
