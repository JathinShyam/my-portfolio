import content from '@/data/content';

export default function Footer() {
  return (
    <footer className="mt-10 w-full px-6 pb-6">
      <div className="mx-auto max-w-[740px]">
        <div className="mb-4 h-px w-full bg-[#e8e4de] dark:bg-[#2e2a24]" />
        <div className="mb-5 flex flex-col gap-2 text-[12.5px] text-[#6b6661] dark:text-[#b3ada4] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] tracking-[0.08em] text-[#9a948d] dark:text-[#847e75]">
              @2026
            </span>
            <a
              href={content.links.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#111111] underline decoration-transparent underline-offset-3 transition-colors duration-200 hover:decoration-current dark:text-[#f2efe9]"
            >
              {content.name}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <span>{content.location},</span>
            <span className="tabular-nums">{content.timezone}</span>
          </div>
        </div>
        <div className="text-center text-[11.5px] font-medium tracking-wide text-[#6f6a63] dark:text-[#8a847b]">
          {content.footerTagline}
        </div>
      </div>
    </footer>
  );
}
