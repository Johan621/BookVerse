import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    
    const sizes = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    };

    return (
      <Loader2
        ref={ref}
        className={cn("animate-spin text-muted-foreground", sizes[size], className)}
        {...props}
      />
    );
  }
);

Spinner.displayName = "Spinner";
