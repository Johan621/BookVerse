import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { BookOpen } from "lucide-react";

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
