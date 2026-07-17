import * as React from "react";
import { Repeat, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "./EmptyStates";
import { toast } from "sonner";

const MOCK_EXCHANGES = [
  {
    id: "e1",
    bookTitle: "Introduction to Algorithms",
    user: "Alex Johnson",
    status: "pending",
    date: "2 hours ago",
  },
  {
    id: "e2",
    bookTitle: "Engineering Mathematics",
    user: "Sarah Smith",
    status: "completed",
    date: "Yesterday",
  },
];

export const RecentExchanges = () => {
  if (MOCK_EXCHANGES.length === 0) {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-full">
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold">Recent Exchanges</h3>
        </div>
        <EmptyState 
          icon={Repeat}
          title="No exchanges yet"
          description="Start exploring and request a book to see your active exchanges here."
          actionLabel="Find Books"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-bold">Recent Exchanges</h3>
        <Button onClick={() => toast.info("Coming soon!")} variant="ghost" size="sm" className="h-8 text-xs">
          View All
        </Button>
      </div>
      
      <div className="flex-1 p-0 overflow-y-auto">
        <ul className="divide-y divide-white/5">
          {MOCK_EXCHANGES.map((exchange) => (
            <li key={exchange.id} className="p-5 hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground truncate">{exchange.bookTitle}</p>
                  <p className="text-xs text-muted-foreground mt-1 truncate">with {exchange.user} • {exchange.date}</p>
                </div>
                <div className="ml-4 shrink-0 flex items-center">
                  {exchange.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <Clock className="w-3.5 h-3.5" />
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
