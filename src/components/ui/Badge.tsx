import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "outline" | "glass";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
    
    const variants = {
      default: "bg-primary text-primary-foreground",
      success: "bg-emerald-500/15 text-emerald-500 border border-emerald-500/20",
      warning: "bg-amber-500/15 text-amber-500 border border-amber-500/20",
      destructive: "bg-destructive text-destructive-foreground",
      outline: "text-foreground border border-border",
      glass: "glass text-foreground",
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
