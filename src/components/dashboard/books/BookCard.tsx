import * as React from "react";
import { BookOpen, Edit2, Trash2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { toast } from "sonner";

export type BookStatus = "DRAFT" | "PUBLISHED" | "SOLD" | "EXCHANGED" | "DONATION";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  views: number;
  condition: string;
}

const statusConfig: Record<BookStatus, { color: string; label: string }> = {
  DRAFT: { color: "bg-gray-500/10 text-gray-400 border-gray-500/20", label: "Draft" },
  PUBLISHED: { color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20", label: "Published" },
  SOLD: { color: "bg-blue-500/10 text-blue-400 border-blue-500/20", label: "Sold" },
  EXCHANGED: { color: "bg-purple-500/10 text-purple-400 border-purple-500/20", label: "Exchanged" },
  DONATION: { color: "bg-amber-500/10 text-amber-500 border-amber-500/20", label: "Donation" },
};

export const BookCard = ({ id, title, author, status, views, condition }: BookCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleDelete = () => {
    toast.success(`"${title}" deleted successfully (Mock)`);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden group">
      {/* Book Image Placeholder */}
      <div className="h-40 bg-white/5 relative flex items-center justify-center">
        <BookOpen className="w-10 h-10 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold px-2 py-1 rounded border ${statusConfig[status].color}`}>
            {statusConfig[status].label}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-md bg-background/50 hover:bg-background/80 text-foreground transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            
            {/* Action Menu (Mock Dropdown) */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-background border border-white/10 rounded-xl shadow-xl overflow-hidden z-20 animate-in fade-in zoom-in-95">
                <Link 
                  href={`/dashboard/books/${id}/edit`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors"
                >
                  <Edit2 className="w-4 h-4" /> Edit Book
                </Link>
                <button 
                  onClick={handleDelete}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 w-full text-left transition-colors"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Book Details */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{author}</p>
        
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>{condition}</span>
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
};
