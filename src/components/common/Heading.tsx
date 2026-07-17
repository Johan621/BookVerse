import * as React from "react";
import { cn } from "@/lib/utils";

export const PageHeading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn("text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
        {...props}
      />
    );
  }
);
PageHeading.displayName = "PageHeading";

export const SectionHeading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn("text-3xl font-bold tracking-tight transition-colors", className)}
        {...props}
      />
    );
  }
);
SectionHeading.displayName = "SectionHeading";
