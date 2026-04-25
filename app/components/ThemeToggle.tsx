'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-secondary border border-border animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-xl bg-secondary border border-border hover:bg-accent transition-all duration-200 shadow-sm"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] text-muted-foreground transition-all duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-[18px] w-[18px] text-muted-foreground transition-all duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
