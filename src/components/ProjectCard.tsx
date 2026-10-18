import BrandIcon from '@/components/BrandIcon';
import type { Project } from '@/data/content';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex min-h-[208px] flex-col rounded-2xl border border-[#e8e4de] bg-[#fcfbf9] p-[18px] transition-all duration-300 hover:border-[#d8d2cb] hover:bg-white dark:border-[#2e2a24] dark:bg-[#171410] dark:hover:border-[#4a453b] dark:hover:bg-[#1c1913]">
      <h3 className="mb-3 text-[17px] font-medium leading-snug text-[#1a1a1a] dark:text-[#f2efe9]">
        {project.name}
      </h3>
      <p className="mb-5 text-[13.5px] leading-[1.65] text-[#5e5852] dark:text-[#c9c3ba]">
        {project.description}
      </p>
      <div className="mb-4 h-px bg-[#ece7e1] dark:bg-[#2a2620]" />
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11.5px] font-medium text-[#6b6661] dark:text-[#b3ada4]">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 text-[13px] font-medium text-[#111111] transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#f2efe9] dark:focus-visible:ring-white/10"
        >
          <BrandIcon name="github" size={16} />
          Repo
        </a>
      </div>
    </div>
  );
}
