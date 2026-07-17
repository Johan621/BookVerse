// src/components/chat/TypingIndicator.tsx
"use client"

import * as React from "react"
import { motion } from "framer-motion"

export const TypingIndicator: React.FC = () => {
  const dotVariants = {
    bounce: {
      y: [0, -5, 0],
      transition: { repeat: Infinity, duration: 0.6, ease: "easeInOut" as const },
    },
  }
  return (
    <div className="flex items-center px-4 py-2">
      <motion.span
        className="w-2 h-2 rounded-full bg-muted-foreground mr-1"
        variants={dotVariants}
        animate="bounce"
        transition={{ delay: 0 }}
      />
      <motion.span
        className="w-2 h-2 rounded-full bg-muted-foreground mr-1"
        variants={dotVariants}
        animate="bounce"
        transition={{ delay: 0.2 }}
      />
      <motion.span
        className="w-2 h-2 rounded-full bg-muted-foreground"
        variants={dotVariants}
        animate="bounce"
        transition={{ delay: 0.4 }}
      />
    </div>
  )
}
