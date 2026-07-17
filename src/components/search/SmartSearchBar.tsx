"use client";

import * as React from "react";
import { Search, Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

export const SmartSearchBar = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* AI Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute -top-3 left-6 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-blue-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg"
      >
        <Sparkles className="h-3 w-3" />
        <span>AI Smart Search</span>
      </motion.div>

      {/* Glass Search Bar */}
      <div className="relative flex h-16 w-full items-center overflow-hidden rounded-full glass-heavy border-white/20 shadow-2xl transition-colors hover:border-primary/50 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20">
        <div className="flex h-full items-center pl-6 pr-3 text-muted-foreground">
          <Search className="h-6 w-6" />
        </div>
        
        <input
          type="text"
          placeholder="Ask AI to find a book, syllabus, or topic..."
          className="h-full w-full bg-transparent px-2 text-lg font-medium text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
         aria-label="Input field" />
        
        <div className="flex h-full items-center pr-2 gap-2">
          {/* Voice Search Button */}
          <Button onClick={() => toast.info("Coming soon!")} variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-white/10 hover:text-primary transition-colors">
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice Search</span>
          </Button>
          
          <Button onClick={() => toast.info("Coming soon!")} variant="primary" className="h-12 rounded-full px-8 text-base shadow-md">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
