"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BookCard } from "@/components/dashboard/books/BookCard";
import { Heart, Bookmark, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "sonner";

// Placeholder image for missing mock images
const PLACEHOLDER_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// Mock data for demonstration
export const mockBooks = {
  "1": {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A classic novel about the American Dream, love, and tragedy set in the Roaring Twenties.",
    coverUrl: PLACEHOLDER_IMAGE,
    images: [
      PLACEHOLDER_IMAGE,
      PLACEHOLDER_IMAGE,
      PLACEHOLDER_IMAGE,
    ],
    owner: {
      name: "Alice Johnson",
      avatarUrl: PLACEHOLDER_IMAGE,
    },
    reviews: [
      { user: "Bob", rating: 5, comment: "A timeless masterpiece!" },
      { user: "Cara", rating: 4, comment: "Beautiful writing, love the characters." },
    ],
    related: [
      {
        id: "2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        status: "PUBLISHED",
        views: 1520,
        condition: "Good",
      },
      {
        id: "3",
        title: "1984",
        author: "George Orwell",
        status: "PUBLISHED",
        views: 980,
        condition: "Very Good",
      },
    ],
  },
};

type Review = {
  user: string;
  rating: number;
  comment: string;
};

export default function BookDetailsPage({ id }: { id: string }) {
  const router = useRouter();
  const book = mockBooks[id as keyof typeof mockBooks];

  const [isWishlisted, setWishlisted] = React.useState(false);
  const [isBookmarked, setBookmarked] = React.useState(false);

  if (!book) {
    return (
      <div className="flex items-center justify-center min-min-h-screen">
        <p className="text-muted-foreground">Book not found.</p>
        <Button className="ml-4" onClick={() => router.back()}>
          Go Back
        </Button>
      </div>
    );
  }
  return (
    <motion.div
      className="container mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gallery */}
        <div className="space-y-4">
          <Image
            src={book.coverUrl}
            alt={book.title}
            width={400}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-lg"
          />
          <div className="grid grid-cols-3 gap-2">
            {book.images.map((src: string, idx: number) => (
              <Image
                key={idx}
                src={src}
                alt={`${book.title} image ${idx + 1}`}
                width={120}
                height={180}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        {/* Info and Actions */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            {book.title}
          </h1>
          <p className="text-xl text-muted-foreground">by {book.author}</p>
          <p className="text-foreground/80">{book.description}</p>

          {/* Owner Card */}
          <div className="flex items-center gap-4 p-4 bg-background/30 rounded-xl glass-heavy">
            <Image
              src={book.owner.avatarUrl}
              alt={book.owner.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-foreground">{book.owner.name}</p>
              <p className="text-sm text-muted-foreground">Owner</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              className="flex items-center gap-2"
              onClick={() => toast.info("Exchange flow (mock) triggered")}
            >
              <ArrowRight className="w-4 h-4" /> Exchange
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => toast.info("Chat flow (mock) triggered")}
            >
              <MessageSquare className="w-4 h-4" /> Chat
            </Button>
            <Button
              variant={isWishlisted ? "secondary" : "ghost"}
              className="flex items-center gap-2"
              onClick={() => setWishlisted(!isWishlisted)}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "text-primary" : ""}`} />
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </Button>
            <Button
              variant={isBookmarked ? "secondary" : "ghost"}
              className="flex items-center gap-2"
              onClick={() => setBookmarked(!isBookmarked)}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "text-primary" : ""}`} />
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Reviews</h2>
        <div className="space-y-4">
          {book.reviews.map((rev: Review, i: number) => (
            <div key={i} className="p-4 bg-background/30 rounded-lg glass-heavy">
              <p className="font-medium text-foreground">{rev.user}</p>
              <p className="text-sm text-muted-foreground">Rating: {rev.rating}/5</p>
              <p className="mt-2 text-foreground/80">{rev.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Books */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Related Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {book.related.map((rel: typeof book.related[0]) => (
            <Link key={rel.id} href={`/books/${rel.id}`}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <BookCard {...rel} status={rel.status as any} />
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

