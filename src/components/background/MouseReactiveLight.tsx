"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MouseReactiveLight = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

    return (
      <div
        ref={ref}
        className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}
        {...props}
      >
        <motion.div
          animate={{
            x: mousePosition.x - 400, // offset by half the size
            y: mousePosition.y - 400,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.5,
          }}
          className="absolute h-[800px] w-[800px] rounded-full bg-primary/5 blur-[150px] dark:bg-primary/10"
        />
      </div>
    );
  }
);
MouseReactiveLight.displayName = "MouseReactiveLight";
