import { BookForm } from "@/components/dashboard/books/BookForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Book - Havnark",
  description: "Edit your book listing.",
};

export default function EditBookPage({ }: { params: { id: string } }) {
  // In a real app, fetch book data based on params.id
  // Mock data for demonstration:
  const mockInitialData = {
    title: "Introduction to Algorithms, 3rd Edition",
    author: "Thomas H. Cormen",
    isbn: "978-0262033848",
    description: "Used for 1 semester. Very few highlights. The binding is completely intact and it includes the online access code which hasn't been scratched.",
    condition: "GOOD" as const,
    category: "cs",
    price: "",
  };

  return (
    <div className="max-w-4xl mx-auto pb-8">
      <FadeIn className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Edit Book</h1>
        <p className="text-muted-foreground text-sm mt-1">Update your book details or images.</p>
      </FadeIn>
      
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-full max-w-[500px] min-h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <BookForm initialData={mockInitialData} isEditing={true} />
        </div>
      </div>
    </div>
  );
}
