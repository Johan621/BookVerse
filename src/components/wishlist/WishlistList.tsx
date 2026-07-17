// src/components/wishlist/WishlistList.tsx
"use client";

import React from "react";
import { WishlistItem, WishlistBook } from "@/components/wishlist/WishlistItem";

interface Props {
  books: WishlistBook[];
  onRemove: (id: string) => void;
  onMove: (id: string) => void;
  onShare: (id: string) => void;
}

export const WishlistList: React.FC<Props> = ({ books, onRemove, onMove, onShare }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {books.map((book) => (
        <WishlistItem
          key={book.id}
          book={book}
          onRemove={onRemove}
          onMove={onMove}
          onShare={onShare}
        />
      ))}
    </div>
  );
};
