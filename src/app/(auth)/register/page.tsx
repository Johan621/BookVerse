import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { UserCheck } from "lucide-react";

export default function RegisterPage() {
  return (
    <ConstructionPlaceholder
      title="Register"
      icon={<UserCheck className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Register", href: "/register" }]}
      description="Create your BookVerse AI account. This page is under construction and will soon provide a seamless sign‑up experience."
    />
  );
}
