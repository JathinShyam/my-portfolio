import Hero from '@/components/Hero';
import SocialRow from '@/components/SocialRow';
import WritingsList from '@/components/WritingsList';
import OssCard from '@/components/OssCard';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import QuoteBlock from '@/components/QuoteBlock';
import { StackSection } from '@/components/StackSection';
import Separator from '@/components/Separator';
import { Link } from 'react-router-dom';
import content from '@/data/content';

export default function Home() {
  const latestPosts = content.writings.slice(0, 3);
  const experienceItems = content.resume.experience;

  return (
    <div className="mx-auto max-w-[960px] px-6 pt-24 md:pt-[140px]">
      {/* Hero + intro stay narrow */}
      <div className="mx-auto max-w-[740px]">
        <Hero />
        <div className="hero-text mt-16" style={{ animationDelay: '80ms' }}>
          <p className="whitespace-pre-line text-[15px] text-[#3a3530] dark:text-[#d7d2ca]">
            {content.hello}
          </p>
        </div>

        <div className="hero-text mt-10" style={{ animationDelay: '160ms' }}>
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#6f6a63] dark:text-[#8a847b]">
            Find me
          </div>
          <SocialRow />
        </div>
      </div>

      <Separator />

      {/* Stack — narrow column for the list */}
      <div className="mx-auto max-w-[740px]">
        <div className="mb-6">
          <div className="mb-1.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#9a948b] dark:text-[#7d766d]">
            <span className="tabular-nums">01</span>
            <span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" />
          </div>
          <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
            {content.stackHeading}
          </h2>
        </div>
        <StackSection />
      </div>

      <Separator />

      {content.oss.length > 0 && (
        <>
          <SectionShell index="02" title="Open Source">
            <div className="flex flex-col gap-4">
              {content.oss.map((entry) => (
                <OssCard key={entry.org} entry={entry} />
              ))}
            </div>
          </SectionShell>
          <Separator />
        </>
      )}

      {experienceItems.length > 0 && (
        <>
          <div>
            <div className="mb-6">
              <div className="mb-1.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#9a948b] dark:text-[#7d766d]">
                <span className="tabular-nums">03</span>
                <span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
                  Experience
                </h2>
                <Link
                  to="/experience"
                  className="group flex items-center gap-1 text-[13px] font-medium text-[#5e5852] transition-colors duration-200 hover:text-[#111111] dark:text-[#c9c3ba] dark:hover:text-[#f2efe9]"
                >
                  View All
                  <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {experienceItems.map((item, i) => (
                <ExperienceCard key={`${item.org}-${item.period}`} item={item} last={i === experienceItems.length - 1} />
              ))}
            </div>
          </div>
          <Separator />
        </>
      )}

      {content.projects.length > 0 && (
        <>
          <div>
            <div className="mb-6">
              <div className="mb-1.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#9a948b] dark:text-[#7d766d]">
                <span className="tabular-nums">04</span>
                <span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
                  Projects
                </h2>
                <Link
                  to="/projects"
                  className="group flex items-center gap-1 text-[13px] font-medium text-[#5e5852] transition-colors duration-200 hover:text-[#111111] dark:text-[#c9c3ba] dark:hover:text-[#f2efe9]"
                >
                  View All
                  <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {content.projects.slice(0, 4).map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </div>
          <Separator />
        </>
      )}

      {latestPosts.length > 0 && (
        <>
          <div>
            <div className="mb-6">
              <div className="mb-1.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#9a948b] dark:text-[#7d766d]">
                <span className="tabular-nums">05</span>
                <span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" />
              </div>
            </div>
            <WritingsList posts={latestPosts} viewAllTo="/blogs" />
          </div>
          <Separator />
        </>
      )}

      <div className="hero-text mx-auto max-w-[740px]">
        <p className="text-[15px] text-[#3a3530] dark:text-[#d7d2ca]">
          {content.personal.text}
        </p>
        <div className="mt-3 flex items-baseline gap-x-2.5 text-[13px] text-[#847e78] dark:text-[#9a948b]">
          {content.personal.links.map((link, i) => (
            <span key={link.href} className="flex items-baseline gap-x-2.5">
              {i > 0 && <span className="text-[#d4cfc8] dark:text-[#4a453b]">·</span>}
              <Link
                to={link.href}
                className="group flex items-center gap-0.5 transition-colors duration-200 hover:text-[#111111] dark:hover:text-[#f2efe9]"
              >
                {link.label}
                <svg
                  viewBox="0 0 24 24"
                  width={13}
                  height={13}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-mb-[1px] rotate-[16deg] transition-transform duration-200 group-hover:rotate-[28deg] group-hover:-translate-y-px"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[740px]">
        <QuoteBlock />
      </div>
    </div>
  );
}
