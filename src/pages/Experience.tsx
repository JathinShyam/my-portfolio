import ExperienceCard from '@/components/ExperienceCard';
import PageHeader from '@/components/PageHeader';
import content from '@/data/content';

export default function Experience() {
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <PageHeader
        title="Work Experience"
        intro="Where I've worked and what I built along the way."
      />
      <div className="flex flex-col gap-4">
        {content.resume.experience.map((item) => (
          <ExperienceCard key={`${item.org}-${item.period}`} item={item} />
        ))}
      </div>
    </div>
  );
}
