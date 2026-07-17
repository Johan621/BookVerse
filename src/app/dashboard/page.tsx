import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <ConstructionPlaceholder
      title="Student Dashboard"
      icon={<LayoutDashboard className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}
      description="We are building a comprehensive dashboard for you to manage your listings, settings, and badges. Stay tuned!"
    />
  );
}
