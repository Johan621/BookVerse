"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { staggerContainer } from "./variants";

export const StaggerContainer = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        exit="hidden"
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = "StaggerContainer";
