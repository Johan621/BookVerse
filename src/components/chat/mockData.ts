// src/components/chat/mockData.ts
export interface Conversation {
  id: string;
  name: string;
  avatar: string; // URL or path
  lastMessage: string;
  unread: number;
}

export interface Message {
  id: string;
  from: "me" | "them";
  content: string;
  timestamp: string; // ISO
  read: boolean;
  imageUrl?: string;
}

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "c1",
    name: "Alice Johnson",
    avatar: "/avatars/alice.png",
    lastMessage: "Sure, I’ll send it tomorrow.",
    unread: 2,
  },
  {
    id: "c2",
    name: "Bob Smith",
    avatar: "/avatars/bob.png",
    lastMessage: "Got the book, thanks!",
    unread: 0,
  },
  {
    id: "c3",
    name: "Charlie Davis",
    avatar: "/avatars/charlie.png",
    lastMessage: "When can we meet?",
    unread: 1,
  },
];

export const MOCK_MESSAGES: Record<string, Message[]> = {
  c1: [
    {
      id: "m1",
      from: "me",
      content: "Hey Alice, did you get the book?",
      timestamp: "2026-07-15T10:12:00Z",
      read: true,
    },
    {
      id: "m2",
      from: "them",
      content: "Yes! I’ll drop it off today.",
      timestamp: "2026-07-15T10:13:05Z",
      read: false,
    },
  ],
  c2: [
    {
      id: "m1",
      from: "them",
      content: "Got the book, thanks!",
      timestamp: "2026-07-14T09:45:00Z",
      read: true,
    },
  ],
  c3: [],
};
