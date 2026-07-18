"use client";

import { DataTable } from "@/components/admin/ui/DataTable";
import { Flag, Eye, MessageSquareWarning } from "lucide-react";
import { toast } from "sonner";

// Mock Data
const reportsData = [
  { id: "REP-201", reporter: "Alice Walker", targetUser: "Spammer99", reason: "Harassment in messages", status: "Open", date: "1 hour ago" },
  { id: "REP-202", reporter: "John Doe", targetUser: "UnknownBook123", reason: "Fake listing", status: "In Progress", date: "1 day ago" },
  { id: "REP-203", reporter: "Jane Smith", targetUser: "BadTrader", reason: "Did not ship book after exchange", status: "Resolved", date: "3 days ago" },
];

export default function ReportsPage() {
  
  const columns = [
    {
      header: "Report Info",
      cell: (item: typeof reports[0]) => (
        <div className="flex items-start gap-3">
          <div className="mt-1 p-2 bg-red-500/10 rounded-lg text-red-400">
            <Flag className="w-4 h-4" />
          </div>
          <div>
            <p className="font-medium text-foreground">{item.reason}</p>
            <p className="text-xs text-muted-foreground">ID: {item.id}</p>
          </div>
        </div>
      )
    },
    {
      header: "Reporter",
      accessorKey: "reporter"
    },
    {
      header: "Target User / Item",
      cell: (item: typeof reports[0]) => (
        <span className="text-purple-400 font-medium">{item.targetUser}</span>
      )
    },
    {
      header: "Status",
      cell: (item: typeof reports[0]) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
          item.status === 'Open' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
          item.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
          'bg-green-500/10 text-green-400 border-green-500/20'
        }`}>
          {item.status}
        </span>
      )
    },
    {
      header: "Date",
      accessorKey: "date"
    },
    {
      header: "Actions",
      cell: (item: typeof reports[0]) => (
        <div className="flex items-center gap-2">
          <button onClick={() => toast.info("Coming soon!")} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-medium text-foreground">
            <Eye className="w-4 h-4" />
            Review
          </button>
          <button onClick={() => toast.info("Coming soon!")} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-colors text-xs font-medium text-purple-300">
            <MessageSquareWarning className="w-4 h-4" />
            Contact
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">User Reports</h1>
          <p className="text-muted-foreground mt-1">Manage and resolve community reports regarding users and content.</p>
        </div>
      </div>

      <DataTable data={reportsData} // eslint-disable-next-line @typescript-eslint/no-explicit-any
      columns={columns as any} searchPlaceholder="Search reports by user or target..." />
    </div>
  );
}
