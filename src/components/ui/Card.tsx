import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "glass" | "glass-heavy";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    
    const baseStyles = "rounded-2xl overflow-hidden transition-all duration-200";
    
    const variants = {
      default: "bg-secondary text-secondary-foreground shadow-sm border border-border",
      glass: "glass",
      "glass-heavy": "glass-heavy",
    };
    
    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variants[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
