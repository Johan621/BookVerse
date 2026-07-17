import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { UserCircle2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <ConstructionPlaceholder
      title="User Profile"
      icon={<UserCircle2 className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Profile", href: "/profile" }]}
      description="Your profile page is being built! Soon you'll be able to view your badges, reviews, and listed books here."
    />
  );
}
