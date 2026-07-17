"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  ShieldAlert, 
  Flag,
  Settings,
  LogOut
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Users, label: "Manage Users", href: "/admin/users" },
  { icon: BookOpen, label: "Manage Books", href: "/admin/books" },
  { icon: ShieldAlert, label: "Moderation Queue", href: "/admin/moderation" },
  { icon: Flag, label: "Reports", href: "/admin/reports" },
];

export const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/10 bg-background/50 backdrop-blur-xl flex flex-col h-full sticky top-0 hidden lg:flex">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Admin<span className="text-purple-400">Portal</span></span>
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-2">Management</p>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.label} href={item.href}>
              <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                isActive 
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
              }`}>
                <item.icon className="w-5 h-5" />
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-white/5 hover:text-foreground transition-all">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <Link href="/dashboard">
          <div className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-all mt-2">
            <LogOut className="w-5 h-5" />
            <span>Exit Admin</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};
