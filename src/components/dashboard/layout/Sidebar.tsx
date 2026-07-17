"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Search, 
  BookOpen, 
  Repeat, 
  Heart, 
  MessageSquare, 
  Settings,
  LogOut,
  Sparkles
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Discover", href: "/dashboard/discover", icon: Search },
  { name: "AI Recommendations", href: "/dashboard/recommendations", icon: Sparkles },
  { name: "My Books", href: "/dashboard/books", icon: BookOpen },
  { name: "Exchanges", href: "/dashboard/exchanges", icon: Repeat },
  { name: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-white/10 bg-background/50 backdrop-blur-xl z-30">
      <FadeIn className="h-full flex flex-col">
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg tracking-tight">BookVerse AI</span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-inner">
              JD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@college.edu</p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </FadeIn>
    </aside>
  );
};
