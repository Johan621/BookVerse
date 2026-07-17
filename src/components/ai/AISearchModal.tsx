"use client";

import * as React from "react";
import { Sparkles, X, Search, BookOpen, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SMART_SUGGESTIONS = [
  "Textbooks for CS Sem 3",
  "Easy math electives",
  "Free engineering books",
  "Syllabus matching books"
];

const MOCK_RESULTS = [
  { id: "1", title: "Introduction to Algorithms", matchScore: "98% Match", reason: "Directly matches 'CS Sem 3' syllabus requirements." },
  { id: "2", title: "Database Systems", matchScore: "92% Match", reason: "Frequently bought by students taking CS Sem 3." }
];

export const AISearchModal = ({ isOpen, onClose }: AISearchModalProps) => {
  const [query, setQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [results, setResults] = React.useState<typeof MOCK_RESULTS | null>(null);

  React.useEffect(() => {
    if (!isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults(null);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSearching(false);
    }
  }, [isOpen]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    setResults(null);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsSearching(false);
      setResults(MOCK_RESULTS);
    }, 1500);
  };

  const handleSuggestion = (text: string) => {
    setQuery(text);
    // Auto trigger search on suggestion click
    setIsSearching(true);
    setResults(null);
    setTimeout(() => {
      setIsSearching(false);
      setResults(MOCK_RESULTS);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-0">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-background border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-[100px] pointer-events-none" />

        <form onSubmit={handleSearch} className="relative p-2 border-b border-white/10">
          <Sparkles className={`absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 ${isSearching ? "text-primary animate-pulse" : "text-primary"}`} />
          <Input 
            autoFocus
            placeholder="Ask AI to find a book (e.g., 'Easy math electives')..."
            className="w-full h-14 pl-14 pr-12 bg-transparent border-none focus-visible:ring-0 text-lg shadow-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" onClick={onClose} className="absolute right-6 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </form>

        <div className="p-4 sm:p-6 min-h-[300px]">
          
          {/* Default View: Suggestions */}
          {!isSearching && !results && (
            <FadeIn>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Smart Suggestions</h3>
              <div className="flex flex-wrap gap-2">
                {SMART_SUGGESTIONS.map(s => (
                  <button 
                    key={s} 
                    onClick={() => handleSuggestion(s)}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 text-sm transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Loading State */}
          {isSearching && (
            <div className="flex flex-col items-center justify-center h-48 space-y-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary animate-pulse relative z-10" />
                <div className="absolute inset-0 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
              <p className="text-sm font-bold text-primary animate-pulse">Analyzing semantics...</p>
            </div>
          )}

          {/* Results State */}
          {!isSearching && results && (
            <FadeIn>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">AI Recommendations</h3>
              <div className="space-y-3">
                {results.map((result) => (
                  <Link href={`/books/${result.id}`} key={result.id} onClick={onClose}>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all flex items-start gap-4 group">
                      <div className="w-10 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{result.title}</h4>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">{result.matchScore}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-primary shrink-0" /> {result.reason}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground self-center shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}

        </div>
      </div>
    </div>
  );
};
