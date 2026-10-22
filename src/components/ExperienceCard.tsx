import TagIcon from '@/components/ProjectTag';

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  stack: string;
  points: string[];
};

export default function ExperienceCard({ item, last = false }: { item: ExperienceItem; last?: boolean }) {
  const tags = item.stack.split(',').map((s) => s.trim()).filter(Boolean);
  return (
    <div className="group relative flex gap-4 pl-6 sm:gap-6 sm:pl-7">
      {/* timeline rail */}
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-[#e8e4de] dark:bg-[#2e2a24]" aria-hidden>
        {!last && <div className="absolute left-0 top-0 h-full w-px bg-[#e8e4de] dark:bg-[#2e2a24]" />}
      </div>
      {/* dot */}
      <span
        className="absolute left-0 top-1.5 -translate-x-[3.5px] flex h-[9px] w-[9px] items-center justify-center"
        aria-hidden
      >
        <span className="absolute h-[9px] w-[9px] rounded-full border border-[#c4beb6] bg-[#fcfbf9] dark:border-[#4a453b] dark:bg-[#1c1913]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[#847e78] transition-colors duration-300 group-hover:bg-[#5e5852] dark:bg-[#9a948b] dark:group-hover:bg-[#c9c3ba]" />
      </span>

      <div className="flex-1 rounded-2xl border border-[#e8e4de] bg-[#fcfbf9] p-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8d2cb] hover:bg-white hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.12)] dark:border-[#2e2a24] dark:bg-[#171410] dark:hover:border-[#4a453b] dark:hover:bg-[#1c1913] dark:hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.5)]">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <div className="text-[16px] font-medium text-[#111111] dark:text-[#f2efe9]">
              {item.role}
            </div>
            <div className="mt-0.5 text-[12.5px] text-[#847e78] dark:text-[#9a948b]">
              {item.org}
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-[#e8e4de] bg-[#f3eee7] px-2.5 py-0.5 text-[11.5px] font-medium tabular-nums text-[#5e5852] dark:border-[#332d25] dark:bg-[#221e18] dark:text-[#c9c3ba]">
            {item.period}
          </span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {item.points.map((p) => (
            <li key={p} className="flex gap-2.5 text-[13px] leading-6 text-[#5e5852] dark:text-[#c9c3ba]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4beb6] dark:bg-[#6a645c]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#ece7e1] pt-3 dark:border-[#2a2620]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-md border border-dashed border-[#e8e4de] px-2 py-0.5 text-[11.5px] font-medium text-[#7a746e] transition-colors duration-200 hover:border-[#d8d2cb] hover:text-[#111] dark:border-[#2e2a24] dark:text-[#9d978e] dark:hover:border-[#4a453b] dark:hover:text-[#f2efe9]"
            >
              <TagIcon tag={tag} size={13} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
