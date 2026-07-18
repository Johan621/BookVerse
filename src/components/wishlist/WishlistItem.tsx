// src/components/wishlist/WishlistItem.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaTrashAlt, FaExchangeAlt, FaShareAlt } from "react-icons/fa";

export interface WishlistBook {
  id: string;
  title: string;
  author: string;
  coverImage?: string;
  price?: string;
}

interface Props {
  book: WishlistBook;
  onRemove: (id: string) => void;
  onMove: (id: string) => void;
  onShare: (id: string) => void;
}

export const WishlistItem: React.FC<Props> = React.memo(({ book, onRemove, onMove, onShare }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "glass p-4 rounded-xl flex flex-col gap-3",
        "shadow-lg transition-shadow"
      )}
    >
      <div className="flex items-center gap-4">
        {book.coverImage ? (
          <div className="relative w-16 h-20 overflow-hidden rounded">
            <Image src={book.coverImage} alt={book.title} fill sizes="64px" className="object-cover" />
          </div>
        ) : (
          <div className="w-16 h-20 bg-muted rounded" />
        )}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-foreground">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          {book.price && <p className="text-sm text-primary mt-1">{book.price}</p>}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => onRemove(book.id)}
          className="text-red-500 hover:text-red-400 transition-colors"
          title="Remove"
        >
          <FaTrashAlt size={18} />
        </button>
        <button
          onClick={() => onMove(book.id)}
          className="text-emerald-500 hover:text-emerald-400 transition-colors"
          title="Move to Exchange"
        >
          <FaExchangeAlt size={18} />
        </button>
        <button
          onClick={() => onShare(book.id)}
          className="text-blue-500 hover:text-blue-400 transition-colors"
          title="Share"
        >
          <FaShareAlt size={18} />
        </button>
      </div>
    </motion.div>
  );
});
