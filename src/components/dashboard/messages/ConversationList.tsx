import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import type { Conversation } from "@/types/chat";


interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  className?: string;
}

export const ConversationList = ({ conversations, activeId, onSelect, className = "" }: ConversationListProps) => {
  const [search, setSearch] = React.useState("");

  const filtered = conversations.filter(c => 
    (c.user?.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`flex flex-col h-full bg-white/5 border-r border-white/10 ${className}`}>
      
      {/* Header & Search */}
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search conversations..." 
            className="pl-9 bg-white/5 border-white/10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">
            No conversations found.
          </div>
        ) : (
          filtered.map(conv => (
            <button
              key={conv.id}
              onClick={() => onSelect(conv.id)}
              className={`w-full flex items-center gap-3 p-4 border-b border-white/5 transition-all text-left ${
                activeId === conv.id 
                  ? "bg-primary/20 hover:bg-primary/30" 
                  : "hover:bg-white/5"
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-inner">
                  {conv.user?.avatar}
                </div>
                {conv.user?.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-background rounded-full" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className={`font-bold truncate ${activeId === conv.id ? "text-primary" : "text-foreground"}`}>
                    {conv.user?.name}
                  </h4>
                  <span className={`text-xs shrink-0 ml-2 ${(conv.unreadCount || 0) > 0 ? "text-primary font-bold" : "text-muted-foreground"}`}>
                    {conv.timestamp}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className={`text-sm truncate ${(conv.unreadCount || 0) > 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {conv.lastMessage}
                  </p>
                  {(conv.unreadCount || 0) > 0 && (
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                      {conv.unreadCount || 0}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))
        )}
      </div>

    </div>
  );
};
