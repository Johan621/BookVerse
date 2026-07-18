"use client";

import * as React from "react";
import { useState } from "react";
import { DraftInput } from "./DraftInput";
import { AnalysisPanel } from "./AnalysisPanel";
import { SuggestionPanel } from "./SuggestionPanel";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Wand2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

type AssistantState = "INPUT" | "ANALYZING" | "RESULTS";

const MOCK_ANALYSIS = {
  seoScore: 92,
  qualityScore: 85,
  grammarIssues: [
    "Changed 'it have some scratchs' to 'It has minor scratches.'",
    "Capitalized book title properly."
  ],
  missingInfo: [
    "Publisher name is recommended for higher search ranking."
  ],
  suggestedTitle: "Fundamentals of Physics (11th Edition) - Like New",
  suggestedDescription: "Selling my lightly used copy of Fundamentals of Physics (11th Edition) by David Halliday, Robert Resnick, and Jearl Walker. The book is in excellent condition with no highlighting or torn pages. Only minor wear on the corners from carrying it in my backpack. Perfect for the PHY101 course.",
  keywords: ["Physics", "Halliday", "Resnick", "11th Edition", "PHY101", "Textbook"],
};

export const ListingAssistant = () => {
  const [state, setState] = useState<AssistantState>("INPUT");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAnalyze = () => {
    setState("ANALYZING");
    
    // Simulate AI Delay
    setTimeout(() => {
      setState("RESULTS");
    }, 2500);
  };

  const handleApply = (newTitle: string, newDesc: string) => {
    setTitle(newTitle);
    setDescription(newDesc);
    setState("INPUT"); // Go back to input with new values
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      
      {/* Header */}
      <FadeIn className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 text-primary mb-6 shadow-lg border border-primary/30 relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <Wand2 className="w-8 h-8 relative z-10" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          AI Listing Assistant
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Write a quick draft and let our AI optimize your title, description, and keywords to sell your book 3x faster.
        </p>
      </FadeIn>

      <div className="w-full">
        {state === "INPUT" || state === "ANALYZING" ? (
          <SlideUp delay={0.2} className="max-w-3xl mx-auto glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <DraftInput 
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              onAnalyze={handleAnalyze}
              isLoading={state === "ANALYZING"}
            />
          </SlideUp>
        ) : (
          <SlideUp className="space-y-6">
            <Button 
              variant="ghost" 
              onClick={() => setState("INPUT")}
              className="text-muted-foreground hover:text-foreground font-semibold mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Editor
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <AnalysisPanel 
                  seoScore={MOCK_ANALYSIS.seoScore}
                  qualityScore={MOCK_ANALYSIS.qualityScore}
                  grammarIssues={MOCK_ANALYSIS.grammarIssues}
                  missingInfo={MOCK_ANALYSIS.missingInfo}
                />
              </div>
              <div className="lg:col-span-7">
                <SuggestionPanel 
                  suggestedTitle={MOCK_ANALYSIS.suggestedTitle}
                  suggestedDescription={MOCK_ANALYSIS.suggestedDescription}
                  keywords={MOCK_ANALYSIS.keywords}
                  onApply={handleApply}
                />
              </div>
            </div>
          </SlideUp>
        )}
      </div>

    </div>
  );
};
