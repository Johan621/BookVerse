"use client";

import * as React from "react";
import { useState } from "react";
import { Check, Edit2, Book, User, Hash, Library, Tags, Building } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface ExtractedData {
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  edition: string;
  subject: string;
  category: string;
}

interface ExtractionResultProps {
  data: ExtractedData;
  onConfirm: (data: ExtractedData) => void;
  onRetry: () => void;
}

export const ExtractionResult = ({ data, onConfirm, onRetry }: ExtractionResultProps) => {
  const [formData, setFormData] = useState<ExtractedData>(data);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field: keyof ExtractedData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    { key: "title" as const, label: "Book Title", icon: Book },
    { key: "author" as const, label: "Author", icon: User },
    { key: "isbn" as const, label: "ISBN", icon: Hash },
    { key: "publisher" as const, label: "Publisher", icon: Building },
    { key: "edition" as const, label: "Edition", icon: Library },
    { key: "subject" as const, label: "Subject", icon: Tags },
    { key: "category" as const, label: "Suggested Category", icon: Tags },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-3xl p-6 sm:p-8 border border-primary/20 relative overflow-hidden">
      
      {/* Success Badge */}
      <div className="absolute top-0 right-0 p-4">
        <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-500/20">
          <Check className="w-3 h-3" />
          Scan Successful
        </div>
      </div>

      <div className="mb-8 pr-32">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
          Extracted Details
        </h3>
        <p className="text-muted-foreground text-sm mt-1">
          Review and edit the information extracted from your book cover.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {fields.map(({ key, label, icon: Icon }, index) => (
          <FadeIn key={key} delay={index * 0.05} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <Label className="sm:w-1/3 flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Icon className="w-4 h-4" />
              {label}
            </Label>
            <div className="sm:w-2/3">
              {isEditing ? (
                <Input 
                  value={formData[key]} 
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="bg-background/50 h-10 border-white/10"
                />
              ) : (
                <div className="h-10 px-4 flex items-center rounded-lg bg-white/5 border border-white/5 text-sm font-semibold text-foreground">
                  {formData[key]}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10 mt-6">
        <Button 
          variant={isEditing ? "primary" : "outline"}
          onClick={() => setIsEditing(!isEditing)}
          className={cn("flex-1 font-bold h-12", isEditing ? "" : "border-primary/50 text-primary hover:bg-primary/10")}
        >
          {isEditing ? (
            <>Save Changes</>
          ) : (
            <>
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Details
            </>
          )}
        </Button>
        <Button 
          variant="primary" 
          onClick={() => onConfirm(formData)}
          className="flex-1 font-bold h-12 bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          <Check className="w-5 h-5 mr-2" />
          Confirm & Continue
        </Button>
      </div>

      {!isEditing && (
        <div className="mt-6 text-center">
          <button onClick={onRetry} className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
            Wrong book? Scan again
          </button>
        </div>
      )}
    </div>
  );
};
