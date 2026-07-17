// "use client"

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FadeIn } from "@/components/animations/FadeIn";
import { MagneticButton } from "@/components/animations/MagneticButton";



export default function UploadBookPage() {
  const router = useRouter();
  const [images, setImages] = React.useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Mock handlers for image uploads
  const addMockImage = () => {
    if (images.length >= 3) {
      toast.error("Maximum 3 images allowed");
      return;
    }
    setImages([...images, `mock-image-${Date.now()}`]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock async submission
    setTimeout(() => {
      toast.success("Book uploaded (mock)!");
      setIsSubmitting(false);
      router.push("/dashboard/books");
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <FadeIn className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Upload New Book
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Fill in the details below and add up to 3 images.
        </p>
      </FadeIn>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload Section */}
        <FadeIn delay={0.1}>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Label>Book Images (max 3)</Label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.length < 3 && (
                <button
                  type="button"
                  onClick={addMockImage}
                  className="h-40 rounded-2xl border-2 border-dashed border-white/20 hover:border-primary/50 bg-white/5 hover:bg-primary/5 flex flex-col items-center justify-center gap-2 transition-all"
                 aria-label="Action button">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Add image</span>
                </button>
              )}
              {images.map((img, idx) => (
                <div
                  key={img}
                  className="h-40 rounded-2xl bg-white/10 border border-white/10 relative flex items-center justify-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-muted-foreground/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M19 3v4M5 21h14M5 10v11M19 10v11" />
                  </svg>
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Book Details */}
        <FadeIn delay={0.2} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" placeholder="e.g. Introduction to Algorithms" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author *</Label>
              <Input id="author" placeholder="e.g. Thomas H. Cormen" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="isbn">ISBN (optional)</Label>
              <Input id="isbn" placeholder="e.g. 978-0262033848" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price (₹, optional)</Label>
              <Input id="price" type="number" placeholder="Leave empty for direct exchange" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="condition">Condition *</Label>
              <select id="condition" className="flex h-10 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50">
                <option value="">Select condition</option>
                <option value="NEW">New</option>
                <option value="LIKE_NEW">Like New</option>
                <option value="GOOD">Good</option>
                <option value="POOR">Poor</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department *</Label>
              <select id="department" className="flex h-10 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50">
                <option value="">Select department</option>
                <option value="cs">Computer Science</option>
                <option value="engineering">Engineering</option>
                <option value="physics">Physics</option>
                <option value="math">Mathematics</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Semester *</Label>
              <Input id="semester" placeholder="e.g. 3" />
            </div>
          </div>
        </FadeIn>

        {/* AI Placeholders */}
        <FadeIn delay={0.3} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-lg font-medium mb-2">AI Book Scanner</h2>
            <p className="text-sm text-muted-foreground">(Coming soon – automatically extract details from cover image)</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-lg font-medium mb-2">AI Description Generator</h2>
            <p className="text-sm text-muted-foreground">(Coming soon – generate a description from the title)</p>
          </div>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.4} className="flex items-center gap-4">
          <Button type="submit" variant="primary" disabled={isSubmitting} className="w-32 font-bold">
            {isSubmitting ? "Publishing..." : "Publish"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            disabled={isSubmitting}
            onClick={() => {
              toast.info("Draft saved (mock)");
            }}
            className="w-32 font-bold"
          >
            Save Draft
          </Button>
        </FadeIn>
      </form>
    </div>
  );
}
