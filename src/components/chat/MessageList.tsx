// src/components/chat/MessageList.tsx
"use client"

import * as React from "react"
import { MessageItem } from "@/components/chat/MessageItem"

interface Message {
  id: string
  from: "me" | "them"
  content: string
  timestamp: string
  read: boolean
  imageUrl?: string
}

interface MessageListProps {
  messages: Message[]
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const listRef = React.useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={listRef}
      className="flex-1 overflow-y-auto space-y-4 p-4"
    >
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </div>
  )
}
