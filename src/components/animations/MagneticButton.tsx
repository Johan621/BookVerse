"use client";

import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const MagneticButton = React.forwardRef<HTMLDivElement, MagneticButtonProps>(
  ({ children, className, ...props }, ref) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.div
        ref={(node) => {
          // Sync both refs if needed, simple approach here
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          buttonRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("relative z-10 inline-block", className)}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
