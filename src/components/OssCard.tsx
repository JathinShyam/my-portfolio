import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { OssEntry } from '@/data/content';

export default function OssCard({ entry }: { entry: OssEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[#e8e4de] bg-[#fcfbf9] p-[18px] transition-all duration-300 hover:border-[#d8d2cb] hover:bg-white dark:border-[#2e2a24] dark:bg-[#171410] dark:hover:border-[#4a453b] dark:hover:bg-[#1c1913]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <a
          href={entry.orgUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <img
            src={entry.orgAvatar}
            alt={entry.org}
            className="h-8 w-8 rounded-md border border-[#e8e4de] object-cover dark:border-white/10"
          />
          <div>
            <div className="text-[16px] font-medium text-[#111111] dark:text-[#f2efe9]">
              {entry.org}
            </div>
            <div className="mt-0.5 text-[12.5px] text-[#847e78] dark:text-[#9a948b]">
              {entry.description}
            </div>
          </div>
        </a>
        <span className="shrink-0 rounded-full border border-[#e8e4de] bg-[#f3eee7] px-2.5 py-0.5 text-[11.5px] font-medium text-[#5e5852] dark:border-[#332d25] dark:bg-[#221e18] dark:text-[#c9c3ba]">
          {entry.role}
        </span>
      </div>

      <ol className="ml-3 border-l border-[#ece7e1] dark:border-[#2a2620]">
        {entry.milestones.map((m, i) => {
          const isNewest = i === 0;
          return (
            <li key={m.label} className="relative pb-4 pl-5 last:pb-0">
              <span
                className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  isNewest
                    ? 'bg-[#111111] dark:bg-[#f2efe9]'
                    : 'border-[1.5px] border-[#c4beb6] bg-[#fcfbf9] dark:border-[#6a645c] dark:bg-[#171410]'
                }`}
              />
              <div className="flex items-baseline gap-3">
                <span className="text-[11.5px] font-medium text-[#847e78] dark:text-[#9a948b]">
                  {m.date}
                </span>
                <span
                  className={`text-[13.5px] font-medium ${
                    isNewest
                      ? 'text-[#111111] dark:text-[#f2efe9]'
                      : 'text-[#3a3530] dark:text-[#d7d2ca]'
                  }`}
                >
                  {m.label}
                </span>
              </div>
              <p className="mt-1 text-[13px] leading-6 text-[#5e5852] dark:text-[#c9c3ba]">
                {m.text}
              </p>
            </li>
          );
        })}
      </ol>

      {entry.contributions.length > 0 && (
        <div className="mt-5 border-t border-[#ece7e1] pt-4 dark:border-[#2a2620]">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#7a746e] transition-colors duration-200 hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#9d978e] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10"
          >
            Contributions
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
          {open && (
            <ul className="mt-3 flex flex-col gap-2">
              {entry.contributions.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium text-[#3a3530] underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-current dark:text-[#d7d2ca]"
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
