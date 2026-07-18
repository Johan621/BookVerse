"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
// import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Quote, Building, TrendingUp, BookMarked } from "lucide-react";

export const CommunityHighlights = () => {
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Exchange Success Story */}
      <SlideUp delay={0.1} className="lg:col-span-2">
        <Card variant="glass" className="glass h-full flex flex-col justify-center p-8 border-white/10 hover:bg-white/10 transition-colors">
          <Quote className="h-10 w-10 text-primary mb-4 opacity-50" />
          <h3 className="text-xl font-bold text-foreground leading-relaxed mb-6">
            &quot;I managed to get all my 3rd-semester CS textbooks for half the price. Meeting someone from the senior batch was incredibly helpful for exam tips too!&quot;
          </h3>
          <div className="flex items-center gap-4 mt-auto">
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold shadow-inner">
              AJ
            </div>
            <div>
              <p className="font-bold text-sm text-foreground">Arjun J.</p>
              <p className="text-xs text-muted-foreground">Computer Science, 2nd Year</p>
            </div>
          </div>
        </Card>
      </SlideUp>

      {/* Trending Departments */}
      <SlideUp delay={0.2}>
        <Card variant="glass" className="glass h-full p-6 border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            <h3 className="font-bold text-foreground">Trending Departments</h3>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: "Computer Science", growth: "+24%" },
              { name: "Electronics & Comm", growth: "+18%" },
              { name: "Mechanical Eng", growth: "+12%" },
              { name: "Business Admin", growth: "+9%" },
            ].map((dept, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-white/5">
                <span className="text-sm font-medium text-muted-foreground">{dept.name}</span>
                <span className="text-xs font-bold text-emerald-400">{dept.growth}</span>
              </div>
            ))}
          </div>
        </Card>
      </SlideUp>

      {/* Most Exchanged Books */}
      <SlideUp delay={0.3} className="lg:col-span-2">
        <Card variant="glass" className="glass h-full p-6 border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 mb-6">
            <BookMarked className="h-5 w-5 text-blue-400" />
            <h3 className="font-bold text-foreground">Most Exchanged Books This Week</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Introduction to Algorithms",
              "Engineering Physics",
              "Database Management Systems",
              "Advanced Engineering Mathematics"
            ].map((book, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg glass border-white/5">
                <div className="flex-shrink-0 h-10 w-8 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded shadow-inner" />
                <span className="text-sm font-medium text-foreground line-clamp-2">{book}</span>
              </div>
            ))}
          </div>
        </Card>
      </SlideUp>

      {/* Recently Joined Colleges */}
      <SlideUp delay={0.4}>
        <Card variant="glass" className="glass h-full p-6 border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 mb-6">
            <Building className="h-5 w-5 text-purple-400" />
            <h3 className="font-bold text-foreground">Recently Joined</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Delhi University",
              "IIT Bombay",
              "VIT Vellore",
              "BITS Pilani",
              "SRM Institute",
              "Anna University"
            ].map((college, i) => (
              <Badge key={i} variant="glass" className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors cursor-default border-white/10">
                {college}
              </Badge>
            ))}
          </div>
        </Card>
      </SlideUp>

    </div>
  );
};
