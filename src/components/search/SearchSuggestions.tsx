"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const SUGGESTIONS = [
  "Operating Systems",
  "DBMS",
  "Java",
  "Python",
  "Data Structures",
  "Computer Networks",
  "Machine Learning",
];

export const SearchSuggestions = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <TrendingUp className="h-4 w-4 text-primary" />
        <span>Trending right now</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        {SUGGESTIONS.map((suggestion, idx) => (
          <motion.div
            key={suggestion}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * idx, type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Badge variant="glass" className="px-4 py-2 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors border-white/10">
              {suggestion}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
