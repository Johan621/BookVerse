"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Search, MoreVertical, Ban, Trash2, Mail } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { toast } from "sonner";

const MOCK_USERS = [
  { id: "u1", name: "Alex Johnson", email: "alex@state.edu", college: "State University", status: "ACTIVE", joined: "Oct 1, 2024" },
  { id: "u2", name: "Priya Kumar", email: "priya@tech.edu", college: "Tech Institute", status: "ACTIVE", joined: "Sep 28, 2024" },
  { id: "u3", name: "Rahul Sharma", email: "rahul@state.edu", college: "State University", status: "SUSPENDED", joined: "Sep 15, 2024" },
  { id: "u4", name: "Sarah Smith", email: "sarah@city.edu", college: "City College", status: "ACTIVE", joined: "Oct 12, 2024" },
];

export default function AdminUsersPage() {
  const [search, setSearch] = React.useState("");
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const filteredUsers = MOCK_USERS.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAction = (action: string, user: string) => {
    toast.success(`${action} applied to ${user} (Mock)`);
    setActiveMenu(null);
  };

  return (
    <div className="space-y-6 pb-12">
      
      <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Manage Users</h1>
          <p className="text-muted-foreground text-sm mt-1">View and moderate platform members.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search users..." 
            className="pl-9 bg-white/5 border-white/10 focus-visible:ring-purple-500/50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-muted-foreground text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">College</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No users found matching "{search}"
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{user.college}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-[10px] font-bold tracking-wider ${
                        user.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{user.joined}</td>
                    <td className="px-6 py-4 text-right relative">
                      <button 
                        onClick={() => setActiveMenu(activeMenu === user.id ? null : user.id)}
                        className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      {activeMenu === user.id && (
                        <div className="absolute right-6 top-10 w-40 bg-background border border-white/10 rounded-xl shadow-xl z-20 py-1 overflow-hidden animate-in fade-in zoom-in-95">
                          <button onClick={() => handleAction("Email Sent", user.name)} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors">
                            <Mail className="w-4 h-4" /> Email User
                          </button>
                          <button onClick={() => handleAction(user.status === "ACTIVE" ? "Suspension" : "Un-suspension", user.name)} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-amber-400 hover:bg-amber-500/10 transition-colors">
                            <Ban className="w-4 h-4" /> {user.status === "ACTIVE" ? "Suspend" : "Activate"}
                          </button>
                          <button onClick={() => handleAction("Deletion", user.name)} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                            <Trash2 className="w-4 h-4" /> Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </div>
  );
}
