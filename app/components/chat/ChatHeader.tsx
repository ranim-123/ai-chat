export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
          AI
        </div>
        <div>
          <h1 className="font-semibold leading-tight">AI Assistant</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Always here to help</p>
        </div>
      </div>
    </header>
  );
}
