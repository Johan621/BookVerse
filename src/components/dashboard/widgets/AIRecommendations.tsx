import * as React from "react";
import { Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

const MOCK_RECOMMENDATIONS = [
  {
    id: "r1",
    title: "Operating System Concepts",
    author: "Abraham Silberschatz",
    match: "98% Match",
    reason: "Required for 5th Sem CS",
  },
  {
    id: "r2",
    title: "Computer Networks",
    author: "Andrew S. Tanenbaum",
    match: "92% Match",
    reason: "Popular in your department",
  },
];

export const AIRecommendations = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
      {/* AI Glow Effect */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="p-5 border-b border-white/10 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-bold">AI Recommended</h3>
        </div>
        <Button variant="ghost" size="sm" className="h-8 text-xs">
          Refresh
        </Button>
      </div>

      <div className="p-5 space-y-4 flex-1 relative z-10">
        {MOCK_RECOMMENDATIONS.map((book) => (
          <div key={book.id} className="group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all cursor-pointer hover:bg-white/10 flex gap-4">
            <div className="w-12 h-16 bg-white/10 rounded shrink-0 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h4 className="font-semibold text-sm truncate text-foreground group-hover:text-primary transition-colors">{book.title}</h4>
              <p className="text-xs text-muted-foreground truncate mt-0.5">{book.author}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                  {book.match}
                </span>
                <span className="text-[10px] text-muted-foreground truncate">
                  {book.reason}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
