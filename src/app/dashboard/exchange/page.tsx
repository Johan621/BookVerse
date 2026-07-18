// src/app/dashboard/exchange/page.tsx
"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ExchangeRequest } from "@/types/exchange";

// Mock data for exchange requests
const MOCK_EXCHANGES: ExchangeRequest[] = [
  {
    id: "e1",
    direction: "Incoming",
    status: "Pending",
    title: "Calculus Textbook – John Doe",
    pickupDate: "2026-08-10",
    pickupLocation: "Campus Library",
    timeline: [
      { date: "2026-07-20", description: "Request sent" },
      { date: "2026-07-22", description: "Seller responded" },
    ],
  },
  {
    id: "e2",
    direction: "Outgoing",
    status: "Accepted",
    title: "Data Structures – Jane Smith",
    pickupDate: "2026-08-12",
    pickupLocation: "Student Hall A",
    timeline: [
      { date: "2026-07-18", description: "Request created" },
      { date: "2026-07-19", description: "Buyer accepted" },
    ],
  },
  {
    id: "e3",
    direction: "Incoming",
    status: "Rejected",
    title: "Discrete Math – Alex Lee",
    pickupDate: "2026-08-05",
    pickupLocation: "Dept. Office",
    timeline: [
      { date: "2026-07-15", description: "Request sent" },
      { date: "2026-07-16", description: "Seller rejected" },
    ],
  },
  {
    id: "e4",
    direction: "Outgoing",
    status: "Completed",
    title: "Clean Code – Maria Garcia",
    pickupDate: "2026-07-30",
    pickupLocation: "Main Hall",
    timeline: [
      { date: "2026-07-10", description: "Request created" },
      { date: "2026-07-12", description: "Buyer completed" },
    ],
  },
];

export default function ExchangePage() {
  const [filter, setFilter] = React.useState<"All" | "Incoming" | "Outgoing">("All");

  const filtered = MOCK_EXCHANGES.filter((req) => {
    if (filter === "All") return true;
    return req.direction === filter;
  });

  return (
    <section className="flex flex-col items-center min-h-screen p-8">
      <FadeIn className="w-full max-w-5xl space-y-8">
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
          Exchange Module
        </h1>
        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          {["All", "Incoming", "Outgoing"].map((type) => (
            <Button
              key={type}
              variant={filter === type ? "primary" : "ghost"}
              onClick={() => setFilter(type as any)}
            >
              {type}
            </Button>
          ))}
        </div>
        {/* Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((req) => (
            <Card key={req.id} className="glass p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{req.title}</h2>
                <span
                  className={`px-2 py-0.5 rounded text-sm font-medium ${
                    req.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : req.status === "Accepted"
                      ? "bg-green-500/20 text-green-300"
                      : req.status === "Rejected"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {req.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Pickup:</strong> {req.pickupDate} – {req.pickupLocation}
              </p>
              {/* Timeline */}
              <div className="border-t border-white/10 pt-2 mt-2">
                {req.timeline?.map((ev, idx) => (
                  <div key={idx} className="flex items-center mb-1">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span className="text-xs text-muted-foreground">{ev.date}: {ev.description}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
