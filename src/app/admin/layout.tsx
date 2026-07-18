import { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/layout/AdminSidebar";
import { AdminTopNav } from "@/components/admin/layout/AdminTopNav";
import { AnimatedAurora } from "@/components/background/AnimatedAurora";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex overflow-hidden">
      {/* Background Effects specifically tinted for Admin */}
      <div className="fixed inset-0 z-0">
        <AnimatedAurora 
          colors={['#4c1d95', '#3b0764', '#1e1b4b', '#000000']} 
          speed={0.4} 
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl" />
      </div>

      <AdminSidebar />
      
      <div className="flex-1 flex flex-col relative z-10 w-full min-w-0">
        <AdminTopNav />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 lg:p-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {children}
        </main>
      </div>
    </div>
  );
}
