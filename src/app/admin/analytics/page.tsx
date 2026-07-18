"use client";

import dynamic from "next/dynamic";
const ActivityChart = dynamic(
  () => import("@/components/admin/charts/ActivityChart").then(mod => mod.ActivityChart),
  { ssr: false, loading: () => <div className="h-64 w-full animate-pulse bg-white/5 rounded-xl" /> }
);
import { Users, BookOpen, Repeat } from "lucide-react";

// Mock Data for Analytics
const userGrowthData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 2100 },
  { name: "Mar", value: 3400 },
  { name: "Apr", value: 4800 },
  { name: "May", value: 6500 },
  { name: "Jun", value: 8900 },
  { name: "Jul", value: 12482 },
];

const exchangeVolumeData = [
  { name: "Jan", value: 300 },
  { name: "Feb", value: 450 },
  { name: "Mar", value: 800 },
  { name: "Apr", value: 1200 },
  { name: "May", value: 1900 },
  { name: "Jun", value: 2400 },
  { name: "Jul", value: 3100 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Platform Analytics</h1>
        <p className="text-muted-foreground mt-2">Deep dive into user growth, exchange volume, and platform metrics.</p>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-900/20 border border-purple-500/30 backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/40 transition-colors" />
          <Users className="w-8 h-8 text-purple-400 mb-4" />
          <p className="text-sm font-medium text-purple-200/70">Total User Base</p>
          <p className="text-4xl font-bold text-white mt-1">12,482</p>
          <p className="text-sm text-green-400 mt-2 font-medium">+42% from last quarter</p>
        </div>
        
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border border-blue-500/30 backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-colors" />
          <Repeat className="w-8 h-8 text-blue-400 mb-4" />
          <p className="text-sm font-medium text-blue-200/70">Total Exchanges</p>
          <p className="text-4xl font-bold text-white mt-1">34,910</p>
          <p className="text-sm text-green-400 mt-2 font-medium">+18% from last quarter</p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/40 to-rose-900/20 border border-pink-500/30 backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/40 transition-colors" />
          <BookOpen className="w-8 h-8 text-pink-400 mb-4" />
          <p className="text-sm font-medium text-pink-200/70">Books in Circulation</p>
          <p className="text-4xl font-bold text-white mt-1">8,943</p>
          <p className="text-sm text-green-400 mt-2 font-medium">+8% from last quarter</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-lg font-semibold mb-6">User Growth (YTD)</h2>
          <ActivityChart data={userGrowthData} />
        </div>
        
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-lg font-semibold mb-6">Exchange Volume (YTD)</h2>
          <ActivityChart data={exchangeVolumeData} />
        </div>
      </div>
      
    </div>
  );
}
