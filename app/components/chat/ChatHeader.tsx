'use client';

import { ThemeToggle } from '../ThemeToggle';
import { Bot, Sparkles } from 'lucide-react';

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-20 shrink-0">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            <Bot size={24} strokeWidth={2.5} />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-background rounded-full" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-lg tracking-tight">AI Assistant</h1>
            <div className="px-1.5 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={10} />
              Pro
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Online & Ready to help
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}
