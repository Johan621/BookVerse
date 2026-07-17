import * as React from "react";
import { Check, Clock, X, MessageSquare } from "lucide-react";

interface TimelineEvent {
  id: string;
  type: "REQUESTED" | "ACCEPTED" | "REJECTED" | "COMPLETED" | "MESSAGE";
  title: string;
  description: string;
  timestamp: string;
}

const getEventIcon = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "REQUESTED": return <Clock className="w-4 h-4 text-amber-500" />;
    case "ACCEPTED": return <Check className="w-4 h-4 text-blue-400" />;
    case "COMPLETED": return <Check className="w-4 h-4 text-emerald-500" />;
    case "REJECTED": return <X className="w-4 h-4 text-red-400" />;
    case "MESSAGE": return <MessageSquare className="w-4 h-4 text-purple-400" />;
  }
};

const getEventBg = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "REQUESTED": return "bg-amber-500/10 border-amber-500/20";
    case "ACCEPTED": return "bg-blue-500/10 border-blue-500/20";
    case "COMPLETED": return "bg-emerald-500/10 border-emerald-500/20";
    case "REJECTED": return "bg-red-500/10 border-red-500/20";
    case "MESSAGE": return "bg-purple-500/10 border-purple-500/20";
  }
};

export const ExchangeTimeline = ({ events }: { events: TimelineEvent[] }) => {
  return (
    <div className="relative border-l border-white/10 ml-6 py-4 space-y-8">
      {events.map((event) => (
        <div key={event.id} className="relative pl-8 group">
          {/* Timeline Dot */}
          <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border border-background flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${getEventBg(event.type)}`}>
            {getEventIcon(event.type)}
          </div>
          
          {/* Content */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h4 className="font-bold text-foreground">{event.title}</h4>
              <span className="text-xs font-medium text-muted-foreground">{event.timestamp}</span>
            </div>
            <p className="text-sm text-muted-foreground/80">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
