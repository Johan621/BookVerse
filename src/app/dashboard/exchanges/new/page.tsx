"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Mock data for the user's available books
const MY_BOOKS = [
  { id: "my1", title: "Database Systems", author: "Silberschatz" },
  { id: "my2", title: "Computer Networks", author: "Tanenbaum" },
];

export default function SendRequestPage() {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = React.useState<string | null>(null);
  const [isCash, setIsCash] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (!selectedBook && !isCash) {
      toast.error("Please select a book or choose cash purchase");
      return;
    }

    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success("Exchange request sent successfully!");
    router.push("/dashboard/exchanges");
  };

  return (
    <div className="max-w-2xl mx-auto pb-8">
      <FadeIn className="mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Request Exchange</h1>
        <p className="text-muted-foreground text-sm mt-1">What would you like to offer for "Introduction to Algorithms"?</p>
      </FadeIn>

      <div className="space-y-6">
        
        {/* Option 1: Offer a book */}
        <FadeIn delay={0.1}>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold mb-4">Offer one of your books</h3>
            <div className="space-y-3">
              {MY_BOOKS.map((book) => (
                <button
                  key={book.id}
                  onClick={() => { setSelectedBook(book.id); setIsCash(false); }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                    selectedBook === book.id 
                      ? "bg-primary/20 border-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]" 
                      : "bg-background/50 border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${selectedBook === book.id ? "text-primary" : "text-foreground"}`}>{book.title}</p>
                      <p className="text-xs text-muted-foreground">{book.author}</p>
                    </div>
                  </div>
                  {selectedBook === book.id && <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs uppercase font-bold tracking-widest">OR</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        {/* Option 2: Cash Purchase */}
        <FadeIn delay={0.2}>
          <button
            onClick={() => { setIsCash(true); setSelectedBook(null); }}
            className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all ${
              isCash 
                ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" 
                : "bg-white/5 border-white/10 hover:border-white/30"
            }`}
          >
            <div className="text-left">
              <h3 className={`font-bold ${isCash ? "text-emerald-500" : "text-foreground"}`}>Offer Cash Purchase</h3>
              <p className="text-sm text-muted-foreground mt-1">Buy the book directly for the listed price.</p>
            </div>
            {isCash && <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />}
          </button>
        </FadeIn>

        {/* Submit */}
        <FadeIn delay={0.3} className="pt-6">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20" 
            onClick={handleSubmit}
            disabled={(!selectedBook && !isCash) || isLoading}
          >
            {isLoading ? "Sending Request..." : (
              <>Send Request <ArrowRight className="w-5 h-5 ml-2" /></>
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-4">
            The owner will be notified immediately. You can chat once they accept.
          </p>
        </FadeIn>

      </div>
    </div>
  );
}
