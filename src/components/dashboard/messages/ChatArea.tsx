import * as React from "react";
import { ArrowLeft, Image as ImageIcon, Smile, Send, Check, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FadeIn } from "@/components/animations/FadeIn";
import { toast } from "sonner";
import type { Conversation } from "./ConversationList";

export interface Message {
  id: string;
  senderId: "me" | string;
  text: string;
  timestamp: string;
  status: "SENT" | "DELIVERED" | "READ";
}

interface ChatAreaProps {
  conversation: Conversation;
  messages: Message[];
  isTyping?: boolean;
  onBack: () => void;
  onSendMessage: (text: string) => void;
  className?: string;
}

export const ChatArea = ({ conversation, messages, isTyping, onBack, onSendMessage, className = "" }: ChatAreaProps) => {
  const [text, setText] = React.useState("");
  const [showEmoji, setShowEmoji] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text);
    setText("");
    setShowEmoji(false);
  };

  const handleImageMock = () => {
    toast.success("Image uploader will open here! (Mock)");
  };

  const insertEmoji = (emoji: string) => {
    setText(prev => prev + emoji);
    setShowEmoji(false);
  };

  return (
    <div className={`flex flex-col h-full bg-background relative ${className}`}>
      
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 rounded-lg hover:bg-white/10 md:hidden transition-colors" aria-label="Action button">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-inner">
              {conversation.user.avatar}
            </div>
            {conversation.user.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full" />
            )}
          </div>
          
          <div>
            <h3 className="font-bold text-foreground">{conversation.user.name}</h3>
            <p className="text-xs text-muted-foreground">
              {isTyping ? <span className="text-primary animate-pulse">typing...</span> : (conversation.user.online ? "Online" : "Offline")}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.map((msg, idx) => {
          const isMe = msg.senderId === "me";
          return (
            <FadeIn key={msg.id} delay={0.05 * Math.min(idx, 10)} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
              <div className={`max-w-[80%] sm:max-w-[70%] px-4 py-2.5 rounded-2xl ${
                isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-sm" 
                  : "bg-white/10 text-foreground rounded-tl-sm border border-white/5"
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[10px] text-muted-foreground">{msg.timestamp}</span>
                {isMe && (
                  msg.status === "READ" ? <CheckCheck className="w-3 h-3 text-primary" /> :
                  msg.status === "DELIVERED" ? <CheckCheck className="w-3 h-3 text-muted-foreground" /> :
                  <Check className="w-3 h-3 text-muted-foreground" />
                )}
              </div>
            </FadeIn>
          );
        })}
        
        {/* Typing Indicator */}
        {isTyping && (
          <FadeIn className="flex items-start">
            <div className="bg-white/10 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1">
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </FadeIn>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-xl shrink-0">
        <form onSubmit={handleSend} className="flex items-end gap-2 relative">
          
          <Button type="button" variant="ghost" size="sm" className="h-12 w-12 rounded-full shrink-0" onClick={handleImageMock}>
            <ImageIcon className="w-5 h-5"  alt="" />
          </Button>

          <div className="flex-1 relative">
            <Input 
              placeholder="Type a message..."
              className="pr-10 h-12 bg-background/50 border-white/10 rounded-2xl focus-visible:ring-primary/50"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button 
              type="button" 
              onClick={() => setShowEmoji(!showEmoji)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Smile className="w-5 h-5" />
            </button>

            {/* Mock Emoji Picker Popover */}
            {showEmoji && (
              <div className="absolute bottom-14 right-0 bg-background border border-white/10 rounded-xl p-2 shadow-xl z-50 flex gap-2 animate-in fade-in zoom-in-95">
                {["👍", "❤️", "😂", "🔥", "🙏"].map(em => (
                  <button key={em} type="button" onClick={() => insertEmoji(em)} className="text-xl p-2 hover:bg-white/10 rounded-lg transition-colors">
                    {em}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button type="submit" variant="primary" size="sm" className="h-12 w-12 rounded-full shrink-0" disabled={!text.trim()}>
            <Send className="w-5 h-5 -ml-1" />
          </Button>
          
        </form>
      </div>

    </div>
  );
};
