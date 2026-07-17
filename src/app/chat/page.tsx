// src/app/chat/page.tsx
"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { ChatMain } from "@/components/chat/ChatMain";
import { MOCK_CONVERSATIONS, MOCK_MESSAGES } from "@/components/chat/mockData";

export default function ChatPage() {
  const [selectedId, setSelectedId] = React.useState<string>(MOCK_CONVERSATIONS[0].id);

  const handleSelect = (id: string) => setSelectedId(id);

  const messages = MOCK_MESSAGES[selectedId] ?? [];

  return (
    <section className="flex min-h-screen bg-gradient-to-br from-primary/10 via-background to-background p-6">
      <FadeIn className="flex w-full max-w-7xl mx-auto space-x-6">
        <Card variant="glass" padding="lg" className="w-80 flex flex-col">
          <ChatSidebar
            conversations={MOCK_CONVERSATIONS}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
        </Card>
        <Card variant="glass" padding="lg" className="flex-1 flex flex-col">
          <ChatMain messages={messages} />
        </Card>
      </FadeIn>
    </section>
  );
}
