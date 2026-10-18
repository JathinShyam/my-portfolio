import WritingsList from '@/components/WritingsList';
import PageHeader from '@/components/PageHeader';
import content from '@/data/content';

export default function Blogs() {
  const years = [...new Set(content.writings.map((w) => w.year))];

  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <PageHeader title="Writings" intro="Notes from building things — posted here and on Medium." />
      {years.map((year) => (
        <div key={year} className="mb-10">
          <div className="mb-2 text-[13px] text-[#6f6a63] dark:text-[#8a847b]">{year}</div>
          <WritingsList posts={content.writings.filter((w) => w.year === year)} />
        </div>
      ))}
    </div>
  );
}
