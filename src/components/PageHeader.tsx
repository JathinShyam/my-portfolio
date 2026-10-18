import { Link } from 'react-router-dom';

export default function PageHeader({
  title,
  intro,
  backTo = '/',
  backLabel = 'Back to Home',
}: {
  title: string;
  intro?: string;
  backTo?: string;
  backLabel?: string;
}) {
  return (
    <div className="mb-12">
      <Link
        to={backTo}
        className="mb-8 inline-block text-[14px] text-[#847e78] transition-colors duration-200 hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#9a948b] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10"
      >
        ← {backLabel}
      </Link>
      <h1 className="mb-2 font-serif text-[32px] font-normal tracking-tight text-[#111111] dark:text-[#f2efe9]">
        {title}
      </h1>
      {intro && (
        <p className="text-[15px] text-[#6b6661] dark:text-[#b3ada4]">{intro}</p>
      )}
    </div>
  );
}
