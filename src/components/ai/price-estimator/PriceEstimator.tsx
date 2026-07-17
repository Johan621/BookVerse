"use client";

import * as React from "react";
import { useState } from "react";
import { EstimatorForm, type EstimatorFormData } from "./EstimatorForm";
import { PriceResults } from "./PriceResults";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Calculator, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const PriceEstimator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{ originalPrice: number } | null>(null);

  const handleEstimate = (data: EstimatorFormData) => {
    setIsLoading(true);
    
    // Simulate AI Processing Delay
    setTimeout(() => {
      setResults({
        originalPrice: parseInt(data.originalPrice) || 1000,
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      
      {/* Header */}
      <FadeIn className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary mb-6 shadow-lg border border-primary/30 relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <Calculator className="w-8 h-8 relative z-10" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          AI Price Estimator
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Not sure how to price your book? Our AI analyzes market trends, campus demand, and condition to suggest the perfect resale value.
        </p>
      </FadeIn>

      <div className="w-full max-w-3xl mx-auto">
        {!results ? (
          <SlideUp delay={0.2} className="glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <EstimatorForm onEstimate={handleEstimate} isLoading={isLoading} />
          </SlideUp>
        ) : (
          <SlideUp className="space-y-6">
            <Button 
              variant="ghost" 
              onClick={handleReset}
              className="text-muted-foreground hover:text-foreground font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Calculate Another Book
            </Button>
            
            <PriceResults originalPrice={results.originalPrice} />
          </SlideUp>
        )}
      </div>

    </div>
  );
};
