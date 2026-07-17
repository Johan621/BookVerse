"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientMeshProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GradientMesh = React.forwardRef<HTMLDivElement, GradientMeshProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light",
          className
        )}
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, hsla(280,100%,74%,1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)
          `,
          filter: "blur(60px)",
        }}
        {...props}
      />
    );
  }
);
GradientMesh.displayName = "GradientMesh";
