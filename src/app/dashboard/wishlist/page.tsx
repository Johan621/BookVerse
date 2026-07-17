import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  return (
    <ConstructionPlaceholder
      title="Your Wishlist"
      icon={<Heart className="w-12 h-12 text-primary" />}
      description="Keep track of books you want to read. You'll be notified when they become available."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Wishlist", href: "/dashboard/wishlist" }
      ]}
    />
  );
}
