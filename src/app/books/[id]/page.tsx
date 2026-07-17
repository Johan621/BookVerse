import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { BookMarked } from "lucide-react";

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  return (
    <ConstructionPlaceholder
      title="Book Details"
      icon={<BookMarked className="w-12 h-12 text-primary" />}
      breadcrumbs={[
        { label: "Books", href: "/books" },
        { label: "Details", href: `/books/${params.id}` },
      ]}
      description="The detailed view for this book is currently under construction. Check back soon for full previews, AI insights, and exchange options."
    />
  );
}
