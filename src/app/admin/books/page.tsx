"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Search, Filter, Eye, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

const MOCK_BOOKS = [
  { id: "b1", title: "Intro to Algorithms", owner: "Alex Johnson", category: "Computer Science", status: "ACTIVE", listed: "2 days ago" },
  { id: "b2", title: "Engineering Math", owner: "Priya Kumar", category: "Mathematics", status: "SOLD", listed: "1 week ago" },
  { id: "b3", title: "Database Systems", owner: "Rahul Sharma", category: "Computer Science", status: "ACTIVE", listed: "3 weeks ago" },
];

export default function AdminBooksPage() {
  const [search, setSearch] = React.useState("");

  const filteredBooks = MOCK_BOOKS.filter(b => 
    b.title.toLowerCase().includes(search.toLowerCase()) || 
    b.owner.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (title: string) => {
    toast.success(`Deleted listing: ${title} (Mock)`);
  };

  return (
    <div className="space-y-6 pb-12">
      
      <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Manage Books</h1>
          <p className="text-muted-foreground text-sm mt-1">Review all active and past listings.</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search books..." 
              className="pl-9 bg-white/5 border-white/10 focus-visible:ring-purple-500/50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" className="shrink-0 px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-muted-foreground text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Book Title</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No books found matching "{search}"
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book) => (
                  <tr key={book.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground">{book.title}</td>
                    <td className="px-6 py-4 text-muted-foreground">{book.owner}</td>
                    <td className="px-6 py-4 text-muted-foreground">{book.category}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-[10px] font-bold tracking-wider ${
                        book.status === "ACTIVE" ? "bg-blue-500/10 text-blue-400" : "bg-gray-500/10 text-gray-400"
                      }`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-primary transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(book.title)} className="p-2 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
