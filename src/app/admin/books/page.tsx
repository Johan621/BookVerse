"use client";

import { DataTable } from "@/components/admin/ui/DataTable";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

// Mock Data
const books = [
  { id: "BOK-001", title: "The Great Gatsby", author: "F. Scott Fitzgerald", condition: "Good", status: "Available", owner: "Alice Walker", added: "2 days ago" },
  { id: "BOK-002", title: "1984", author: "George Orwell", condition: "Like New", status: "Exchanged", owner: "John Doe", added: "1 week ago" },
  { id: "BOK-003", title: "Dune", author: "Frank Herbert", condition: "Fair", status: "Available", owner: "Jane Smith", added: "3 days ago" },
  { id: "BOK-004", title: "The Hobbit", author: "J.R.R. Tolkien", condition: "Good", status: "Flagged", owner: "Spammer99", added: "5 hours ago" },
  { id: "BOK-005", title: "Project Hail Mary", author: "Andy Weir", condition: "Like New", status: "Available", owner: "Bob Builder", added: "1 month ago" },
];

export default function ManageBooksPage() {
  
  const columns = [
    {
      header: "Book",
      cell: (item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <div className="flex items-center gap-4">
          <div className="w-12 h-16 bg-white/5 border border-white/10 rounded overflow-hidden flex items-center justify-center relative">
            {/* Placeholder for book cover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20" />
            <span className="text-[10px] font-bold text-white/30 tracking-widest rotate-90 whitespace-nowrap uppercase">{item.author.split(' ').pop()}</span>
          </div>
          <div>
            <p className="font-medium text-foreground">{book.title}</p>
            <p className="text-xs text-muted-foreground">{item.author}</p>
          </div>
        </div>
      )
    },
    {
      header: "Owner",
      accessorKey: "owner"
    },
    {
      header: "Condition",
      accessorKey: "condition"
    },
    {
      header: "Status",
      cell: (item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
          book.status === 'Available' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
          book.status === 'Flagged' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
          'bg-white/5 text-muted-foreground border-white/10'
        }`}>
          {book.status}
        </span>
      )
    },
    {
      header: "Added",
      accessorKey: "added"
    },
    {
      header: "Actions",
      cell: (item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <div className="flex items-center gap-2">
          <button onClick={() => toast.info("Coming soon!")} className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-blue-400 transition-colors" title="Edit Book">
            <Edit className="w-4 h-4" />
          </button>
          <button onClick={() => toast.info("Coming soon!")} className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-red-400 transition-colors" title="Delete Book">
            <Trash2 className="w-4 h-4" />
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
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Manage Books</h1>
          <p className="text-muted-foreground mt-1">Review the global inventory of books listed for exchange.</p>
        </div>
      </div>

      <DataTable data={books} // eslint-disable-next-line @typescript-eslint/no-explicit-any
      columns={columns as any} searchPlaceholder="Search books by title, author, or ID..." />
    </div>
  );
}
