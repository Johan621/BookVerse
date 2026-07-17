"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export const NavLogo = () => {
  return (
    <Link href="/" className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
      <motion.div
        whileHover={{ rotate: 15, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"
      >
        <BookOpen className="h-5 w-5" />
      </motion.div>
      <span className="text-xl font-bold tracking-tight text-gradient">BookVerse</span>
    </Link>
  );
};
