import * as React from "react";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/common/EmptyState";
import { toast } from "sonner";

const MOCK_WISHLIST = [
  {
    id: "w1",
    title: "Clean Code",
    author: "Robert C. Martin",
    addedDate: "2 days ago",
  },
  {
    id: "w2",
    title: "Design Patterns",
    author: "Gang of Four",
    addedDate: "1 week ago",
  }
];

export const WishlistPreview = () => {
  if (MOCK_WISHLIST.length === 0) {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-full">
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold">My Wishlist</h3>
        </div>
        <EmptyState 
          icon={Heart}
          title="Wishlist is empty"
          description="Save books you're looking for and we'll notify you when they're available."
          action={<Button variant="outline" onClick={() => toast.info("Coming soon!")}>Browse Books</Button>}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-bold">My Wishlist</h3>
        <Button onClick={() => toast.info("Coming soon!")} variant="ghost" size="sm" className="h-8 text-xs">
          View All
        </Button>
      </div>
      
      <div className="flex-1 p-0 overflow-y-auto">
        <ul className="divide-y divide-white/5">
          {MOCK_WISHLIST.map((item) => (
            <li key={item.id} className="p-4 hover:bg-white/5 transition-colors group flex items-center justify-between">
              <div className="min-w-0 flex-1 pr-4">
                <p className="text-sm font-semibold text-foreground truncate">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.author}</p>
              </div>
              <button onClick={() => toast.info("Coming soon!")} className="p-2 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
