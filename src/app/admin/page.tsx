import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { ShieldCheck } from "lucide-react";

export default function AdminPage() {
  return (
    <ConstructionPlaceholder
      title="Admin Dashboard"
      icon={<ShieldCheck className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Admin", href: "/admin" }]}
      description="Administrative tools are under construction. Soon you'll be able to manage users, monitor exchanges, and configure the platform."
    />
  );
}
