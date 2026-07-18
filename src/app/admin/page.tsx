"use client";

import { 
  Users, 
  BookOpen, 
  ShieldAlert, 
  TrendingUp,
  Activity
} from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import dynamic from "next/dynamic";
const ActivityChart = dynamic(
  () => import("@/components/admin/charts/ActivityChart").then(mod => mod.ActivityChart),
  { ssr: false, loading: () => <div className="h-64 w-full animate-pulse bg-white/5 rounded-xl" /> }
);
import { toast } from "sonner";

// Mock Data
const stats = [
  { title: "Total Users", value: "12,482", icon: Users, trend: { value: 12.5, label: "vs last month" } },
  { title: "Active Books", value: "8,943", icon: BookOpen, trend: { value: 8.2, label: "vs last month" } },
  { title: "Pending Approvals", value: "48", icon: ShieldAlert, trend: { value: -5.4, label: "vs last month" } },
  { title: "Exchange Rate", value: "64%", icon: TrendingUp, trend: { value: 2.1, label: "vs last month" } },
];

const activityData = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 240 },
  { name: "Wed", value: 180 },
  { name: "Thu", value: 320 },
  { name: "Fri", value: 280 },
  { name: "Sat", value: 450 },
  { name: "Sun", value: 390 },
];

const recentActivity = [
  { user: "Alice Walker", action: "listed a new book", target: "The Color Purple", time: "2 mins ago" },
  { user: "System", action: "flagged account", target: "@spammer99", time: "15 mins ago" },
  { user: "John Doe", action: "completed exchange with", target: "Jane Smith", time: "1 hour ago" },
  { user: "Admin", action: "approved", target: "12 pending books", time: "3 hours ago" },
];

export default function AdminOverview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back. Here&apos;s what&apos;s happening on BookVerse today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.title} {...stat} delay={i * 0.1} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Section */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-400" />
              Platform Activity
            </h2>
            <select className="bg-black/20 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-muted-foreground focus:outline-none">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
          </div>
          <ActivityChart data={activityData} />
        </div>

        {/* Recent Activity Feed */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col">
          <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
          <div className="flex-1 space-y-6">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== recentActivity.length - 1 && (
                  <div className="absolute left-2 top-8 bottom-[-16px] w-px bg-white/10" />
                )}
                <div className="w-4 h-4 mt-1 rounded-full bg-purple-500/20 border-2 border-purple-500 shrink-0 z-10" />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>{" "}
                    <span className="font-medium text-purple-300">{activity.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => toast.info("Coming soon!")} className="w-full mt-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-white/10">
            View All Activity
          </button>
        </div>

      </div>
    </div>
  );
}
