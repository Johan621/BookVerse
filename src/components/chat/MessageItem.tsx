// src/components/chat/MessageItem.tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  from: "me" | "them";
  content: string;
  timestamp: string;
  read: boolean;
  imageUrl?: string;
}

export const MessageItem: React.FC<{ message: Message }> = ({ message }) => {
  const isMe = message.from === "me";
  return (
    <div className={cn(
      "flex w-full",
      isMe ? "justify-end" : "justify-start"
    )}>
      <div
        className={cn(
          "max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl",
          isMe
            ? "bg-primary/20 text-primary"
            : "bg-white/5 text-foreground"
        )}
      >
        {message.imageUrl && (
          <img src={message.imageUrl} alt="attachment" className="mb-2 max-h-40 rounded" />
        )}
        <p className="break-words">{message.content}</p>
        <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
          <span>{new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          {isMe && (
            <span className={cn(
              "ml-2",
              message.read ? "text-blue-400" : "text-muted-foreground"
            )}>
              {/* read receipt icons */}
              {message.read ? "✓✓" : "✓"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
