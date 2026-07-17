"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const FILTERS = [
  { label: "Department", options: ["Computer Science", "Mechanical", "Civil", "Electrical", "Electronics"] },
  { label: "Semester", options: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"] },
  { label: "Subject", options: ["Core", "Elective", "Lab", "Project"] },
  { label: "Condition", options: ["Like New", "Good", "Fair", "Heavily Used"] },
  { label: "Price", options: ["Under ₹500", "₹500 - ₹1000", "Over ₹1000", "Free/Giveaway"] },
];

export const SearchFilters = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="mt-12 w-full max-w-5xl mx-auto flex flex-col items-center">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
        <Filter className="h-4 w-4" />
        <span>Advanced Filters</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {FILTERS.map((filter) => (
          <div key={filter.label} className="relative">
            <button
              onClick={() => setActiveFilter(activeFilter === filter.label ? null : filter.label)}
              className={cn(
                "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
                "glass border-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary",
                activeFilter === filter.label ? "bg-white/10 border-primary/50 text-primary" : "text-foreground"
              )}
            >
              {filter.label}
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeFilter === filter.label ? "rotate-180" : "rotate-0")} />
            </button>

            <AnimatePresence>
              {activeFilter === filter.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 z-50 min-w-[200px] rounded-xl glass-heavy border border-white/10 p-2 shadow-xl"
                >
                  <div className="flex flex-col gap-1">
                    {filter.options.map((option) => (
                      <button onClick={() => toast.info("Coming soon!")}
                        key={option}
                        className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors focus:outline-none"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
