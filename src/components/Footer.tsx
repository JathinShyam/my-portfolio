import { useEffect, useState } from 'react';
import { ArrowUpRight, Clock3, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandIcon from '@/components/BrandIcon';
import content from '@/data/content';

export default function Footer() {
  const [time, setTime] = useState(() => new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date()));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="mt-24 w-full px-6 pb-8 pt-10">
      <div className="mx-auto max-w-[960px] border-t border-[#e8e4de] pt-10 dark:border-[#2e2a24]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="font-serif text-[20px] text-[#222222] dark:text-[#f0ede7]">{content.name}</div>
            <p className="mt-2 max-w-[250px] text-[13px] leading-6 text-[#6f6a63] dark:text-[#aaa39a]">
              Backend engineer building reliable systems and practical tools.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#d8e6dc] bg-[#f2f8f3] px-3 py-1.5 text-[12px] font-medium text-[#3f6d4d] dark:border-[#294333] dark:bg-[#17231a] dark:text-[#9ac4a5]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5e9a70]" aria-hidden />
              Open to opportunities
            </div>
          </div>

          <div>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#847e78] dark:text-[#9a948b]">Explore</div>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-[#5e5852] dark:text-[#c9c3ba]">
              {[
                ['Projects', '/projects'],
                ['Writings', '/blogs'],
                ['Work', '/experience'],
                ['Resume', '/resume'],
                ['Anime', '/anime'],
                ['Books', '/books'],
                ['Manga', '/manga'],
              ].map(([label, href]) => (
                <Link key={href} to={href} className="transition-colors hover:text-[#2563eb] dark:hover:text-[#93c5fd]">{label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#847e78] dark:text-[#9a948b]">Connect</div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-[13px] text-[#5e5852] dark:text-[#c9c3ba]">
              {content.socials.map((social) => (
                <a key={social.label} href={social.href} target={social.href.startsWith('mailto:') ? undefined : '_blank'} rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className="flex items-center gap-2 transition-colors hover:text-[#2563eb] dark:hover:text-[#93c5fd]">
                  {social.icon === 'mail' ? <Mail size={14} /> : <BrandIcon name={social.icon} size={14} />}
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#ece7e1] pt-5 text-[11.5px] text-[#847e78] dark:border-[#2a2620] dark:text-[#9a948b] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© 2026 {content.name}</span>
            <span className="inline-flex items-center gap-1.5"><Clock3 size={13} /> IST (UTC+5:30) {time}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={content.links.profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[#2563eb] dark:hover:text-[#93c5fd]">Source on GitHub <ArrowUpRight size={13} /></a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-colors hover:text-[#2563eb] dark:hover:text-[#93c5fd]">Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
