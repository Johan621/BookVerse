import * as React from "react";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/common/EmptyState";
import { toast } from "sonner";

const MOCK_BOOKS = [
  {
    id: "b1",
    title: "Physics Vol 2",
    author: "H.C. Verma",
    views: 12,
    status: "Active",
  },
  {
    id: "b2",
    title: "Data Structures",
    author: "Cormen",
    views: 45,
    status: "Requested",
  },
];

export const RecentBooks = () => {
  if (MOCK_BOOKS.length === 0) {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-full">
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold">My Recent Books</h3>
        </div>
        <EmptyState 
          icon={BookOpen}
          title="No books uploaded"
          description="List your first book to start exchanging with the community."
          action={<Button variant="outline" onClick={() => toast.info("Coming soon!")}>Upload Book</Button>}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-bold">My Recent Books</h3>
        <Button onClick={() => toast.info("Coming soon!")} variant="ghost" size="sm" className="h-8 text-xs">
          View All
        </Button>
      </div>
      
      <div className="flex-1 p-0 overflow-y-auto">
        <ul className="divide-y divide-white/5">
          {MOCK_BOOKS.map((book) => (
            <li key={book.id} className="p-5 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-16 bg-white/10 rounded flex items-center justify-center shrink-0">
                   <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{book.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{book.author}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-muted-foreground">
                      {book.views} views
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                      book.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
