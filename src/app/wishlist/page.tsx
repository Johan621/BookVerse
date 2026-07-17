import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  return (
    <ConstructionPlaceholder
      title="Your Wishlist"
      icon={<Heart className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Wishlist", href: "/wishlist" }]}
      description="Your personalized wishlist is being built. Soon you'll be able to track books you want and receive AI recommendations."
    />
  );
}
