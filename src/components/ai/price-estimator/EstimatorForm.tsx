"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FadeIn } from "@/components/animations/FadeIn";
import { Calculator, Sparkles } from "lucide-react";

export interface EstimatorFormData {
  condition: string;
  edition: string;
  purchaseYear: string;
  originalPrice: string;
  subject: string;
  demandLevel: string;
}

interface EstimatorFormProps {
  onEstimate: (data: EstimatorFormData) => void;
  isLoading: boolean;
}

export const EstimatorForm = ({ onEstimate, isLoading }: EstimatorFormProps) => {
  const [currentYear] = React.useState<number>(() => new Date().getFullYear());

  const { register, handleSubmit, reset } = useForm<EstimatorFormData>({
    defaultValues: {
      condition: "Good",
      edition: "3rd Edition",
      purchaseYear: "",
      originalPrice: "",
      subject: "Computer Science",
      demandLevel: "High",
    }
  });

  React.useEffect(() => {
    if (currentYear) {
      reset((prev) => ({
        ...prev,
        purchaseYear: currentYear.toString()
      }));
    }
  }, [currentYear, reset]);

  return (
    <form onSubmit={handleSubmit(onEstimate)} className="space-y-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Subject / Course</Label>
          <Input placeholder="e.g. Computer Science" {...register("subject")} required />
        </div>
        
        <div className="space-y-2">
          <Label>Original Price (₹)</Label>
          <Input type="number" placeholder="e.g. 1500" {...register("originalPrice")} required />
        </div>

        <div className="space-y-2">
          <Label>Condition</Label>
          <select 
            {...register("condition")}
            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-primary/50 text-foreground transition-colors appearance-none"
          >
            <option value="Like New" className="bg-background text-foreground">Like New</option>
            <option value="Good" className="bg-background text-foreground">Good</option>
            <option value="Fair" className="bg-background text-foreground">Fair</option>
            <option value="Poor" className="bg-background text-foreground">Poor</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label>Edition</Label>
          <Input placeholder="e.g. 3rd Edition" {...register("edition")} required />
        </div>

        <div className="space-y-2">
          <Label>Purchase Year</Label>
          <Input type="number" min="2000" max={currentYear || 2026} {...register("purchaseYear")} required />
        </div>

        <div className="space-y-2">
          <Label>Current Campus Demand</Label>
          <select 
            {...register("demandLevel")}
            className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-primary/50 text-foreground transition-colors appearance-none"
          >
            <option value="High" className="bg-background text-foreground">High (Core Subject)</option>
            <option value="Medium" className="bg-background text-foreground">Medium (Elective)</option>
            <option value="Low" className="bg-background text-foreground">Low (Niche)</option>
          </select>
        </div>
      </div>

      <FadeIn delay={0.2} className="pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full h-12 font-bold text-base relative overflow-hidden group"
          disabled={isLoading}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center justify-center">
            {isLoading ? (
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            ) : (
              <Calculator className="w-5 h-5 mr-2" />
            )}
            {isLoading ? "Analyzing Market Data..." : "Estimate Fair Price"}
          </span>
        </Button>
      </FadeIn>
    </form>
  );
};
