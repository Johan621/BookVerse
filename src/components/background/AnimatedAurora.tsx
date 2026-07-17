"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedAuroraProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  speed?: number;
}

export const AnimatedAurora = React.forwardRef<HTMLDivElement, AnimatedAuroraProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ className, colors, speed, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        {...props}
      >
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-[-50%] opacity-30 dark:opacity-20 blur-[100px]"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.4), transparent 60%), radial-gradient(circle at 100% 0%, rgba(255, 90, 90, 0.3), transparent 50%), radial-gradient(circle at 0% 100%, rgba(90, 255, 150, 0.2), transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>
    );
  }
);
AnimatedAurora.displayName = "AnimatedAurora";
