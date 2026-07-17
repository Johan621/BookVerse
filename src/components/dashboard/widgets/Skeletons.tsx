import * as React from "react";
import { cn } from "@/lib/utils";

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-white/5 border border-white/10", className)}
      {...props}
    />
  );
};

export const AnalyticsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
    {[1, 2, 3].map((i) => (
      <Skeleton key={i} className="h-32 rounded-2xl" />
    ))}
  </div>
);

export const WidgetSkeleton = ({ className }: { className?: string }) => (
  <Skeleton className={cn("h-64 rounded-2xl w-full", className)} />
);

export const ListSkeleton = ({ rows = 4 }: { rows?: number }) => (
  <div className="space-y-4">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-lg shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    ))}
  </div>
);
