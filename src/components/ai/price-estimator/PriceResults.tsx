"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedGauge } from "./AnimatedGauge";
import { PriceTrendGraph } from "./PriceTrendGraph";
import { Info, IndianRupee, TrendingUp, Sparkles } from "lucide-react";

interface PriceResultsProps {
  originalPrice: number;
}

export const PriceResults = ({ originalPrice }: PriceResultsProps) => {
  // Mock Calculations
  const suggestedPrice = Math.round(originalPrice * 0.65);
  const minPrice = Math.round(suggestedPrice * 0.85);
  const maxPrice = Math.round(suggestedPrice * 1.15);
  const confidenceScore = 88;
  
  // Mock past 6 months data trending slightly down then up for start of semester
  const trendData = [
    Math.round(suggestedPrice * 1.1),
    Math.round(suggestedPrice * 1.05),
    Math.round(suggestedPrice * 0.95),
    Math.round(suggestedPrice * 0.9),
    Math.round(suggestedPrice * 0.98),
    suggestedPrice,
  ];
  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];

  return (
    <div className="w-full space-y-6">
      
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Suggested Price Card */}
        <FadeIn delay={0.1} className="glass rounded-3xl p-6 border border-primary/20 relative overflow-hidden flex flex-col justify-center items-center text-center">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <IndianRupee className="w-24 h-24 text-primary" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20">
            <Sparkles className="w-3 h-3" />
            AI Suggested Price
          </div>
          
          <div className="text-5xl font-black text-foreground tracking-tighter mb-2 flex items-start justify-center gap-1">
            <span className="text-2xl text-muted-foreground mt-2">₹</span>
            {suggestedPrice}
          </div>
          
          <p className="text-sm font-medium text-muted-foreground">
            Optimal Selling Range: <span className="text-foreground">₹{minPrice} - ₹{maxPrice}</span>
          </p>
        </FadeIn>

        {/* Confidence Gauge */}
        <FadeIn delay={0.2} className="glass rounded-3xl p-6 border border-white/10 flex flex-col justify-center items-center">
          <AnimatedGauge value={confidenceScore} label="Confidence" size={140} />
          <p className="text-xs text-center text-muted-foreground mt-4 max-w-[200px]">
            Based on 142 recent transactions for similar books on campus.
          </p>
        </FadeIn>

      </div>

      {/* AI Explanation & Trend Graph */}
      <FadeIn delay={0.3} className="glass rounded-3xl p-6 border border-white/10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Explanation */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-400" />
              <h4 className="font-bold text-foreground">Why this price?</h4>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <p>Demand is currently <strong className="text-foreground">High</strong> as the new semester begins.</p>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                <p>Depreciation of <strong className="text-foreground">35%</strong> applied for "Good" condition and 3rd Edition.</p>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <p>Pricing at ₹{suggestedPrice} puts you in the top 15% most competitive listings.</p>
              </li>
            </ul>
          </div>

          {/* Graph */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h4 className="font-bold text-sm text-foreground">6-Month Trend</h4>
              </div>
            </div>
            <div className="h-32 w-full">
              <PriceTrendGraph data={trendData} months={months} />
            </div>
          </div>
          
        </div>
      </FadeIn>

    </div>
  );
};
