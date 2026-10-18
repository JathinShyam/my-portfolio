import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { OssEntry } from '@/data/content';

export default function OssCard({ entry }: { entry: OssEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[#e8e4de] bg-[#fcfbf9] p-[18px] transition-all duration-300 hover:border-[#d8d2cb] hover:bg-white dark:border-[#2e2a24] dark:bg-[#171410] dark:hover:border-[#4a453b] dark:hover:bg-[#1c1913]">
      <div className="mb-3 flex items-center gap-3">
        <img
          src={entry.orgAvatar}
          alt={`${entry.org} logo`}
          className="h-10 w-10 rounded-lg border border-[#e8e4de] bg-white object-cover dark:border-[#3a352c] dark:bg-[#171410]"
        />
        <div>
          <a
            href={entry.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-medium text-[#111111] hover:underline dark:text-[#f2efe9]"
          >
            {entry.org}
          </a>
          <div className="text-[12.5px] text-[#847e78] dark:text-[#9a948b]">{entry.role}</div>
        </div>
      </div>

      <p className="mb-4 text-[13.5px] leading-[1.65] text-[#5e5852] dark:text-[#c9c3ba]">
        {entry.description}
      </p>

      <ol className="mb-4 border-l border-[#e8e4de] pl-4 dark:border-[#3a352c]">
        {entry.milestones.map((m) => (
          <li key={`${m.date}-${m.label}`} className="mb-3 last:mb-0">
            <div className="flex items-baseline gap-2">
              <span className="text-[11px] tabular-nums text-[#847e78] dark:text-[#9a948b]">{m.date}</span>
              <span className="text-[12px] font-semibold uppercase tracking-wide text-[#222222] dark:text-[#e8e4dc]">
                {m.label}
              </span>
            </div>
            <p className="text-[13px] leading-6 text-[#5e5852] dark:text-[#c9c3ba]">{m.text}</p>
          </li>
        ))}
      </ol>

      {entry.contributions.length > 0 && (
        <div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-1 text-[13px] font-medium text-[#5e5852] transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:text-[#c9c3c0] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/40"
          >
            Contributions
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
          {open && (
            <ul className="mt-2 flex flex-col gap-1.5">
              {entry.contributions.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#5e5852] underline underline-offset-3 hover:text-[#111111] dark:text-[#c9c3c0] dark:hover:text-[#f2efe9]"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
