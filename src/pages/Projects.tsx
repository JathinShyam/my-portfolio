import ProjectCard from '@/components/ProjectCard';
import PageHeader from '@/components/PageHeader';
import content from '@/data/content';

export default function Projects() {
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <PageHeader
        title="Projects"
        intro="Things I've built — mostly backend systems, with a couple of Android and React Native detours."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {content.projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}
