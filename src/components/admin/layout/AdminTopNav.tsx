"use client";

import * as React from "react";
import { Search, Bell, Menu, Shield } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

export const AdminTopNav = () => {
  return (
    <header className="h-16 lg:h-20 border-b border-white/10 bg-background/50 backdrop-blur-xl sticky top-0 z-40 flex items-center shrink-0">
      <div className="w-full px-4 lg:px-8 flex items-center justify-between">
        
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button onClick={() => toast.info("Coming soon!")} variant="ghost" size="sm" className="p-2 -ml-2 rounded-lg">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Global Search */}
        <div className="hidden lg:block w-96 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search users, books, or IDs..." 
            className="pl-9 bg-white/5 border-white/10 h-10 rounded-full focus-visible:ring-purple-500/50"
          />
        </div>

        {/* Actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto lg:ml-0">
          <Button onClick={() => toast.info("Coming soon!")} variant="ghost" size="sm" className="relative p-2 rounded-full hover:bg-white/10">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          </Button>

          <div className="w-px h-6 bg-white/10 hidden sm:block mx-2" />

          <button onClick={() => toast.info("Coming soon!")} className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 flex items-center justify-center text-xs font-bold text-white shadow-inner">
              SA
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold leading-none text-foreground">Super Admin</p>
              <p className="text-[10px] text-purple-400 font-medium mt-1 uppercase tracking-wider">Level 3</p>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};
