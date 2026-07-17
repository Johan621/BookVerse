import * as React from "react";
import { Check } from "lucide-react";
import type { ExchangeStatus } from "./ExchangeCard";

interface StatusTrackerProps {
  currentStatus: ExchangeStatus;
}

const STEPS = [
  { id: "PENDING", label: "Request Sent" },
  { id: "ACCEPTED", label: "Accepted" },
  { id: "COMPLETED", label: "Completed" }
];

export const StatusTracker = ({ currentStatus }: StatusTrackerProps) => {
  // Determine if it's a failure state
  const isFailed = currentStatus === "REJECTED" || currentStatus === "CANCELLED";
  
  // Calculate active step (if failed, we just highlight the first step or none)
  let activeIndex = 0;
  if (currentStatus === "ACCEPTED") activeIndex = 1;
  if (currentStatus === "COMPLETED") activeIndex = 2;

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        
        {/* Connecting Lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 rounded-full z-0 pointer-events-none" />
        
        {/* Active Line Progress */}
        {!isFailed && (
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-700 pointer-events-none" 
            style={{ width: `${(activeIndex / (STEPS.length - 1)) * 100}%` }}
          />
        )}

        {/* Steps */}
        {STEPS.map((step, index) => {
          const isCompleted = index <= activeIndex && !isFailed;
          const isActive = index === activeIndex && !isFailed;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-background transition-colors duration-500 ${
                  isCompleted 
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
                    : "bg-white/10 text-muted-foreground"
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : <span className="text-sm font-bold">{index + 1}</span>}
              </div>
              <span className={`absolute top-12 text-xs font-bold whitespace-nowrap transition-colors duration-500 ${
                isActive ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {isFailed && (
        <div className="mt-12 text-center">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
            currentStatus === "REJECTED" 
              ? "bg-red-500/10 text-red-400 border border-red-500/20" 
              : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
          }`}>
            Exchange {currentStatus.charAt(0) + currentStatus.slice(1).toLowerCase()}
          </span>
        </div>
      )}
    </div>
  );
};
