// src/components/chat/MessageItem.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  from: "me" | "them";
  content: string;
  timestamp: string;
  read: boolean;
  imageUrl?: string;
}

export const MessageItem: React.FC<{ message: Message }> = React.memo(({ message }) => {
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
          <div className="relative mb-2 w-full max-w-sm h-40 rounded overflow-hidden">
            <Image src={message.imageUrl} alt="attachment" fill sizes="(max-width: 768px) 100vw, 384px" className="object-cover" />
          </div>
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
});

MessageItem.displayName = "MessageItem";
