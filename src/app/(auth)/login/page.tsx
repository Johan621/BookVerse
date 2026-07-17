import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { Key } from "lucide-react";

export default function LoginPage() {
  return (
    <ConstructionPlaceholder
      title="Login"
      icon={<Key className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Login", href: "/login" }]}
      description="Sign in to access your BookVerse AI account. This page is under construction and will soon feature a secure authentication flow."
    />
  );
}
