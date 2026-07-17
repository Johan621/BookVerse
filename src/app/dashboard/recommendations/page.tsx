"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Sparkles, TrendingUp, BookOpen, ChevronRight } from "lucide-react";
import { BookCard } from "@/components/dashboard/books/BookCard";

const MOCK_MAJOR = [
  { id: "b1", title: "Data Structures & Algorithms", author: "Narasimha Karumanchi", status: "PUBLISHED", views: 124, condition: "Good" },
  { id: "b2", title: "Computer Architecture", author: "Patterson", status: "PUBLISHED", views: 89, condition: "Like New" },
  { id: "b3", title: "Discrete Mathematics", author: "Rosen", status: "PUBLISHED", views: 256, condition: "Fair" },
  { id: "b4", title: "Clean Code", author: "Robert C. Martin", status: "PUBLISHED", views: 432, condition: "New" },
];

const MOCK_TRENDING = [
  { id: "b5", title: "University Physics", author: "Young & Freedman", status: "PUBLISHED", views: 890, condition: "Good" },
  { id: "b6", title: "Calculus Early Transcendentals", author: "Stewart", status: "PUBLISHED", views: 765, condition: "Poor" },
  { id: "b7", title: "Microeconomics", author: "Mankiw", status: "PUBLISHED", views: 543, condition: "Like New" },
  { id: "b8", title: "Organic Chemistry", author: "Wade", status: "PUBLISHED", views: 421, condition: "Fair" },
];

export default function AIRecommendationsPage() {
  return (
    <div className="space-y-12 pb-12">
      
      <FadeIn className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary/20 blur-[80px] pointer-events-none" />
        
        <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 relative z-10 animate-pulse" />
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground relative z-10 mb-2">
          Curated for You
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto relative z-10">
          Our AI analyzes your major, syllabus, and past exchanges to find the perfect books before you even need to search for them.
        </p>
      </FadeIn>

      {/* Category 1 */}
      <FadeIn delay={0.1}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Based on your major: <span className="text-primary">Computer Science</span></h2>
          </div>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center transition-colors">
            See all <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_MAJOR.map((book) => (
            <BookCard key={book.id} {...(book as any)} />
          ))}
        </div>
      </FadeIn>

      <hr className="border-white/10" />

      {/* Category 2 */}
      <FadeIn delay={0.2}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <h2 className="text-xl font-bold">Trending at <span className="text-emerald-500">State University</span></h2>
          </div>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center transition-colors">
            See all <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_TRENDING.map((book) => (
            <BookCard key={book.id} {...(book as any)} />
          ))}
        </div>
      </FadeIn>

    </div>
  );
}
