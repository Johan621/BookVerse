"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StatusTracker } from "@/components/dashboard/exchanges/StatusTracker";
import { ExchangeTimeline } from "@/components/dashboard/exchanges/ExchangeTimeline";
import { PickupDetails } from "@/components/dashboard/exchanges/PickupDetails";
import { Button } from "@/components/ui/Button";
import { BookOpen, Repeat, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { type ExchangeStatus } from "@/components/dashboard/exchanges/ExchangeCard";

// Mock Data
const MOCK_EXCHANGE = {
  id: "e123",
  type: "RECEIVED" as "RECEIVED" | "SENT", // This user received the request
  status: "ACCEPTED" as ExchangeStatus,
  requestedBook: {
    title: "Operating Systems",
    author: "Galvin"
  },
  offeredBook: {
    title: "Computer Networks",
    author: "Tanenbaum"
  },
  otherUser: {
    name: "Alex Johnson",
    college: "State University"
  },
  timeline: [
    { id: "t1", type: "REQUESTED" as const, title: "Request Received", description: "Alex requested your Operating Systems book.", timestamp: "Oct 12, 10:00 AM" },
    { id: "t2", type: "MESSAGE" as const, title: "Message Received", description: '"Hey! Would you trade for Computer Networks?"', timestamp: "Oct 12, 10:05 AM" },
    { id: "t3", type: "ACCEPTED" as const, title: "Request Accepted", description: "You accepted the exchange request.", timestamp: "Oct 12, 2:30 PM" }
  ],
  pickup: {
    location: "Library Cafe, Main Entrance",
    date: "Oct 15, 2024",
    time: "02:00 PM"
  }
};

export default function ExchangeDetailsPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = React.useState<ExchangeStatus>(MOCK_EXCHANGE.status);

  const handleAction = (action: "ACCEPT" | "REJECT" | "CANCEL" | "COMPLETE") => {
    toast.success(`Exchange ${action.toLowerCase()}ed successfully! (Mock)`);
    if (action === "ACCEPT") setStatus("ACCEPTED");
    if (action === "REJECT") setStatus("REJECTED");
    if (action === "CANCEL") setStatus("CANCELLED");
    if (action === "COMPLETE") setStatus("COMPLETED");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 pb-12">
      
      {/* Header */}
      <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link href="/dashboard/exchanges" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-2">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Exchanges
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Exchange Details</h1>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <MessageSquare className="w-4 h-4 mr-2" /> Chat with {MOCK_EXCHANGE.otherUser.name.split(" ")[0]}
        </Button>
      </FadeIn>

      {/* Tracker */}
      <FadeIn delay={0.1}>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
          <StatusTracker currentStatus={status} />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Books & Actions */}
        <div className="lg:col-span-7 space-y-8">
          
          <FadeIn delay={0.2}>
            <h3 className="text-xl font-bold mb-4">Books in Exchange</h3>
            <div className="flex flex-col gap-4 relative">
              
              {/* Other User's Book (Or Cash) */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-16 rounded bg-white/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{MOCK_EXCHANGE.type === "RECEIVED" ? "They Offered" : "You Offered"}</span>
                  <h4 className="font-bold text-foreground mt-0.5">{MOCK_EXCHANGE.offeredBook.title}</h4>
                  <p className="text-sm text-muted-foreground">{MOCK_EXCHANGE.offeredBook.author}</p>
                </div>
              </div>

              {/* Exchange Icon */}
              <div className="absolute top-1/2 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-white/10 flex items-center justify-center z-20 shadow-lg">
                <Repeat className="w-4 h-4 text-primary" />
              </div>

              {/* Your Book */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-16 rounded bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{MOCK_EXCHANGE.type === "RECEIVED" ? "They Requested" : "You Requested"}</span>
                  <h4 className="font-bold text-foreground mt-0.5">{MOCK_EXCHANGE.requestedBook.title}</h4>
                  <p className="text-sm text-muted-foreground">{MOCK_EXCHANGE.requestedBook.author}</p>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Conditional Pickup Details */}
          {status === "ACCEPTED" && (
            <FadeIn delay={0.3}>
              <PickupDetails 
                location={MOCK_EXCHANGE.pickup.location}
                date={MOCK_EXCHANGE.pickup.date}
                time={MOCK_EXCHANGE.pickup.time}
                onComplete={() => handleAction("COMPLETE")}
              />
            </FadeIn>
          )}

          {/* Conditional Actions for Pending Received Requests */}
          {status === "PENDING" && MOCK_EXCHANGE.type === "RECEIVED" && (
            <FadeIn delay={0.3} className="flex gap-4">
              <Button variant="primary" className="flex-1 font-bold h-12" onClick={() => handleAction("ACCEPT")}>
                Accept Offer
              </Button>
              <Button variant="outline" className="flex-1 font-bold h-12 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20" onClick={() => handleAction("REJECT")}>
                Decline
              </Button>
            </FadeIn>
          )}
          
          {/* Conditional Cancel for Pending Sent Requests */}
          {status === "PENDING" && MOCK_EXCHANGE.type === "SENT" && (
            <FadeIn delay={0.3}>
              <Button variant="outline" className="w-full font-bold h-12 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20" onClick={() => handleAction("CANCEL")}>
                Cancel Request
              </Button>
            </FadeIn>
          )}

        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-5">
          <FadeIn delay={0.4} className="rounded-2xl bg-white/5 border border-white/10 p-6 h-full">
            <h3 className="text-xl font-bold mb-6">Activity Timeline</h3>
            <ExchangeTimeline events={MOCK_EXCHANGE.timeline} />
          </FadeIn>
        </div>

      </div>

    </div>
  );
}
