import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoMark from '@/components/LogoMark';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Work', to: '/experience' },
  { label: 'Writings', to: '/blogs' },
];

export default function Nav() {
  const [expanded, setExpanded] = useState(() => typeof window === 'undefined' || window.innerWidth >= 768);
  const { pathname } = useLocation();

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center">
      <header className="pointer-events-auto flex w-full max-w-[1200px] items-start px-4 py-6 md:px-8">
        <div className="relative flex h-[46px] items-center rounded-full border border-[rgba(229,231,235,0.6)] bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-md dark:border-[rgba(255,255,255,0.1)] dark:bg-black/60">
          <button
            onClick={() => setExpanded((value) => !value)}
            aria-label={expanded ? 'Close navigation' : 'Open navigation'}
            aria-expanded={expanded}
            className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-[#212121] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#2563eb] dark:text-[#f2efe9]"
          >
            <LogoMark />
          </button>
          <button
            onClick={() => setExpanded((value) => !value)}
            aria-label={expanded ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={expanded}
            className="mr-1 flex h-8 w-8 items-center justify-center rounded-full text-[#5e5852] sm:hidden dark:text-[#c9c3ba]"
          >
            {expanded ? <X size={16} /> : <Menu size={16} />}
          </button>
          <div
            className={`transition-all duration-300 max-sm:absolute max-sm:left-0 max-sm:top-[54px] max-sm:w-[220px] max-sm:rounded-2xl max-sm:border max-sm:border-[#e8e4de] max-sm:bg-white/95 max-sm:p-4 max-sm:shadow-lg max-sm:backdrop-blur-md dark:max-sm:border-[#332f28] dark:max-sm:bg-[#1c1913]/95 ${expanded ? 'max-w-[340px] opacity-100 max-sm:max-w-[220px]' : 'max-w-0 overflow-hidden opacity-0 max-sm:max-w-0'}`}
          >
            <nav className="flex items-center gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-3" aria-label="Primary navigation">
              {links.map((link) => {
                const active = link.to === '/' ? pathname === '/' : pathname.startsWith(link.to);
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => window.innerWidth < 768 && setExpanded(false)}
                    className={`text-[14px] font-medium transition-colors duration-200 hover:text-[#2563eb] dark:hover:text-[#93c5fd] ${
                      active ? 'font-bold text-[#2563eb] dark:text-[#93c5fd]' : 'text-[#6b6661] dark:text-[#b3ada4]'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>
          </div>
          <div className="h-5 w-px bg-gray-200/60 dark:bg-white/10" />
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
