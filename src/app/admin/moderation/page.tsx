"use client";

import { DataTable } from "@/components/admin/ui/DataTable";
import { Check, X, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

// Mock Data
const moderationQueue = [
  { id: "MOD-101", type: "Book Listing", title: "Controversial Book Title", submittedBy: "Spammer99", reason: "Potential Community Guidelines Violation", date: "2 hours ago" },
  { id: "MOD-102", type: "Exchange", title: "Exchange ID #8492", submittedBy: "System", reason: "High Risk of Fraud Detected", date: "5 hours ago" },
  { id: "MOD-103", type: "Book Listing", title: "Unknown Author 123", submittedBy: "NewUser42", reason: "Missing Cover and ISBN", date: "1 day ago" },
];

export default function ModerationQueuePage() {
  
  const columns = [
    {
      header: "Item Details",
      cell: (item: any) => (
        <div>
          <p className="font-medium text-foreground">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.type} • {item.id}</p>
        </div>
      )
    },
    {
      header: "Submitted By",
      accessorKey: "submittedBy"
    },
    {
      header: "Flag Reason",
      cell: (item: any) => (
        <div className="flex items-center gap-2 text-yellow-400">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm">{item.reason}</span>
        </div>
      )
    },
    {
      header: "Date",
      accessorKey: "date"
    },
    {
      header: "Actions",
      cell: (item: any) => (
        <div className="flex items-center gap-3">
          <button onClick={() => toast.info("Coming soon!")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 transition-all font-medium text-xs">
            <Check className="w-4 h-4" />
            Approve
          </button>
          <button onClick={() => toast.info("Coming soon!")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all font-medium text-xs">
            <X className="w-4 h-4" />
            Reject
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Moderation Queue</h1>
          <p className="text-muted-foreground mt-1">Review flagged items, pending listings, and high-risk exchanges.</p>
        </div>
      </div>

      <DataTable data={moderationQueue} columns={columns as any} searchPlaceholder="Search by title or reporter..." />
    </div>
  );
}
