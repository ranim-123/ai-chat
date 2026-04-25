'use client';

import { SendHorizontal, Loader2, Paperclip, Mic } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e?: React.FormEvent) => void;
  isLoading: boolean;
}

export default function MessageInput({ input, setInput, handleSubmit, isLoading }: MessageInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [input]);

  return (
    <footer className="px-3 py-3 md:p-6 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] bg-background/80 backdrop-blur-xl border-t border-border shrink-0 z-20">
      <div className="max-w-4xl mx-auto relative">
        <form
          onSubmit={handleSubmit}
          className="group relative flex items-end gap-1.5 md:gap-2 bg-card border border-border rounded-[1.4rem] md:rounded-4xl p-1.5 md:p-2 pr-2.5 md:pr-3 shadow-lg shadow-black/5 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all duration-300"
        >
          <div className="hidden sm:flex items-center self-center px-2">
            <button
              type="button"
              className="p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              title="Attach files"
            >
              <Paperclip size={20} />
            </button>
          </div>
          
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message AI Assistant..."
            className="w-full max-h-[160px] min-h-[44px] md:min-h-[48px] bg-transparent resize-none py-2.5 md:py-3.5 px-1 focus:outline-none text-sm md:text-[15px] leading-relaxed placeholder:text-muted-foreground/60"
            rows={1}
          />

          <div className="flex items-center gap-1.5 self-center">
            {!input.trim() && (
              <button
                type="button"
                className="p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                title="Voice input"
              >
                <Mic size={18} className="md:w-5 md:h-5" />
              </button>
            )}
            
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`p-2.5 md:p-3 shrink-0 rounded-xl md:rounded-2xl transition-all duration-300 shadow-md ${
                !input.trim() || isLoading
                  ? 'bg-muted text-muted-foreground opacity-50'
                  : 'bg-primary text-primary-foreground hover:scale-105 active:scale-95 shadow-primary/20'
              }`}
            >
              {isLoading ? (
                <Loader2 className="h-[18px] w-[18px] md:h-5 md:w-5 animate-spin" />
              ) : (
                <SendHorizontal className="h-[18px] w-[18px] md:h-5 md:w-5" />
              )}
            </button>
          </div>
        </form>
        
        
      </div>
    </footer>
  );
}
