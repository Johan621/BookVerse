"use client";

import * as React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BookCard, type BookStatus } from "@/components/dashboard/books/BookCard";
import { EmptyState } from "@/components/common/EmptyState";
import { BookOpen } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

// Mock Data
const MOCK_BOOKS = [
  {
    id: "b1",
    title: "Introduction to Algorithms, 3rd Edition",
    author: "Thomas H. Cormen",
    status: "PUBLISHED" as BookStatus,
    views: 124,
    condition: "Good",
  },
  {
    id: "b2",
    title: "Engineering Mathematics",
    author: "K.A. Stroud",
    status: "EXCHANGED" as BookStatus,
    views: 45,
    condition: "Fair",
  },
  {
    id: "b3",
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    status: "DRAFT" as BookStatus,
    views: 0,
    condition: "Like New",
  },
  {
    id: "b4",
    title: "Operating Systems",
    author: "Galvin",
    status: "SOLD" as BookStatus,
    views: 89,
    condition: "Poor",
  }
];

export default function BooksPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<"ALL" | BookStatus>("ALL");

  React.useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredBooks = React.useMemo(() => {
    if (filter === "ALL") return MOCK_BOOKS;
    return MOCK_BOOKS.filter(b => b.status === filter);
  }, [filter]);

  return (
    <div className="space-y-6 lg:space-y-8 pb-8">
      
      {/* Header */}
      <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">My Books</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage the books you&apos;ve listed for exchange or sale.</p>
        </div>
        <Link href="/dashboard/books/add">
          <Button variant="primary" className="w-full sm:w-auto font-bold h-11">
            <Plus className="w-4 h-4 mr-2" /> Add New Book
          </Button>
        </Link>
      </FadeIn>

      {/* Filters */}
      {!isLoading && (
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {(
              ["ALL", "PUBLISHED", "DRAFT", "EXCHANGED", "SOLD", "DONATION"] as const
            ).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
                  filter === status
                    ? "bg-primary/20 text-primary border-primary/30"
                    : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10"
                }`}
              >
                {status.charAt(0) + status.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
             <div key={i} className="h-64 animate-pulse rounded-2xl bg-white/5 border border-white/10" />
          ))}
        </div>
      ) : filteredBooks.length === 0 ? (
        <FadeIn delay={0.2} className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-12">
          <EmptyState 
            icon={BookOpen}
            title={filter === "ALL" ? "You haven't listed any books yet" : `No books found with status: ${filter.toLowerCase()}`}
            description={filter === "ALL" ? "Start building your digital library to exchange with other students." : "Try changing the filter to see other books."}
            action={filter === "ALL" ? <Link href="/dashboard/books/new"><Button variant="primary">Add Your First Book</Button></Link> : undefined}
          />
        </FadeIn>
      ) : (
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </FadeIn>
      )}

    </div>
  );
}
