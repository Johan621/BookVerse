"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex-1 w-full"
    >
      {children}
    </motion.div>
  );
};
