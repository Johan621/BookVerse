import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { slideUp } from "@/components/animations/variants";

import { HTMLMotionProps } from "framer-motion";

export interface EmptyStateProps extends HTMLMotionProps<"div"> {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon: Icon, title, description, action, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className={cn("flex flex-col items-center justify-center p-8 text-center", className)}
        {...props}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 mb-6 glass">
          <Icon className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
        </div>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 mb-6 text-sm text-muted-foreground max-w-sm">
          {description}
        </p>
        {action && <div>{action}</div>}
      </motion.div>
    );
  }
);

EmptyState.displayName = "EmptyState";
