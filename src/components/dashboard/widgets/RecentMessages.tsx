import * as React from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "./EmptyStates";
import { toast } from "sonner";

const MOCK_MESSAGES = [
  {
    id: "m1",
    sender: "Rahul M.",
    avatar: "RM",
    color: "from-orange-500 to-red-500",
    message: "Hey, is the physics book still available?",
    time: "10 min ago",
    unread: true,
  },
  {
    id: "m2",
    sender: "Priya K.",
    avatar: "PK",
    color: "from-pink-500 to-rose-500",
    message: "Thanks for the exchange! The book is in great condition.",
    time: "2 hours ago",
    unread: false,
  },
];

export const RecentMessages = () => {
  if (MOCK_MESSAGES.length === 0) {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-full">
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold">Messages</h3>
        </div>
        <EmptyState 
          icon={MessageSquare}
          title="No messages"
          description="Your conversations regarding exchanges will appear here."
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-bold">Messages</h3>
        <Button onClick={() => toast.info("Coming soon!")} variant="ghost" size="sm" className="h-8 text-xs">
          Open Chat
        </Button>
      </div>
      
      <div className="flex-1 p-0 overflow-y-auto">
        <ul className="divide-y divide-white/5">
          {MOCK_MESSAGES.map((msg) => (
            <li key={msg.id} className="p-4 hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${msg.color} flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-inner`}>
                  {msg.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm truncate ${msg.unread ? 'font-bold text-foreground' : 'font-semibold text-muted-foreground'}`}>
                      {msg.sender}
                    </p>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">
                      {msg.time}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 line-clamp-1 ${msg.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {msg.message}
                  </p>
                </div>
                {msg.unread && (
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
