"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Bookmark, Heart, Star, CheckCircle2, Eye } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";
// import { Floating } from "@/components/animations/Floating";

export interface BookProps {
  id: string;
  title: string;
  author: string;
  department: string;
  semester: string;
  condition: "Like New" | "Good" | "Fair" | "Heavily Used";
  price: number;
  rating: number;
  isVerified: boolean;
  coverImage?: string; // We'll use a gradient placeholder if not provided
}

export const BookCard = ({ book }: { book: BookProps }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-full h-full"
    >
      <Card variant="glass" className="flex h-full flex-col overflow-hidden border-white/10 p-0 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30">
        
        {/* Top Image Section */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
          {book.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          ) : (
            <div className="w-24 h-32 rounded bg-primary/20 flex flex-col items-center justify-center border border-primary/30 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <div className="w-16 h-2 bg-primary/40 rounded-full mb-2" />
              <div className="w-12 h-2 bg-primary/30 rounded-full" />
            </div>
          )}

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
          
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <MagneticButton>
              <button className="h-8 w-8 rounded-full glass border-white/20 flex items-center justify-center hover:bg-white/20 hover:text-red-400 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="h-8 w-8 rounded-full glass border-white/20 flex items-center justify-center hover:bg-white/20 hover:text-blue-400 transition-colors">
                <Bookmark className="h-4 w-4" />
              </button>
            </MagneticButton>
          </div>

          <div className="absolute bottom-3 left-3 flex gap-2">
            <Badge variant="glass" className="text-xs bg-background/50 backdrop-blur-md">
              {book.semester}
            </Badge>
            <Badge variant="glass" className="text-xs bg-background/50 backdrop-blur-md">
              {book.condition}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-1 flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {book.title}
            </h3>
            <div className="flex items-center gap-1 font-bold text-primary shrink-0">
              ₹{book.price === 0 ? "Free" : book.price}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-1">{book.author}</p>
          
          <div className="mt-auto flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-muted-foreground">{book.department}</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span>{book.rating.toFixed(1)}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-xs">
                {book.isVerified && (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Verified Owner</span>
                  </>
                )}
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                <Eye className="h-3 w-3" /> Quick View
              </button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
