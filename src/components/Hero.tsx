import { useEffect, useState } from 'react';
import { RotateCw, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '@/data/content';

function AvatarWithFallback({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#f3eee7] dark:bg-[#221e18]">
        <span className="font-serif text-4xl text-[#6b6661] dark:text-[#b3ada4]">{alt.charAt(0)}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = content.taglines[taglineIndex];
    if (!deleting && typed === full) {
      const hold = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(hold);
    }
    if (deleting && typed === '') {
      setDeleting(false);
      setTaglineIndex((i) => (i + 1) % content.taglines.length);
      return;
    }
    const step = setTimeout(
      () => {
        setTyped(deleting ? full.slice(0, typed.length - 1) : full.slice(0, typed.length + 1));
      },
      deleting ? 35 : 70,
    );
    return () => clearTimeout(step);
  }, [typed, deleting, taglineIndex]);

  return (
    <div className="flex flex-col items-center gap-9 text-center md:flex-row md:items-start md:gap-12 md:text-left">
      <div className="relative shrink-0">
        <div
          onClick={() => setFlipped((v) => !v)}
          className="hero-avatar group relative h-[132px] w-[132px] cursor-pointer overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-md ring-1 ring-inset ring-black/10 dark:ring-white/10 md:h-[142px] md:w-[142px]"
        >
          <AvatarWithFallback
            key={flipped ? 'alt' : 'main'}
            src={flipped ? content.avatarAltUrl : content.avatarUrl}
            alt={content.name}
          />
        </div>
        <button
          onClick={() => setFlipped((v) => !v)}
          aria-label="Flip avatar"
          className="absolute -right-8 -top-5 flex h-8 w-8 items-center justify-center rounded-full text-[#9ca3af] transition-colors duration-200 hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#7d766d] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10"
        >
          <RotateCw
            size={15}
            className={`transition-transform duration-300 ${flipped ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div>
        <h1 className="flex flex-wrap items-center justify-center gap-[6px] text-[24px] font-bold text-[#111111] dark:text-[#f2efe9] md:justify-start md:text-[26px]">
          {content.name}
          {content.verified && (
            <span
              className="inline-flex"
              title="Verified"
              style={{ color: '#1d9bf0' }}
            >
              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.67 2.63 13.43 1.75 12 1.75s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
              </svg>
            </span>
          )}
        </h1>
        <div className="mt-1 flex h-[22px] items-center justify-center text-[14px] font-medium text-[#847e78] dark:text-[#9a948b] md:justify-start">
          <span>{typed}</span>
          <span className="ml-0.5 inline-block h-[15px] w-[2px] animate-pulse bg-[#847e78] dark:bg-[#9a948b]" />
        </div>
        <p className="mt-4 whitespace-pre-line text-center text-[13.5px] leading-[1.6] text-[#5e5852] dark:text-[#c9c3ba] md:max-w-[420px] md:text-left md:text-[14px]">
          {content.bio}
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
          <a
            href={content.resumeUrl}
            download={content.resumeFileName}
            className="flex items-center gap-2 rounded-full border border-[#e8e4de] bg-white px-[18px] py-2 text-[12.5px] font-semibold text-[#222222] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-[#dcd8d2] hover:bg-[#faf9f8] focus-visible:ring-2 focus-visible:ring-black/5 dark:border-[#332f28] dark:bg-[#1c1913] dark:text-[#f0ede7] dark:hover:border-[#4a453b] dark:hover:bg-[#221f19] dark:focus-visible:ring-white/10 [&:hover_svg]:text-current"
          >
            <FileText size={16} className="text-[#847e78] transition-colors duration-200 dark:text-[#9a948b]" />
            Resume
          </a>
          <Link
            to="/projects"
            className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#7a746e] transition-colors duration-200 hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#9d978e] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10"
          >
            Projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
