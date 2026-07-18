import { Metadata } from "next";
import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Browse Books",
  description: "Browse our massive library of textbooks and fiction available for exchange and purchase.",
  alternates: {
    canonical: "/books",
  }
};

export default function BooksPage() {
  return (
    <ConstructionPlaceholder
      title="Browse Books"
      icon={<BookOpen className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Books", href: "/books" }]}
      description="The global library is currently being assembled. Stay tuned for thousands of textbooks."
    />
  );
}
