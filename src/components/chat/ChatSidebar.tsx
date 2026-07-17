// src/components/chat/ChatSidebar.tsx
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  unread: number;
}

interface ChatSidebarProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ conversations, selectedId, onSelect }) => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
        Conversations
      </h2>
      <ul className="flex-1 overflow-y-auto space-y-2">
        {conversations.map((conv) => (
          <li
            key={conv.id}
            className={cn(
              "flex items-center p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors",
              selectedId === conv.id && "bg-white/20"
            )}
            onClick={() => onSelect(conv.id)}
          >
            <img src={conv.avatar} alt={conv.name} className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{conv.name}</p>
              <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
            </div>
            {conv.unread > 0 && (
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                {conv.unread}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
