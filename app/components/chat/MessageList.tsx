'use client';

import { useEffect, useRef } from 'react';
import { User, Bot } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <section className="flex-1 overflow-y-auto px-3 py-4 md:p-6 space-y-6 scrollbar-thin scrollbar-thumb-muted">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 flex flex-col justify-end min-h-full">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex w-full gap-2.5 md:gap-4 animate-fade-in-up ${
              message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={`shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-xl flex items-center justify-center shadow-sm ${
              message.role === 'user' 
                ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400' 
                : 'bg-primary text-primary-foreground'
            }`}>
              {message.role === 'user' ? <User size={16} className="md:w-[18px] md:h-[18px]" /> : <Bot size={16} className="md:w-[18px] md:h-[18px]" />}
            </div>
            
            <div
              className={`max-w-[88%] sm:max-w-[82%] md:max-w-[70%] px-3.5 py-3 md:px-5 md:py-4 rounded-2xl md:rounded-3xl text-sm md:text-[15px] leading-relaxed shadow-sm transition-all duration-200 ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-card border border-border rounded-tl-none'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex w-full gap-2.5 md:gap-4 animate-fade-in-up">
            <div className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
              <Bot size={16} className="md:w-[18px] md:h-[18px]" />
            </div>
            <div className="px-4 py-3 md:px-6 md:py-5 rounded-2xl md:rounded-3xl bg-card border border-border rounded-tl-none flex items-center gap-2 shadow-sm">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="h-4 shrink-0" />
      </div>
    </section>
  );
}
