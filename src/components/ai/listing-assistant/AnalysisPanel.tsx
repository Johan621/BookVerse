"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScoreRing } from "./ScoreRing";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface AnalysisPanelProps {
  seoScore: number;
  qualityScore: number;
  grammarIssues: string[];
  missingInfo: string[];
}

export const AnalysisPanel = ({ seoScore, qualityScore, grammarIssues, missingInfo }: AnalysisPanelProps) => {
  return (
    <div className="space-y-6">
      
      {/* Scores */}
      <div className="flex items-center justify-around gap-4 p-6 glass rounded-3xl border border-white/10">
        <ScoreRing score={qualityScore} label="Listing Quality" size={100} />
        <ScoreRing score={seoScore} label="SEO Score" size={100} />
      </div>

      {/* Issues */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Missing Info */}
        <FadeIn delay={0.1} className="p-5 glass rounded-2xl border border-white/10 h-full">
          <h4 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-500" />
            Missing Information
          </h4>
          {missingInfo.length > 0 ? (
            <ul className="space-y-2">
              {missingInfo.map((info, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1 shrink-0" />
                  {info}
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> All essential info provided!
            </div>
          )}
        </FadeIn>

        {/* Grammar Issues */}
        <FadeIn delay={0.2} className="p-5 glass rounded-2xl border border-white/10 h-full">
          <h4 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" />
            Grammar & Tone
          </h4>
          {grammarIssues.length > 0 ? (
            <ul className="space-y-2">
              {grammarIssues.map((issue, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1 shrink-0" />
                  {issue}
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Grammar looks perfect!
            </div>
          )}
        </FadeIn>

      </div>

    </div>
  );
};
