"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/variants";
import { cn } from "@/lib/utils";

export const PageContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.main
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn("flex-1 w-full", className)}
    >
      {children}
    </motion.main>
  );
};
