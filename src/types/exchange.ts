export interface ExchangeRequest {
  id: string;
  // Dashboard mock properties
  direction?: "Incoming" | "Outgoing";
  title?: string;
  pickupDate?: string;
  pickupLocation?: string;
  timeline?: { date: string; description: string }[];
  
  // Existing properties
  bookId?: string;
  bookTitle?: string;
  ownerId?: string;
  requesterId?: string;
  status: "pending" | "accepted" | "declined" | "completed" | "Pending" | "Accepted" | "Rejected";
  createdAt?: string; // ISO format
}

export interface TimelineEvent {
  id: string;
  type: "request" | "accept" | "meetup_set" | "complete" | "cancel";
  title: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
}

export type ExchangeStatus = "pending" | "accepted" | "declined" | "completed";

export interface ExchangeCardProps {
  id: string;
  bookTitle: string;
  owner: string;
  status: ExchangeStatus;
  date: string;
}
