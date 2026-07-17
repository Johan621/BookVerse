import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4 shadow-inner">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6 leading-relaxed">
        {description}
      </p>
      {actionLabel && (
        <Button variant="outline" onClick={onAction} className="h-9 px-4 text-xs font-semibold">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
