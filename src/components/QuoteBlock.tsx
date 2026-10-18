import { Quote } from 'lucide-react';
import content from '@/data/content';

export default function QuoteBlock() {
  return (
    <div className="flex justify-center pb-16">
      <div className="max-w-[560px] text-center">
        <Quote size={20} className="mb-6 inline-block rotate-180 opacity-30 text-[#6b6661] dark:text-[#b3ada4]" />
        <p className="mb-8 text-[15px] font-medium leading-[1.75] tracking-tight text-[#444444] dark:text-[#d7d2ca] md:text-[16px]">
          {content.quote.text}
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-[#e8e4de] dark:bg-[#2e2a24]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6f6a63] dark:text-[#8a847b]">
            {content.quote.author}
          </span>
          <span className="h-px w-6 bg-[#e8e4de] dark:bg-[#2e2a24]" />
        </div>
      </div>
    </div>
  );
}
