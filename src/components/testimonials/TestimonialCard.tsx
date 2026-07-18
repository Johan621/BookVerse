"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Star, Repeat, IndianRupee } from "lucide-react";

export interface TestimonialProps {
  id: string;
  name: string;
  college: string;
  photoInitials: string;
  rating: number;
  review: string;
  booksExchanged: number;
  savings: number;
  colorClass: string;
}

export const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <Card 
      variant="glass" 
      className="glass relative flex flex-col p-6 h-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 w-[280px] sm:w-full max-w-full max-w-[350px] lg:w-full max-w-[400px] shrink-0 mx-4"
    >
      {/* Top Section: User Info & Rating */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-inner bg-gradient-to-tr ${testimonial.colorClass}`}>
            {testimonial.photoInitials}
          </div>
          <div>
            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
            <p className="text-xs text-muted-foreground">{testimonial.college}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-white/20'}`} 
            />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-foreground/90 leading-relaxed mb-6 italic flex-1">
        &quot;{testimonial.review}&quot;
      </p>

      {/* Bottom Section: Stats */}
      <div className="mt-auto grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400">
            <Repeat className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Exchanged</p>
            <p className="text-sm font-bold text-foreground">{testimonial.booksExchanged} Books</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-emerald-500/20 text-emerald-400">
            <IndianRupee className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Saved</p>
            <p className="text-sm font-bold text-emerald-400">₹{testimonial.savings.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
