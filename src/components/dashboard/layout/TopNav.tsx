"use client";

import * as React from "react";
import { Search, Bell, Menu, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { AISearchModal } from "@/components/ai/AISearchModal";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

export const TopNav = () => {
  const [isAiSearchOpen, setIsAiSearchOpen] = React.useState(false);

  return (
    <>
    <header className="sticky top-0 z-20 w-full h-20 border-b border-white/10 bg-background/50 backdrop-blur-xl">
      <FadeIn className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Menu Toggle & Search */}
        <div className="flex items-center gap-4 flex-1">
          <button onClick={() => toast.info("Coming soon!")} className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search books, users, or topics..." 
              className="w-full h-10 pl-10 pr-4 rounded-full bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
             aria-label="Input field" />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex border-primary/30 text-primary hover:bg-primary/10 gap-2 font-bold"
            onClick={() = aria-label="Action button"> setIsAiSearchOpen(true)}
          >
            <Sparkles className="w-4 h-4" /> AI Search
          </Button>

          <button onClick={() => toast.info("Coming soon!")} className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-background"></span>
          </button>
          
          {/* Mobile Profile Avatar */}
          <div className="lg:hidden w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-inner">
            JD
          </div>
        </div>

      </FadeIn>
    </header>

    <AISearchModal isOpen={isAiSearchOpen} onClose={() => setIsAiSearchOpen(false)} />
    </>
  );
};
