import * as React from "react";
import { Sidebar } from "@/components/dashboard/layout/Sidebar";
import { TopNav } from "@/components/dashboard/layout/TopNav";
import { AnimatedAurora } from "@/components/background/AnimatedAurora";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Dashboard - BookVerse AI",
  description: "Manage your book exchanges, wishlist, and profile.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-background relative overflow-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedAurora />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] z-10 pointer-events-none" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
