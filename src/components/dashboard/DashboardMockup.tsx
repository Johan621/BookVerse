"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  BookUp, BookDown, Repeat, Heart, 
  Bell, Check, X, Sparkles, IndianRupee,
  Activity, ArrowUpRight, Clock
} from "lucide-react";

export const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 perspective-[2000px]">
      
      {/* 3D Tilted Dashboard Container */}
      <motion.div
        initial={{ rotateX: 20, rotateY: -10, scale: 0.9, opacity: 0 }}
        whileInView={{ rotateX: 5, rotateY: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full rounded-2xl glass-heavy border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-background/60 p-6 flex flex-col gap-6"
      >
        
        {/* Header bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-500 shadow-inner flex items-center justify-center font-bold text-white">
              JD
            </div>
            <div>
              <p className="font-bold text-foreground leading-tight">Welcome back, John</p>
              <p className="text-xs text-muted-foreground">Computer Science, 4th Sem</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Content Area (Col 1-3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Top Analytics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Uploaded", value: "12", icon: BookUp, color: "text-blue-400" },
                { title: "Purchased", value: "8", icon: BookDown, color: "text-emerald-400" },
                { title: "Exchanged", value: "5", icon: Repeat, color: "text-purple-400" },
                { title: "Wishlist", value: "24", icon: Heart, color: "text-rose-400" },
              ].map((stat, i) => (
                <Card key={i} variant="glass" className="p-4 border-white/5 bg-white/5 hover:bg-white/10 transition-colors flex flex-col gap-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.title}</p>
                </Card>
              ))}
            </div>

            {/* Savings & Chart Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Savings Tracker */}
              <Card variant="glass" className="p-5 border-white/5 bg-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-sm">Total Savings</span>
                  </div>
                  <Badge variant="glass" className="text-[10px] text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                    <ArrowUpRight className="w-3 h-3 mr-1" /> +15% this sem
                  </Badge>
                </div>
                <p className="text-4xl font-extrabold text-foreground tracking-tight mb-2">₹4,250</p>
                <p className="text-xs text-muted-foreground">Saved by exchanging instead of buying new.</p>
                
                {/* Simulated progress bar */}
                <div className="w-full h-2 bg-background rounded-full mt-4 overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                  />
                </div>
              </Card>

              {/* Exchange Requests */}
              <Card variant="glass" className="p-5 border-white/5 bg-white/5 flex flex-col">
                <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-primary" /> Pending Requests
                </h3>
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">SR</div>
                      <div>
                        <p className="text-xs font-bold">OS Textbook</p>
                        <p className="text-[10px] text-muted-foreground">Requested by Sameer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/30 transition-colors">
                        <Check className="w-3 h-3" />
                      </button>
                      <button className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center hover:bg-rose-500/30 transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>

            </div>

          </div>

          {/* Right Sidebar Area (Col 4) */}
          <div className="flex flex-col gap-6">
            
            {/* AI Recommendations */}
            <Card variant="glass" className="p-5 border-white/5 bg-white/5 flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full" />
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> AI Matches
              </h3>
              
              <div className="flex flex-col gap-4 relative z-10">
                {[
                  { title: "Compiler Design", match: "98%" },
                  { title: "Computer Networks", match: "94%" }
                ].map((book, i) => (
                  <div key={i} className="flex gap-3 items-center group cursor-pointer">
                    <div className="w-10 h-14 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded border border-white/10 shadow-inner group-hover:border-primary/50 transition-colors" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{book.title}</p>
                      <p className="text-[10px] text-emerald-400 font-medium">Match: {book.match}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card variant="glass" className="p-5 border-white/5 bg-white/5 flex-1">
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" /> Recent Activity
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="w-6 flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-[1px] h-full bg-white/10 mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="text-xs text-foreground font-medium">Book Exchanged</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1"><Clock className="w-3 h-3" /> 2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground font-medium">Earned 50 Credits</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1"><Clock className="w-3 h-3" /> 1 day ago</p>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>

      </motion.div>
    </div>
  );
};
