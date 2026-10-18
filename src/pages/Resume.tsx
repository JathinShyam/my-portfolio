import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '@/data/content';

export default function Resume() {
  const r = content.resume;
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <div className="mb-12 flex items-center justify-between">
        <Link
          to="/"
          className="text-[14px] text-[#847e78] transition-colors duration-200 hover:text-[#111111] dark:text-[#9a948b] dark:hover:text-[#f2efe9]"
        >
          ← Back to Home
        </Link>
        <a
          href={content.resumeUrl}
          download={content.resumeFileName}
          className="flex items-center gap-2 rounded-full border border-[#e8e4de] bg-white px-[18px] py-2 text-[12.5px] font-semibold text-[#222222] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-[#dcd8d2] hover:bg-[#faf9f8] dark:border-[#332f28] dark:bg-[#1c1913] dark:text-[#f0ede7] dark:hover:border-[#4a453b] dark:hover:bg-[#221f19]"
        >
          <Download size={16} className="text-[#847e78] dark:text-[#9a948b]" />
          Download
        </a>
      </div>

      <h1 className="mb-2 font-serif text-[32px] font-normal tracking-tight text-[#111111] dark:text-[#f2efe9]">
        {content.meta.title}
      </h1>
      <p className="mb-10 text-[14px] text-[#847e78] dark:text-[#9a948b]">
        {content.tagline} · {content.location}
      </p>

      <h2 className="mb-4 font-serif text-[22px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
        Experience
      </h2>
      <div className="mb-10 flex flex-col gap-8">
        {r.experience.map((job) => (
          <div key={job.org + job.period}>
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div className="text-[15px] font-medium text-[#111111] dark:text-[#f2efe9]">
                {job.role} · {job.org}
              </div>
              <div className="text-[11.5px] tabular-nums text-[#847e78] dark:text-[#9a948b]">
                {job.period}
              </div>
            </div>
            <div className="mt-1 text-[11.5px] text-[#847e78] dark:text-[#9a948b]">{job.stack}</div>
            <ul className="mt-3 flex flex-col gap-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2 text-[13.5px] leading-6 text-[#5e5852] dark:text-[#c9c3ba]">
                  <span className="mt-0 text-[#d4cfc8] dark:text-[#4a453b]">·</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-10 h-px w-full bg-[#ece7e1] dark:bg-[#2a2620]" />

      <h2 className="mb-4 font-serif text-[22px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
        Skills
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {Object.entries(r.skills).map(([group, items]) => (
          <div key={group}>
            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-[#a9a39d] dark:text-[#78726a]">
              {group}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-[#3a3530] dark:text-[#d7d2ca]">
              {items.join(' · ')}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-10 h-px w-full bg-[#ece7e1] dark:bg-[#2a2620]" />

      <h2 className="mb-4 font-serif text-[22px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
        Education
      </h2>
      <div className="mb-10 flex flex-col gap-4">
        {r.education.map((e) => (
          <div key={e.org}>
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div className="text-[15px] font-medium text-[#111111] dark:text-[#f2efe9]">
                {e.role}
              </div>
              <div className="text-[11.5px] tabular-nums text-[#847e78] dark:text-[#9a948b]">
                {e.period}
              </div>
            </div>
            <div className="mt-0.5 text-[13px] text-[#5e5852] dark:text-[#c9c3ba]">
              {e.org} · {e.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-10 h-px w-full bg-[#ece7e1] dark:bg-[#2a2620]" />

      <h2 className="mb-4 font-serif text-[22px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
        Achievements
      </h2>
      <ul className="mb-10 flex flex-col gap-2">
        {r.achievements.map((a) => (
          <li key={a} className="flex gap-2 text-[13.5px] leading-6 text-[#5e5852] dark:text-[#c9c3ba]">
            <span className="text-[#d4cfc8] dark:text-[#4a453b]">·</span>
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}
