import { useEffect, useRef } from 'react';

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
    <section className="flex-1 overflow-y-auto p-4 pt-6 space-y-6">
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col justify-end min-h-[calc(100vh-200px)]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={"flex w-full " + (message.role === 'user' ? 'justify-end' : 'justify-start')}
          >
            <div
              className={"max-w-[85%] px-5 py-3.5 rounded-2xl shadow-sm text-[15px] leading-relaxed " + (message.role === 'user' ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-bl-sm')}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex w-full justify-start">
            <div className="max-w-[85%] px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-bl-sm flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="h-px shrink-0" />
      </div>
    </section>
  );
}
