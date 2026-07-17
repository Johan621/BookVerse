import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { Key } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <ConstructionPlaceholder
      title="Forgot Password"
      icon={<Key className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Forgot Password", href: "/forgot-password" }]}
      description="Reset your password. This page is under construction and will soon allow you to securely recover access to your account."
    />
  );
}
