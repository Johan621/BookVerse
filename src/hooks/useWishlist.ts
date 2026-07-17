// src/hooks/useWishlist.ts
"use client";

import { useState, useCallback } from "react";
import { wishlistBooks, WishlistBookData } from "@/data/wishlistData";

export function useWishlist() {
  const [books, setBooks] = useState<WishlistBookData[]>(wishlistBooks);

  const removeBook = useCallback((id: string) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
    console.log(`Removed book ${id}`);
  }, []);

  const moveToExchange = useCallback((id: string) => {
    // For now just log and could navigate to /exchange with query param.
    console.log(`Move book ${id} to exchange`);
    // Example navigation (needs next/router or app router; using window.location for simplicity)
    window.location.href = `/exchange?bookId=${id}`;
  }, []);

  const shareBook = useCallback((id: string) => {
    const book = books.find((b) => b.id === id);
    if (!book) return;
    navigator.clipboard.writeText(`${book.title} by ${book.author}`);
    console.log(`Shared book ${id}`);
    // Optionally show toast - omitted for brevity.
  }, [books]);

  return { books, removeBook, moveToExchange, shareBook };
}
