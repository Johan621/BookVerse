// src/app/wishlist/page.tsx
"use client";

import React from "react";
import { WishlistList } from "@/components/wishlist/WishlistList";
import { useWishlist } from "@/hooks/useWishlist";
import "@/app/wishlist/wishlist.css";

export default function WishlistPage() {
  const { books, removeBook, moveToExchange, shareBook } = useWishlist();

  return (
    <section className="wishlist-page flex flex-col items-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
        Wishlist
      </h1>
      <WishlistList
        books={books}
        onRemove={removeBook}
        onMove={moveToExchange}
        onShare={shareBook}
      />
    </section>
  );
}
