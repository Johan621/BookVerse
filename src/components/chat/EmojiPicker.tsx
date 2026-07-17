// src/components/chat/EmojiPicker.tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface EmojiPickerProps {
  onSelect: (emoji: string) => void
  onClose: () => void
}

const EMOJIS = ["😀","😃","😄","😁","😂","🥰","😍","🤔","👍","❤️"]

export const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelect, onClose }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  // Close when clicking outside
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [onClose])

  return (
    <div
      ref={ref}
      className={cn(
        "absolute bottom-12 left-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-2",
        "shadow-lg"
      )}
    >
      <div className="grid grid-cols-5 gap-1">
        {EMOJIS.map((e) => (
          <button
            key={e}
            type="button"
            className="text-xl hover:scale-110 transition-transform"
            onClick={() => {
              onSelect(e)
              onClose()
            }}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  )
}
