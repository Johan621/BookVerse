import { ConstructionPlaceholder } from "@/components/common/ConstructionPlaceholder";
import { RefreshCcw } from "lucide-react";

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
