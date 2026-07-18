// src/components/chat/ChatSidebar.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Conversation } from "@/types/chat";

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
            <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden shrink-0">
              <Image src={conv.avatar} alt={conv.name} fill sizes="40px" className="object-cover" />
            </div>
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
