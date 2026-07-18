export interface ChatUser {
  name: string;
  avatar: string;
  online?: boolean;
}

export interface Conversation {
  id: string;
  // Landing page properties
  name?: string;
  avatar?: string;
  unread?: number;
  
  // Dashboard properties
  user?: ChatUser;
  timestamp?: string;
  unreadCount?: number;
  
  // Shared
  lastMessage: string;
}

export interface Message {
  id: string;
  timestamp: string;
  
  // Landing page properties
  from?: "me" | "them";
  content?: string;
  read?: boolean;
  imageUrl?: string;

  // Dashboard properties
  senderId?: string;
  text?: string;
  status?: "READ" | "DELIVERED" | "SENT";
}
