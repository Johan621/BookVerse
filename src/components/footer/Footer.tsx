"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import {
  BookOpen, Globe, MessageSquare, Share2, 
  Mail, ArrowRight 
} from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-background overflow-hidden z-20">
      
      {/* Animated Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <motion.div
        className="absolute top-0 left-0 h-[2px] w-1/4 bg-primary blur-[1px]"
        animate={{
          x: ["-100%", "400%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl pointer-events-none" />

      <Container className="relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg group-hover:scale-105 transition-transform">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                BookVerse<span className="text-primary">AI</span>
              </span>
            </Link>
            
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              The smartest platform for students to exchange books, save money, and share knowledge across campuses worldwide.
            </p>

            <div className="mt-4">
              <h4 className="font-bold text-foreground mb-3 text-sm">Subscribe to our newsletter</h4>
              <div className="flex items-center gap-2 max-w-sm relative">
                <input 
                  type="email" 
                  placeholder="Enter your college email" 
                  className="w-full h-11 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground"
                 aria-label="Input field" />
                <Button onClick={() => toast.info("Coming soon!")} size="icon" className="absolute right-1 top-1 bottom-1 h-9 w-9 bg-primary hover:bg-primary/90 text-white">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground text-sm tracking-wider uppercase">Platform</h4>
            <ul className="flex flex-col gap-3">
              {['Explore Books', 'How It Works', 'AI Features', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground text-sm tracking-wider uppercase">Resources</h4>
            <ul className="flex flex-col gap-3">
              {['Help Center', 'Safety Guide', 'Campus Reps', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground text-sm tracking-wider uppercase">Connect</h4>
            <div className="flex items-center gap-4 mb-4">
              <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-colors border-white/10">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-colors border-white/10">
                <MessageSquare className="w-4 h-4" />
              </Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-colors border-white/10">
                <Share2 className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">support@bookverse.ai</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year || "2026"} BookVerse AI. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon!"); }} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </Container>
    </footer>
  );
};
