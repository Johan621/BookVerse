// src/components/chat/ChatMain.tsx
"use client";

import * as React from "react";
import { MessageList } from "@/components/chat/MessageList";
import { ChatInput } from "@/components/chat/ChatInput";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import type { Message } from "@/types/chat";

interface ChatMainProps {
  messages: Message[];
}

export const ChatMain: React.FC<ChatMainProps> = ({ messages }) => {
  const [typing, setTyping] = React.useState(false);

  // Simulate typing indicator when a new message is sent (placeholder logic)
   
  const handleSend = (_text: string) => {
    setTyping(true);
    setTimeout(() => setTyping(false), 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <MessageList messages={messages} />
      {typing && <TypingIndicator />}
      <ChatInput onSend={handleSend} />
    </div>
  );
};
