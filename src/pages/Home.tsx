import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SocialRow from '@/components/SocialRow';
import WritingsList from '@/components/WritingsList';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import QuoteBlock from '@/components/QuoteBlock';
import { StackSection } from '@/components/StackSection';
import Separator from '@/components/Separator';
import content from '@/data/content';

export default function Home() {
  const latestPosts = content.writings.slice(0, 3);
  const experienceItems = content.resume.experience;

  return (
    <div className="mx-auto max-w-[960px] px-6 pt-24 md:pt-[140px]">
      <div className="mx-auto max-w-[740px]">
        <Hero />
        <div className="hero-text mt-16" style={{ animationDelay: '80ms' }}>
          <p className="whitespace-pre-line text-[15px] text-[#3a3530] dark:text-[#d7d2ca]">{content.hello}</p>
        </div>
        <div className="hero-text mt-10" style={{ animationDelay: '160ms' }}>
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.15em] text-[#5e5852] dark:text-[#c9c3ba]">Find me</div>
          <SocialRow />
        </div>
      </div>

      <Separator />

      {content.projects.length > 0 && (
        <>
          <section>
            <div className="mb-6">
              <div className="mb-1.5 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-[#5e5852] dark:text-[#c9c3ba]"><span className="tabular-nums">01</span><span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" /></div>
              <div className="flex items-center justify-between">
                <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">Projects</h2>
                <Link to="/projects" className="group flex items-center gap-1 text-[13px] font-medium text-[#5e5852] transition-colors hover:text-[#2563eb] dark:text-[#c9c3ba] dark:hover:text-[#93c5fd]">View All <span aria-hidden>↗</span></Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {content.projects.filter((project) => project.name === 'Pulse' || project.name === 'SentinelPay').map((project) => <ProjectCard key={project.name} project={project} />)}
            </div>
          </section>
          <Separator />
        </>
      )}

      {experienceItems.length > 0 && (
        <>
          <section>
            <div className="mb-6">
              <div className="mb-1.5 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-[#5e5852] dark:text-[#c9c3ba]"><span className="tabular-nums">02</span><span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" /></div>
              <div className="flex items-center justify-between">
                <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">Experience</h2>
                <Link to="/experience" className="group flex items-center gap-1 text-[13px] font-medium text-[#5e5852] transition-colors hover:text-[#2563eb] dark:text-[#c9c3ba] dark:hover:text-[#93c5fd]">View All <span aria-hidden>↗</span></Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">{experienceItems.map((item, index) => <ExperienceCard key={`${item.org}-${item.period}`} item={item} last={index === experienceItems.length - 1} />)}</div>
          </section>
          <Separator />
        </>
      )}

      {latestPosts.length > 0 && (
        <>
          <section>
            <div className="mb-6">
              <div className="mb-1.5 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-[#5e5852] dark:text-[#c9c3ba]"><span className="tabular-nums">03</span><span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" /></div>
            </div>
            <WritingsList posts={latestPosts} viewAllTo="/blogs" />
          </section>
          <Separator />
        </>
      )}

      <section>
        <div className="mb-6">
          <div className="mb-1.5 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-[#5e5852] dark:text-[#c9c3ba]"><span className="tabular-nums">04</span><span className="h-px w-6 bg-[#d8d2cb] dark:bg-[#3a352c]" /></div>
          <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">{content.stackHeading}</h2>
        </div>
        <StackSection />
      </section>

      <Separator />

      <div className="mx-auto max-w-[740px]">
        <p className="text-[15px] text-[#3a3530] dark:text-[#d7d2ca]">{content.personal.text}</p>
        <div className="mt-3 flex items-baseline gap-x-2.5 text-[13px] text-[#5e5852] dark:text-[#c9c3ba]">
          {content.personal.links.map((link, index) => <span key={link.href} className="flex items-baseline gap-x-2.5">{index > 0 && <span>·</span>}<Link to={link.href} className="transition-colors hover:text-[#2563eb] dark:hover:text-[#93c5fd]">{link.label} ↗</Link></span>)}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[740px]"><QuoteBlock /></div>
    </div>
  );
}
