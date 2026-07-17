import * as React from "react";
import { MapPin, Calendar, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PickupDetailsProps {
  location: string;
  date: string;
  time: string;
  onComplete: () => void;
}

export const PickupDetails = ({ location, date, time, onComplete }: PickupDetailsProps) => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="p-6 relative z-10">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" /> Agreed Pickup Details
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Date & Time</p>
              <p className="font-bold text-foreground">{date}</p>
              <p className="text-sm text-muted-foreground">{time}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Location</p>
              <p className="font-bold text-foreground">{location}</p>
              <p className="text-sm text-muted-foreground">Look for them near the entrance.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold h-12 shadow-lg shadow-primary/20" onClick={onComplete}>
            <CheckCircleIcon className="w-5 h-5 mr-2" /> Mark as Completed
          </Button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 px-3 py-2 rounded-lg">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Only mark completed once you have the book in hand.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for icon
const CheckCircleIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)
