import { BookForm } from "@/components/dashboard/books/BookForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Book - BookVerse AI",
  description: "List a new book for exchange or sale.",
};

export default function AddBookPage() {
  return (
    <div className="max-w-4xl mx-auto pb-8">
      <FadeIn className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Add New Book</h1>
        <p className="text-muted-foreground text-sm mt-1">List a book to exchange with other students.</p>
      </FadeIn>
      
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-full max-w-[500px] min-h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <BookForm />
        </div>
      </div>
    </div>
  );
}
