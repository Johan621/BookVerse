import * as React from "react";
import { BookOpen, Repeat, IndianRupee } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const MOCK_STATS = [
  {
    label: "Books Uploaded",
    value: "12",
    change: "+2 this month",
    icon: BookOpen,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    label: "Successful Exchanges",
    value: "8",
    change: "+1 this week",
    icon: Repeat,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    label: "Total Savings",
    value: "₹4,500",
    change: "Estimated",
    icon: IndianRupee,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

export const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      {MOCK_STATS.map((stat, index) => (
        <FadeIn key={stat.label} delay={index * 0.1}>
          <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 shadow-sm relative overflow-hidden group">
            {/* Hover Glow */}
            <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${stat.bg}`} style={{ zIndex: -1 }} />
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</span>
              <span className="text-xs font-medium text-muted-foreground">{stat.change}</span>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};
