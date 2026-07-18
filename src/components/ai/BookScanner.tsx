"use client";
import Image from "next/image";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Mock AI result data
const mockResult = {
  isbn: "978-0262033848",
  author: "Thomas H. Cormen",
  edition: "3rd",
  publisher: "MIT Press",
  coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
};

export const BookScanner = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string>("");
  const [scanning, setScanning] = React.useState(false);
  const [result, setResult] = React.useState<typeof mockResult | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
      setResult(null);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      setFile(dropped);
      setPreviewUrl(URL.createObjectURL(dropped));
      setResult(null);
    }
  };

  const startScan = () => {
    if (!file) return;
    setScanning(true);
    // Simulate AI processing delay
    setTimeout(() => {
      setScanning(false);
      setResult(mockResult);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-2xl p-6"
      >
        {/* Upload Section */}
        <div
          className={cn(
            "flex flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-xl p-8 text-center cursor-pointer",
            previewUrl && "bg-white/10"
          )}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {previewUrl ? (
            <div className="relative w-full max-h-64 h-64 mb-4">
              <Image src={previewUrl} alt="preview" fill className="object-contain rounded" />
            </div>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-muted-foreground mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
              <p className="text-sm text-muted-foreground mb-2">Drag & drop an image or click to upload</p>
            </>
          )}
          <label className="mt-2 block">
            <Input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onFileChange}
            />
            <Button onClick={() => toast.info("Coming soon!")} variant="ghost">
              <span className="cursor-pointer">{previewUrl ? "Change Image" : "Choose Image"}</span>
            </Button>
          </label>
        </div>

        {/* Scan button */}
        {file && !result && (
          <div className="mt-4 flex justify-center">
            <Button onClick={startScan} disabled={scanning} variant="primary">
              {scanning ? "Scanning..." : "Scan Book"}
            </Button>
          </div>
        )}

        {/* Scanning animation */}
        {scanning && (
          <div className="mt-6 flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full"
            />
          </div>
        )}

        {/* Result display */}
        {result && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cover preview */}
            <div className="relative w-full h-64 p-4 bg-white/5 rounded-xl">
              <Image src={result.coverUrl} alt="Cover" fill className="object-contain rounded" />
            </div>
            {/* Extracted fields */}
            <div className="space-y-4">
              <div>
                <Label>ISBN</Label>
                <Input value={result.isbn} readOnly />
              </div>
              <div>
                <Label>Author</Label>
                <Input value={result.author} readOnly />
              </div>
              <div>
                <Label>Edition</Label>
                <Input value={result.edition} readOnly />
              </div>
              <div>
                <Label>Publisher</Label>
                <Input value={result.publisher} readOnly />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BookScanner;
