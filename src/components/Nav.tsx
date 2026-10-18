import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoMark from '@/components/LogoMark';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Writings', to: '/blogs' },
  { label: 'Projects', to: '/projects' },
  { label: 'oss', to: '/oss' },
];

export default function Nav() {
  const [expanded, setExpanded] = useState(true);
  const { pathname } = useLocation();

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center">
      <header className="pointer-events-auto flex w-full max-w-[1200px] items-center px-4 py-6 md:px-8">
        <div className="flex h-[46px] items-center rounded-full border border-[rgba(229,231,235,0.6)] bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-md dark:border-[rgba(255,255,255,0.1)] dark:bg-black/60">
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={expanded}
            className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-[#212121] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#f2efe9] dark:focus-visible:ring-white/10"
          >
            <LogoMark />
          </button>
          <div
            className="overflow-hidden whitespace-nowrap transition-all duration-300"
            style={{ maxWidth: expanded ? 340 : 0, opacity: expanded ? 1 : 0 }}
          >
            <nav className="flex items-center gap-6 pl-2 pr-4">
              {links.map((link) => {
                const active =
                  link.to === '/' ? pathname === '/' : pathname.startsWith(link.to);
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={`text-[14px] font-medium transition-colors duration-200 hover:text-black dark:hover:text-[#f2efe9] ${
                      active
                        ? 'font-bold text-black dark:text-[#f2efe9]'
                        : 'text-[#6b6661] dark:text-[#b3ada4]'
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
