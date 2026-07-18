"use client";

import { DataTable } from "@/components/admin/ui/DataTable";
import { MoreHorizontal, Ban, Mail } from "lucide-react";
import { toast } from "sonner";

// Mock Data
const users = [
  { id: "USR-001", name: "Alice Walker", email: "alice@example.com", role: "User", status: "Active", joined: "Oct 12, 2023" },
  { id: "USR-002", name: "John Doe", email: "john@example.com", role: "Moderator", status: "Active", joined: "Nov 05, 2023" },
  { id: "USR-003", name: "Spammer99", email: "spam@example.com", role: "User", status: "Blocked", joined: "Jan 14, 2024" },
  { id: "USR-004", name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active", joined: "Aug 22, 2023" },
  { id: "USR-005", name: "Bob Builder", email: "bob@example.com", role: "User", status: "Warning", joined: "Dec 01, 2023" },
];

export default function ManageUsersPage() {
  
  const columns = [
    {
      header: "User",
      cell: (item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center font-bold text-purple-300">
            {item.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-foreground">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.id}</p>
          </div>
        </div>
      )
    },
    {
      header: "Email",
      accessorKey: "email"
    },
    {
      header: "Role",
      cell: (item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
          item.role === 'Admin' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
          item.role === 'Moderator' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
          'bg-white/5 text-muted-foreground border-white/10'
        }`}>
          {item.role}
        </span>
      )
    },
    {
      header: "Status",
      cell: (item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit ${
          item.status === 'Active' ? 'text-green-400' :
          item.status === 'Blocked' ? 'text-red-400' :
          'text-yellow-400'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full ${
            item.status === 'Active' ? 'bg-green-400' :
            item.status === 'Blocked' ? 'bg-red-400' :
            'bg-yellow-400'
          }`} />
          {item.status}
        </span>
      )
    },
    {
      header: "Joined",
      accessorKey: "joined"
    },
    {
      header: "Actions",
      cell: (_item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <div className="flex items-center gap-2">
          <button onClick={() => toast.info("Coming soon!")} className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors" title="Email User">
            <Mail className="w-4 h-4" />
          </button>
          <button onClick={() => toast.info("Coming soon!")} className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-red-400 transition-colors" title="Block User">
            <Ban className="w-4 h-4" />
          </button>
          <button onClick={() => toast.info("Coming soon!")} className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-purple-400 transition-colors" title="More Options">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Manage Users</h1>
          <p className="text-muted-foreground mt-1">View and manage platform users, roles, and account statuses.</p>
        </div>
        <button onClick={() => toast.info("Coming soon!")} className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Export Users
        </button>
      </div>

      <DataTable data={users} // eslint-disable-next-line @typescript-eslint/no-explicit-any
      columns={columns as any} searchPlaceholder="Search users by name, email, or ID..." />
    </div>
  );
}
