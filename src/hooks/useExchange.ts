import { useState, useCallback } from "react";
import type { TimelineEvent, ExchangeStatus } from "@/types/exchange";
import { toast } from "sonner";

export function useExchange(initialEvents: TimelineEvent[] = [], initialStatus: ExchangeStatus = "pending") {
  const [events, setEvents] = useState<TimelineEvent[]>(initialEvents);
  const [status, setStatus] = useState<ExchangeStatus>(initialStatus);

  const completeStep = useCallback((eventId: string) => {
    setEvents(prev => 
      prev.map(evt => evt.id === eventId ? { ...evt, isCompleted: true } : evt)
    );
  }, []);

  const handleAction = useCallback((actionMsg: string, callback?: () => void) => {
    toast.success(actionMsg);
    if (callback) callback();
  }, []);

  return {
    events,
    status,
    setStatus,
    completeStep,
    handleAction
  };
}
