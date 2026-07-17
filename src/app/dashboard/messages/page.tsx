"use client";

import * as React from "react";
import { ConversationList, type Conversation } from "@/components/dashboard/messages/ConversationList";
import { ChatArea, type Message } from "@/components/dashboard/messages/ChatArea";
import { MessageSquareOff } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { toast } from "sonner";

// Mock Data
const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "c1",
    user: { name: "Alex Johnson", avatar: "AJ", online: true },
    lastMessage: "Sounds good, see you at 2 PM!",
    timestamp: "10:45 AM",
    unreadCount: 0,
  },
  {
    id: "c2",
    user: { name: "Priya Kumar", avatar: "PK", online: false },
    lastMessage: "Are you still offering the Database book?",
    timestamp: "Yesterday",
    unreadCount: 2,
  },
  {
    id: "c3",
    user: { name: "Rahul Sharma", avatar: "RS", online: true },
    lastMessage: "Thanks for the trade!",
    timestamp: "Oct 12",
    unreadCount: 0,
  }
];

const MOCK_MESSAGES: Record<string, Message[]> = {
  "c1": [
    { id: "m1", senderId: "c1", text: "Hey! I saw you accepted the exchange for Operating Systems.", timestamp: "10:30 AM", status: "READ" },
    { id: "m2", senderId: "me", text: "Yes! Are you free to meet tomorrow?", timestamp: "10:35 AM", status: "READ" },
    { id: "m3", senderId: "c1", text: "Tomorrow works. Library Cafe?", timestamp: "10:40 AM", status: "READ" },
    { id: "m4", senderId: "me", text: "Perfect.", timestamp: "10:42 AM", status: "READ" },
    { id: "m5", senderId: "c1", text: "Sounds good, see you at 2 PM!", timestamp: "10:45 AM", status: "READ" },
  ],
  "c2": [
    { id: "m6", senderId: "c2", text: "Hi there!", timestamp: "Yesterday, 2:00 PM", status: "READ" },
    { id: "m7", senderId: "c2", text: "Are you still offering the Database book?", timestamp: "Yesterday, 2:02 PM", status: "READ" },
  ]
};

export default function MessagesHubPage() {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  
  // State for mocking new messages
  const [messagesData, setMessagesData] = React.useState(MOCK_MESSAGES);
  const [isTyping, setIsTyping] = React.useState(false);

  const activeConversation = MOCK_CONVERSATIONS.find(c => c.id === activeId);
  const activeMessages = activeId ? messagesData[activeId] || [] : [];

  const handleSendMessage = (text: string) => {
    if (!activeId) return;

    // 1. Add user message
    const newMessage: Message = {
      id: `m_new_${Date.now()}`,
      senderId: "me",
      text,
      timestamp: "Just now",
      status: "SENT"
    };

    setMessagesData(prev => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), newMessage]
    }));

    // 2. Simulate delivery/read status update
    setTimeout(() => {
      setMessagesData(prev => ({
        ...prev,
        [activeId]: prev[activeId].map(m => m.id === newMessage.id ? { ...m, status: "DELIVERED" } : m)
      }));
    }, 1000);

    setTimeout(() => {
      setMessagesData(prev => ({
        ...prev,
        [activeId]: prev[activeId].map(m => m.id === newMessage.id ? { ...m, status: "READ" } : m)
      }));
    }, 2000);

    // 3. Simulate auto-reply from the mock user
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyMessage: Message = {
        id: `m_reply_${Date.now()}`,
        senderId: activeId,
        text: "Got it! Thanks for letting me know. (Mock Auto-Reply)",
        timestamp: "Just now",
        status: "READ"
      };
      setMessagesData(prev => ({
        ...prev,
        [activeId]: [...(prev[activeId] || []), replyMessage]
      }));
      toast("New message received!");
    }, 4000);
  };

  return (
    <div className="h-[calc(100vh-64px)] lg:h-[calc(100vh-88px)] -mx-4 sm:-mx-6 lg:-mx-8 -mb-8 flex overflow-hidden">
      
      {/* Left Pane: Conversation List */}
      <div className={`w-full lg:w-96 flex-shrink-0 transition-all ${activeId ? "hidden lg:block" : "block"}`}>
        <ConversationList 
          conversations={MOCK_CONVERSATIONS}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      {/* Right Pane: Active Chat */}
      <div className={`flex-1 flex flex-col relative ${!activeId ? "hidden lg:flex" : "flex"}`}>
        {activeId && activeConversation ? (
          <ChatArea 
            conversation={activeConversation}
            messages={activeMessages}
            isTyping={isTyping}
            onBack={() => setActiveId(null)}
            onSendMessage={handleSendMessage}
            className="animate-in fade-in slide-in-from-right-4 duration-300"
          />
        ) : (
          <FadeIn className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white/5">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <MessageSquareOff className="w-8 h-8 text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">No Chat Selected</h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Choose a conversation from the sidebar or start a new chat from an exchange request to arrange a meetup.
            </p>
          </FadeIn>
        )}
      </div>

    </div>
  );
}
