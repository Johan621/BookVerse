import * as React from "react";
import { cn } from "@/lib/utils";

export const BackgroundWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden", className)}>
      <div className="fixed inset-0 z-[-1] aurora-bg opacity-40 dark:opacity-20 pointer-events-none" />
      {children}
    </div>
  );
};
