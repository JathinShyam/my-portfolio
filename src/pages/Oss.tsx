import OssCard from '@/components/OssCard';
import PageHeader from '@/components/PageHeader';
import content from '@/data/content';

export default function Oss() {
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <PageHeader
        title="Open Source"
        intro="been exploring the CNCF world, mostly learning containers and kubernetes the hard way."
      />
      {content.oss.length === 0 ? (
        <p className="text-[15px] text-[#6b6661] dark:text-[#b3ada4]">
          Nothing to show here yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {content.oss.map((entry) => (
            <OssCard key={entry.org} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
