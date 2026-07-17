"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const RevealText = ({ text, className, delay = 0 }: RevealTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex flex-wrap overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <motion.span
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variants={child as unknown as any}
          className="mr-[0.25em] inline-block"
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
