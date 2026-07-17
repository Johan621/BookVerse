"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowOrbs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        {...props}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[60%] left-[80%] h-[40vw] w-[40vw] rounded-full bg-blue-500/10 blur-[100px]"
        />
      </div>
    );
  }
);
GlowOrbs.displayName = "GlowOrbs";
