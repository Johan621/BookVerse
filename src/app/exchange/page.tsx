import { Metadata } from "next";
import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { RefreshCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Exchange Center",
  description: "Propose and manage your book exchanges in a secure, AI-monitored environment.",
  alternates: {
    canonical: "/exchange",
  }
};

export default function ExchangePage() {
  return (
    <ConstructionPlaceholder
      title="Exchange Center"
      icon={<RefreshCcw className="w-12 h-12 text-primary" />}
      breadcrumbs={[{ label: "Exchange", href: "/exchange" }]}
      description="The global exchange network is currently undergoing an upgrade to bring you a smoother and safer swapping experience."
    />
  );
}
