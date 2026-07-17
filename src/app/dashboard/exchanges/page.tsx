"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ExchangeCard, type ExchangeStatus } from "@/components/dashboard/exchanges/ExchangeCard";
import { EmptyState } from "@/components/dashboard/widgets/EmptyStates";
import { Repeat } from "lucide-react";

const MOCK_SENT_EXCHANGES = [
  { id: "e1", type: "SENT" as const, status: "PENDING" as ExchangeStatus, requestedBook: "Introduction to Algorithms", offeredBook: "Database Systems", otherUser: "Alex J.", date: "Today" },
  { id: "e2", type: "SENT" as const, status: "ACCEPTED" as ExchangeStatus, requestedBook: "Engineering Mathematics", offeredBook: undefined, otherUser: "Priya K.", date: "Yesterday" },
  { id: "e3", type: "SENT" as const, status: "COMPLETED" as ExchangeStatus, requestedBook: "Physics Vol 2", offeredBook: "Chemistry Vol 1", otherUser: "Rahul M.", date: "Oct 12" },
];

const MOCK_RECEIVED_EXCHANGES = [
  { id: "e4", type: "RECEIVED" as const, status: "PENDING" as ExchangeStatus, requestedBook: "Operating Systems", offeredBook: "Computer Networks", otherUser: "Sam S.", date: "2 hours ago" },
];

export default function ExchangesHubPage() {
  const [activeTab, setActiveTab] = React.useState<"SENT" | "RECEIVED">("SENT");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const activeData = activeTab === "SENT" ? MOCK_SENT_EXCHANGES : MOCK_RECEIVED_EXCHANGES;

  return (
    <div className="space-y-6 lg:space-y-8 pb-8">
      
      {/* Header */}
      <FadeIn>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Exchanges</h1>
        <p className="text-muted-foreground text-sm mt-1">Track and manage your book exchange requests.</p>
      </FadeIn>

      {/* Tabs */}
      <FadeIn delay={0.1}>
        <div className="flex items-center gap-4 border-b border-white/10 pb-px">
          <button
            onClick={() => setActiveTab("SENT")}
            className={`pb-3 text-sm font-semibold transition-colors relative ${
              activeTab === "SENT" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Requests Sent
            {activeTab === "SENT" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("RECEIVED")}
            className={`pb-3 text-sm font-semibold transition-colors relative flex items-center gap-2 ${
              activeTab === "RECEIVED" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Requests Received
            <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">1</span>
            {activeTab === "RECEIVED" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        </div>
      </FadeIn>

      {/* List */}
      <div className="min-h-[400px]">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 animate-pulse rounded-2xl bg-white/5 border border-white/10" />
            ))}
          </div>
        ) : activeData.length === 0 ? (
          <FadeIn delay={0.2} className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-12">
            <EmptyState 
              icon={Repeat}
              title={`No requests ${activeTab.toLowerCase()}`}
              description={activeTab === "SENT" ? "You haven't requested any books yet." : "You haven't received any requests for your books."}
            />
          </FadeIn>
        ) : (
          <div className="space-y-4">
            {activeData.map((exchange, idx) => (
              <div key={exchange.id} style={{ animationDelay: `${idx * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-4">
                <ExchangeCard {...exchange} />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
