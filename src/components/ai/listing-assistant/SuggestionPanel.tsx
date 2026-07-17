"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Check, Copy, Tag } from "lucide-react";

interface SuggestionPanelProps {
  suggestedTitle: string;
  suggestedDescription: string;
  keywords: string[];
  onApply: (title: string, desc: string) => void;
}

export const SuggestionPanel = ({ suggestedTitle, suggestedDescription, keywords, onApply }: SuggestionPanelProps) => {
  const [title, setTitle] = React.useState(suggestedTitle);
  const [desc, setDesc] = React.useState(suggestedDescription);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${title}\n\n${desc}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      <FadeIn delay={0.3} className="space-y-4 p-6 glass rounded-3xl border border-primary/20 relative">
        <div className="absolute top-0 right-0 p-4 flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10" onClick={handleCopy} aria-label="Action button">
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
          </Button>
        </div>

        <div className="space-y-2 pr-12">
          <Label className="text-primary font-bold text-xs uppercase tracking-wider">Suggested Title</Label>
          <Input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className="font-bold text-lg bg-background/50 border-white/10 h-12"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-primary font-bold text-xs uppercase tracking-wider">Polished Description</Label>
          <Textarea 
            value={desc} 
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)}
            className="min-h-[150px] bg-background/50 border-white/10 text-sm leading-relaxed"
          />
        </div>

        <div className="pt-2">
          <Label className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block flex items-center gap-1">
            <Tag className="w-3 h-3" /> Auto-Generated Tags
          </Label>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw, i) => (
              <Badge key={i} variant="glass" className="bg-primary/10 text-primary border-primary/20 text-xs py-1 cursor-default">
                {kw}
              </Badge>
            ))}
          </div>
        </div>

      </FadeIn>

      <FadeIn delay={0.4}>
        <Button 
          variant="primary" 
          className="w-full h-12 font-bold text-base bg-emerald-500 hover:bg-emerald-600 text-white"
          onClick={() => onApply(title, desc)}
        >
          <Check className="w-5 h-5 mr-2" />
          Apply Suggestions
        </Button>
      </FadeIn>

    </div>
  );
};
