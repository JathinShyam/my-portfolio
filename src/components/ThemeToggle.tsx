import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-[#6b6661] transition-colors duration-200 hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#b3ada4] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
