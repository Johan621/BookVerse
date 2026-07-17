"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { slideUp } from "./variants";

export const StaggerItem = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={slideUp} // Assumes parent is managing the stagger
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = "StaggerItem";
