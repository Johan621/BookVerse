"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { UploadArea } from "./UploadArea";
import { ScanningAnimation } from "./ScanningAnimation";
import { ExtractionResult } from "./ExtractionResult";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { Sparkles } from "lucide-react";

type ScannerState = "IDLE" | "SCANNING" | "RESULTS";

const MOCK_RESULTS = {
  title: "Introduction to Algorithms",
  author: "Thomas H. Cormen, Charles E. Leiserson",
  isbn: "978-0262033848",
  publisher: "MIT Press",
  edition: "3rd Edition",
  subject: "Computer Science",
  category: "Engineering & Technology",
};

export const BookScanner = () => {
  const [state, setState] = useState<ScannerState>("IDLE");
  const [progress, setProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileSelect = (file: File | string) => {
    // In a real app, we'd create an object URL for the file to preview it
    if (typeof file === "string") {
      setImagePreview(null); // Mock string for camera
    } else {
      setImagePreview(URL.createObjectURL(file));
    }
    
    startScanning();
  };

  const startScanning = () => {
    setState("SCANNING");
    setProgress(0);
    
    // Simulate scanning progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setState("RESULTS");
        }, 500); // Small pause at 100%
      }
      setProgress(currentProgress);
    }, 400);
  };

  const handleConfirm = (data: typeof MOCK_RESULTS) => {
    console.log("Confirmed Data:", data);
    // Move to next step in real app
    alert("Book details confirmed! Ready to list.");
  };

  const handleRetry = () => {
    setState("IDLE");
    setImagePreview(null);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[500px] flex flex-col justify-center py-8">
      
      {state === "IDLE" && (
        <FadeIn className="text-center max-w-2xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Book Scanner
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Scan your book cover
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Our AI will automatically extract the title, author, ISBN, and categorization details so you don&apos;t have to type them.
          </p>
          
          <SlideUp delay={0.1}>
            <UploadArea onFileSelect={handleFileSelect} />
          </SlideUp>
        </FadeIn>
      )}

      {state === "SCANNING" && (
        <FadeIn className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
              Processing Image...
            </h2>
            <p className="text-muted-foreground">Extracting text and identifying book details.</p>
          </div>
          <ScanningAnimation imagePreview={imagePreview} progress={progress} />
        </FadeIn>
      )}

      {state === "RESULTS" && (
        <FadeIn className="w-full">
          <ExtractionResult 
            data={MOCK_RESULTS} 
            onConfirm={handleConfirm} 
            onRetry={handleRetry} 
          />
        </FadeIn>
      )}

    </div>
  );
};
