// src/components/chat/ChatInput.tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { EmojiPicker } from "@/components/chat/EmojiPicker"
import { ImageUpload } from "@/components/chat/ImageUpload"

interface ChatInputProps {
  onSend: (text: string) => void
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [text, setText] = React.useState("")
  const [showEmoji, setShowEmoji] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    onSend(text.trim())
    setText("")
    setShowEmoji(false)
  }

  const handleEmojiSelect = (emoji: string) => {
    setText((prev) => prev + emoji)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4 border-t border-white/10">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Type a message…"
          className={cn(
            "w-full rounded-full border border-white/20 bg-white/5 py-2 pl-4 pr-12 text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
            "placeholder:text-muted-foreground"
          )}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* Emoji button */}
        <button
          type="button"
          className={cn(
            "absolute right-10 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
            "transition-colors"
          )}
          onClick={() => setShowEmoji((prev) => !prev)}
          aria-label="Add emoji"
        >
          😊
        </button>
        {/* Image upload button */}
        <ImageUpload onSelect={(file) => console.log("image selected", file)} />
        {showEmoji && (
          <EmojiPicker onSelect={handleEmojiSelect} onClose={() => setShowEmoji(false)} />
        )}
      </div>
      <Button type="submit" variant="primary" className="ml-2">
        Send
      </Button>
    </form>
  )
}
