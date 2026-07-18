import { HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface EmptyStateProps extends HTMLMotionProps<"div"> {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  delay?: number;
}

export interface Breadcrumb {
  label: string;
  href?: string;
}
