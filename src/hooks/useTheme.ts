import { useEffect, useState, useCallback, useRef } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark';
  });

  const pendingRef = useRef<Theme | null>(null);

  useEffect(() => {
    if (pendingRef.current) {
      pendingRef.current = null;
      return;
    }
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const toggle = useCallback(
    (origin?: { x: number; y: number }) => {
      setTheme((prev) => {
        const next: Theme = prev === 'dark' ? 'light' : 'dark';
        pendingRef.current = next;

        const doc = document as Document & {
          startViewTransition?: (cb: () => void) => { finished: Promise<void> };
        };

        const apply = () => applyTheme(next);

        if (
          doc.startViewTransition &&
          origin &&
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
          document.documentElement.style.setProperty(
            '--theme-transition-x',
            `${origin.x}px`
          );
          document.documentElement.style.setProperty(
            '--theme-transition-y',
            `${origin.y}px`
          );
          const transition = doc.startViewTransition(apply);
          transition.finished.catch(() => apply());
        } else {
          apply();
        }

        return next;
      });
    },
    [applyTheme]
  );

  return { theme, toggle };
}
