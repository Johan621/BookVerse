"use client";

import * as React from "react";
import { useState, useCallback } from "react";
import { Upload, Camera, FileImage } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface UploadAreaProps {
  onFileSelect: (file: File | string) => void;
}

export const UploadArea = ({ onFileSelect }: UploadAreaProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  }, [onFileSelect]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <motion.div
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-3xl glass transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-white/10 hover:border-primary/50 hover:bg-white/5"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <p className="mb-2 text-sm font-semibold text-foreground">
            <span className="font-bold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            PNG, JPG or WEBP (Max. 5MB)
          </p>
          
          <div className="flex items-center gap-4 w-full max-w-xs justify-center z-10">
            <label className="flex-1 cursor-pointer">
              <div className="w-full h-10 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors text-sm font-medium">
                <FileImage className="w-4 h-4" />
                Browse Files
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={handleChange} />
            </label>
            <Button variant="primary" className="flex-1 font-medium shadow-none h-10" onClick={() => {
              // Mock camera click
              onFileSelect("camera-mock.jpg");
            }}>
              <Camera className="w-4 h-4 mr-2" />
              Camera
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
