import * as React from "react";
import { format, isValid } from "date-fns";
import { BookOpen, Clock, CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import type { ExchangeCardProps } from "@/types/exchange";

export type ExchangeStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "COMPLETED" | "CANCELLED";

const statusConfig: Record<ExchangeStatus, { color: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string }> = {
  PENDING: { color: "text-amber-500 bg-amber-500/10 border-amber-500/20", icon: Clock, label: "Pending" },
  ACCEPTED: { color: "text-blue-400 bg-blue-500/10 border-blue-500/20", icon: CheckCircle2, label: "Accepted" },
  COMPLETED: { color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", icon: CheckCircle2, label: "Completed" },
  REJECTED: { color: "text-red-400 bg-red-500/10 border-red-500/20", icon: XCircle, label: "Rejected" },
  CANCELLED: { color: "text-gray-400 bg-gray-500/10 border-gray-500/20", icon: XCircle, label: "Cancelled" },
};

const safelyFormatDate = (dateVal: string | Date | null | undefined): string => {
  if (!dateVal) return "Unknown date";
  const d = typeof dateVal === "string" ? new Date(dateVal) : dateVal;
  if (isValid(d)) {
    return format(d, 'MMM d, yyyy');
  }
  // If parsing failed but it was a non-empty string like "Today", return that as fallback
  if (typeof dateVal === "string" && dateVal.trim() !== "") {
    return dateVal;
  }
  return "Unknown date";
};

export const ExchangeCard = ({ id, type, status, requestedBook, offeredBook, otherUser, date }: ExchangeCardProps) => {
  const normalizedStatus = (status?.toUpperCase() as ExchangeStatus) || "PENDING";
  const config = statusConfig[normalizedStatus] || statusConfig.PENDING;
  const StatusIcon = config.icon;

  return (
    <FadeIn>
      <Link href={`/dashboard/exchanges/${id}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group gap-4">
          
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {type === "SENT" ? "You Requested" : "Requested from you"}
                </span>
                <span className="text-[10px] text-muted-foreground">• {safelyFormatDate(date)}</span>
              </div>
              <h3 className="font-bold text-foreground truncate group-hover:text-primary transition-colors">{requestedBook}</h3>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {type === "SENT" ? "Offering:" : "Offered:"} {offeredBook ? <span className="font-medium text-foreground/80">{offeredBook}</span> : "Direct Purchase"}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6 mt-2 sm:mt-0">
            <div className="flex flex-col items-start sm:items-end">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${config.color}`}>
                <StatusIcon className="w-3.5 h-3.5" />
                {config.label}
              </span>
              <span className="text-[10px] text-muted-foreground mt-1.5">
                {type === "SENT" ? "To:" : "From:"} <span className="font-medium text-foreground">{otherUser}</span>
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
          </div>

        </div>
      </Link>
    </FadeIn>
  );
};
