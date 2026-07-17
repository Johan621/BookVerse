"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/hero/AnimatedCounter";

export interface StatCardProps {
  title: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
  colorClass?: string;
  trend?: {
    value: number;
    label: string;
  };
  delay?: number;
  variant?: "glass" | "default";
}

export const StatCard = ({
  title,
  value,
  suffix = "",
  prefix = "",
  icon: Icon,
  colorClass = "text-primary",
  trend,
  delay = 0,
  variant = "glass",
}: StatCardProps) => {
  const bgClass = colorClass.replace("text-", "bg-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay }}
      className="relative group w-full h-full"
    >
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 ${bgClass}`}
        style={{ zIndex: -1 }}
      />

      <Card
        variant={variant}
        className="relative overflow-hidden flex flex-col p-6 h-full transition-colors duration-300 hover:bg-white/5"
      >
        <div className="relative z-10 flex justify-between items-start w-full mb-4">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {title}
            </h3>
            
            <div className={`text-3xl font-extrabold tracking-tight flex items-center ${colorClass}`}>
              {prefix}
              {typeof value === "number" ? (
                <AnimatedCounter end={value} duration={2} />
              ) : (
                value
              )}
              {suffix}
            </div>

            {trend && (
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    trend.value >= 0
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {trend.value >= 0 ? "+" : ""}
                  {trend.value}%
                </span>
                <span className="text-xs text-muted-foreground">{trend.label}</span>
              </div>
            )}
          </div>

          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg group-hover:scale-110 transition-transform ${bgClass.replace("bg-", "bg-opacity-20 bg-")} ${colorClass.replace("text-", "border-opacity-30 border-")}`}
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <Icon className={`w-6 h-6 ${colorClass}`} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
