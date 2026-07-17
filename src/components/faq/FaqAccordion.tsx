"use client";

import * as React from "react";
// import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FaqAccordion = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="w-full mb-4">
      <button
        className={`w-full flex items-center justify-between p-6 rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${
          isOpen 
            ? "bg-white/10 border-primary/30 shadow-[0_4px_20px_rgba(var(--primary-rgb),0.1)]" 
            : "bg-white/5 border-white/10 hover:bg-white/10"
        }`}
        onClick={onClick}
      >
        <span className="text-left font-bold text-lg text-foreground pr-4">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-primary/20 text-primary rotate-180' : 'bg-background/50 text-muted-foreground'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
