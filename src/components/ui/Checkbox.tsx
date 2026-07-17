"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="group relative flex items-center justify-center cursor-pointer">
        <input
          type="checkbox"
          className="peer sr-only"
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/20 bg-white/5 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-colors",
            className
          )}
        >
          <Check className="h-3.5 w-3.5 opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
