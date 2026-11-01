import { ExternalLink } from 'lucide-react';
import BrandIcon from '@/components/BrandIcon';
import TagIcon from '@/components/ProjectTag';
import type { Project } from '@/data/content';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex min-h-[208px] flex-col rounded-2xl border border-[#e8e4de] bg-[#fcfbf9] p-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8d2cb] hover:bg-white hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.12)] dark:border-[#2e2a24] dark:bg-[#171410] dark:hover:border-[#4a453b] dark:hover:bg-[#1c1913] dark:hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.5)]">
      <span className="pointer-events-none absolute left-0 top-[18px] h-6 w-[2px] origin-top scale-y-0 rounded-full bg-[#847e78] transition-transform duration-300 group-hover:scale-y-100 dark:bg-[#9a948b]" aria-hidden />
      <h3 className="mb-3 text-[17px] font-medium leading-snug text-[#1a1a1a] dark:text-[#f2efe9]">
        {project.name}
      </h3>
      <p className="mb-5 text-[13.5px] leading-[1.65] text-[#5e5852] dark:text-[#c9c3ba]">
        {project.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-md border border-dashed border-[#e8e4de] px-2 py-0.5 text-[11.5px] font-medium text-[#7a746e] transition-colors duration-200 hover:border-[#d8d2cb] hover:text-[#111] dark:border-[#2e2a24] dark:text-[#9d978e] dark:hover:border-[#4a453b] dark:hover:text-[#f2efe9]"
          >
            <TagIcon tag={tag} size={13} />
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/repo flex w-fit items-center gap-2 text-[13px] font-medium text-[#111111] transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#f2efe9] dark:focus-visible:ring-white/10"
        >
          <BrandIcon name="github" size={16} />
          Repo
          <ExternalLink size={13} className="transition-transform duration-200 group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5" />
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/live flex w-fit items-center gap-2 text-[13px] font-medium text-[#111111] transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#f2efe9] dark:focus-visible:ring-white/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5e8b72] dark:bg-[#78aa8c]" aria-hidden />
            Live Demo
            <ExternalLink size={13} className="transition-transform duration-200 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}
