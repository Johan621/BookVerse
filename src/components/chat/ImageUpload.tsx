// src/components/chat/ImageUpload.tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
  onSelect: (file: File) => void
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onSelect }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onSelect(file)
    }
  }

  return (
    <div>
      <button
        type="button"
        className={cn("p-2 rounded-md hover:bg-white/10 transition-colors")}
        onClick={() => inputRef.current?.click()}
        aria-label="Upload image"
      >
        {/* Simple camera icon via emoji */}
        📷
      </button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
       aria-label="Input field" />
    </div>
  )
}
