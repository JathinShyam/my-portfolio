import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(pct);
      setShowTop(scrollTop > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px]">
        <div
          className="h-full bg-[#847e78] opacity-70 transition-[width] duration-150 ease-out dark:bg-[#9a948b]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e4de] bg-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:border-[#d8d2cb] hover:bg-white focus-visible:ring-2 focus-visible:ring-black/10 dark:border-[#332f28] dark:bg-[#1c1913]/80 dark:hover:border-[#4a453b] dark:hover:bg-[#221f19] dark:focus-visible:ring-white/10 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp size={16} className="text-[#5e5852] dark:text-[#c9c3ba]" />
      </button>
    </>
  );
}
