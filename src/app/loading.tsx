export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
      </div>
      <p className="text-muted-foreground animate-pulse text-sm font-medium tracking-wider uppercase">Loading BookVerse...</p>
    </div>
  );
}
