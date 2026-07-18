import { useState, useCallback } from "react";
import type { Message } from "@/types/chat";

export function useChat(initialMessages: Message[] = []) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback((newMessage: Message) => {
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const simulateTyping = useCallback((duration: number = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, duration);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    simulateTyping,
    setMessages
  };
}
