"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Check, X, Eye, ShieldAlert, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

const MOCK_QUEUE = [
  { id: "q1", type: "NEW_LISTING", itemTitle: "Organic Chemistry 8th Ed", user: "Sam Smith", flaggedFor: "System Check", submittedAt: "10 mins ago" },
  { id: "q2", type: "FLAGGED_USER", itemTitle: "User Profile: John Doe", user: "John Doe", flaggedFor: "Multiple spam reports", submittedAt: "1 hour ago" },
  { id: "q3", type: "FLAGGED_LISTING", itemTitle: "Free Textbooks Link", user: "SpamBot99", flaggedFor: "Suspected phishing link", submittedAt: "3 hours ago" },
];

export default function AdminModerationPage() {
  const [queue, setQueue] = React.useState(MOCK_QUEUE);

  const handleAction = (id: string, action: string) => {
    toast.success(`${action} applied. Removed from queue.`);
    setQueue(queue.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-6 pb-12">
      
      <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Moderation Queue</h1>
          <p className="text-muted-foreground text-sm mt-1">Review flagged items and new submissions requiring approval.</p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/20 text-amber-500 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2">
          <ShieldAlert className="w-4 h-4" /> {queue.length} Pending
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-4 mt-8">
        {queue.length === 0 ? (
          <FadeIn className="p-12 text-center border border-white/10 rounded-2xl bg-white/5">
            <Check className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Queue is Empty</h3>
            <p className="text-muted-foreground mt-2">Great job! You're all caught up.</p>
          </FadeIn>
        ) : (
          queue.map((item, idx) => (
            <FadeIn key={item.id} delay={0.1 * idx}>
              <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                
                <div className="flex gap-4 items-start">
                  <div className={`mt-1 p-2 rounded-lg ${
                    item.type === "NEW_LISTING" ? "bg-blue-500/10 text-blue-400" : "bg-red-500/10 text-red-400"
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{item.itemTitle}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Submitted by: <span className="font-medium text-foreground">{item.user}</span> • {item.submittedAt}</p>
                    <div className="mt-2 text-xs bg-white/10 inline-block px-2 py-1 rounded">
                      Reason: <span className="font-semibold text-purple-300">{item.flaggedFor}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                    <Eye className="w-4 h-4 mr-1.5" /> Review Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 md:flex-none bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20" onClick={() => handleAction(item.id, "Approve")}>
                    <Check className="w-4 h-4 mr-1.5" /> Approve
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 md:flex-none bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20" onClick={() => handleAction(item.id, "Reject")}>
                    <X className="w-4 h-4 mr-1.5" /> Reject
                  </Button>
                </div>

              </div>
            </FadeIn>
          ))
        )}
      </div>

    </div>
  );
}
