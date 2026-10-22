import ExperienceCard from '@/components/ExperienceCard';
import PageHeader from '@/components/PageHeader';
import content from '@/data/content';

export default function Experience() {
  const items = content.resume.experience;
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <PageHeader
        title="Work Experience"
        intro="Where I've worked and what I built along the way."
      />
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <ExperienceCard key={`${item.org}-${item.period}`} item={item} last={i === items.length - 1} />
        ))}
      </div>
    </div>
  );
}
