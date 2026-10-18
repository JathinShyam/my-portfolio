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

  return (
    <div className="mx-auto max-w-[740px] px-6 pt-24 md:pt-[140px]">
      <Hero />
      <div className="hero-text mt-16" style={{ animationDelay: '80ms' }}>
        <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#6f6a63] dark:text-[#8a847b]">
          Find me
        </div>
        <SocialRow />
      </div>

      <div className="hero-text mt-10" style={{ animationDelay: '160ms' }}>
        <p className="whitespace-pre-line text-[15px] text-[#3a3530] dark:text-[#d7d2ca]">
          {content.hello}
        </p>
      </div>

      <div className="hero-text mt-8" style={{ animationDelay: '240ms' }}>
        <p className="text-[15px] text-[#3a3530] dark:text-[#d7d2ca]">
          {content.personal.text}
        </p>
        <div className="mt-3 flex items-baseline gap-x-2.5 text-[13px] text-[#847e78] dark:text-[#9a948b]">
          {content.personal.links.map((link, i) => (
            <span key={link.href} className="flex items-baseline gap-x-2.5">
              {i > 0 && <span className="text-[#d4cfc8] dark:text-[#4a453b]">·</span>}
              <Link
                to={link.href}
                className="transition-colors duration-200 hover:text-[#111111] dark:hover:text-[#f2efe9]"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <Separator />

      <StackSection />
      <Separator />

      {content.oss.length > 0 && (
        <>
          <div>
            <h2 className="-ml-[2px] mb-4 font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
              Open Source
            </h2>
            <div className="flex flex-col gap-4">
              {content.oss.map((entry) => (
                <OssCard key={entry.org} entry={entry} />
              ))}
            </div>
          </div>
          <Separator />
        </>
      )}

      {latestPosts.length > 0 && (
        <>
          <WritingsList posts={latestPosts} viewAllTo="/blogs" />
          <Separator />
        </>
      )}

      {content.resume.experience.length > 0 && (
        <>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
                Experience
              </h2>
              <Link
                to="/experience"
                className="flex items-center gap-1 text-[14px] font-medium text-[#5e5852] transition-colors duration-200 hover:text-[#111111] dark:text-[#c9c3ba] dark:hover:text-[#f2efe9]"
              >
                View All
                <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {content.resume.experience.map((item) => (
                <ExperienceCard key={`${item.org}-${item.period}`} item={item} />
              ))}
            </div>
          </div>
          <Separator />
        </>
      )}

      {content.projects.length > 0 && (
        <>
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
                Projects
              </h2>
              <Link
                to="/projects"
                className="flex items-center gap-1 text-[14px] font-medium text-[#5e5852] transition-colors duration-200 hover:text-[#111111] dark:text-[#c9c3ba] dark:hover:text-[#f2efe9]"
              >
                View All
                <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
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

      <QuoteBlock />
    </div>
  );
}
