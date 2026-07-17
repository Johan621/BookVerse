"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { FadeIn } from "@/components/animations/FadeIn";
import { Wand2, Sparkles } from "lucide-react";

interface DraftInputProps {
  title: string;
  setTitle: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

export const DraftInput = ({ 
  title, setTitle, 
  description, setDescription, 
  onAnalyze, isLoading 
}: DraftInputProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Draft Title</Label>
        <Input 
          placeholder="e.g. Physics Book" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Draft Description</Label>
        <Textarea 
          placeholder="Write a rough description of the book you want to sell..." 
          className="min-h-[150px] resize-none"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
        <p className="text-xs text-muted-foreground text-right">
          {description.length} characters
        </p>
      </div>

      <FadeIn delay={0.1}>
        <Button 
          variant="primary" 
          className="w-full h-12 font-bold text-base relative overflow-hidden group"
          onClick={onAnalyze}
          disabled={isLoading || (!title && !description)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center justify-center">
            {isLoading ? (
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            ) : (
              <Wand2 className="w-5 h-5 mr-2" />
            )}
            {isLoading ? "Analyzing Listing..." : "Improve with AI"}
          </span>
        </Button>
      </FadeIn>
    </div>
  );
};
