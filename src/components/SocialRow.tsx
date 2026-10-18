import { Mail } from 'lucide-react';
import BrandIcon from '@/components/BrandIcon';
import content from '@/data/content';

export default function SocialRow({ centeredOnMobile = true }: { centeredOnMobile?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${
        centeredOnMobile ? 'justify-center md:justify-start' : ''
      }`}
    >
      {content.socials.map((s, i) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className={`flex items-center gap-[6px] rounded-lg px-1.5 py-1.5 text-[12.5px] font-medium text-[#6b6661] transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#b3ada4] dark:hover:bg-white/[0.06] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10 ${
            i === 0 ? '-ml-1.5' : ''
          }`}
        >
          {s.icon === 'mail' ? <Mail size={16} /> : <BrandIcon name={s.icon} size={16} />}
          {s.label}
        </a>
      ))}
    </div>
  );
}
