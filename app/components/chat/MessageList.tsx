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
    <section className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8 scrollbar-thin scrollbar-thumb-muted">
      <div className="max-w-4xl mx-auto space-y-8 flex flex-col justify-end min-h-[calc(100vh-220px)]">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex w-full gap-4 animate-fade-in-up ${
              message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${
              message.role === 'user' 
                ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400' 
                : 'bg-primary text-primary-foreground'
            }`}>
              {message.role === 'user' ? <User size={18} /> : <Bot size={18} />}
            </div>
            
            <div
              className={`max-w-[80%] md:max-w-[70%] px-5 py-4 rounded-3xl text-[15px] leading-relaxed shadow-sm transition-all duration-200 ${
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
          <div className="flex w-full gap-4 animate-fade-in-up">
            <div className="shrink-0 w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
              <Bot size={18} />
            </div>
            <div className="px-6 py-5 rounded-3xl bg-card border border-border rounded-tl-none flex items-center gap-2 shadow-sm">
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
