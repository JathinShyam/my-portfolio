import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import content from '@/data/content';

export type AnimeEntry = {
  rank: number;
  title: string;
  slug: string;
  image: string;
  paragraphs: string[];
};

const fallbackAnime: AnimeEntry[] = content.favorites.map((title, i) => ({
  rank: i + 1,
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  image: `/anime/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}.jpg`,
  paragraphs: ['Still writing this one down.'],
}));

const rankLabels: Record<number, string> = { 1: '1ST', 2: '2ND', 3: '3RD' };

const medalColors: Record<number, { body: string; inner: string; ring: string; text: string }> = {
  1: { body: '#e2b227', inner: '#fff4c8', ring: '#c9992a', text: '#5c4308' },
  2: { body: '#d5d8de', inner: '#f7f8fa', ring: '#c5c9d1', text: '#3f4652' },
  3: { body: '#e0a46a', inner: '#fff1e4', ring: '#d08a4c', text: '#6a3d16' },
};

function MedalRosette({ rank, size }: { rank: number; size: 'lg' | 'sm' }) {
  const c = medalColors[rank];
  if (!c) return null;
  const dims =
    size === 'lg' ? 'h-[112px] w-[84px] -right-6 -top-8' : 'h-[84px] w-[64px] -right-5 -top-6';
  const points =
    '40.0,4.0 44.5,10.4 50.9,5.9 53.0,13.5 60.6,11.5 59.9,19.3 67.7,20.0 64.4,27.1 71.5,30.4 66.0,36.0 71.5,41.6 64.4,44.9 67.7,52.0 59.9,52.7 60.6,60.5 53.0,58.5 50.9,66.1 44.5,61.6 40.0,68.0 35.5,61.6 29.1,66.1 27.0,58.5 19.4,60.5 20.1,52.7 12.3,52.0 15.6,44.9 8.5,41.6 14.0,36.0 8.5,30.4 15.6,27.1 12.3,20.0 20.1,19.3 19.4,11.5 27.0,13.5 29.1,5.9 35.5,10.4';
  return (
    <svg
      viewBox="0 0 80 108"
      aria-hidden="true"
      className={`pointer-events-none absolute z-30 drop-shadow-[0_5px_7px_rgba(60,30,10,0.32)] ${dims}`}
    >
      <path d="M27 50 L16 104 L33 74 L40 106 L47 74 L64 104 L53 50 Z" fill={c.body} />
      <path d="M31 50 L24 96 L36 72 L40 98 L44 72 L56 96 L49 50 Z" fill={c.inner} />
      <polygon points={points} fill={c.ring} />
      <circle cx="40" cy="36" r="15.5" fill={c.inner} stroke={c.ring} strokeWidth="1.4" />
      <text
        x="40"
        y="40"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill={c.text}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {rankLabels[rank]}
      </text>
    </svg>
  );
}

// A paper-aging radial gradient mask used as a faint stamp background.
// Kept subtle so the photo stays the hero of the stamp.

type StampProps = {
  entry: AnimeEntry;
  rotate: number;
  marginTop?: number;
  size: 'podium' | 'shelf';
  showPin?: boolean;
  fixedWidth?: boolean;
  scale?: number;
};

function StampCard({ entry, rotate, marginTop, size, showPin, fixedWidth, scale }: StampProps) {
  const perforation =
    size === 'podium'
      ? {
          '--perf-size': '9px',
          '--perf-gap': '6px',
          '--perf-rad': '4.5px',
        } as React.CSSProperties
      : {
          '--perf-size': '7px',
          '--perf-gap': '5px',
          '--perf-rad': '3.5px',
        } as React.CSSProperties;

  return (
    <div
      className={fixedWidth ? 'min-w-0' : 'min-w-0 flex-1 basis-0'}
      style={{
        transform: `rotate(${rotate}deg)${scale ? ` scale(${scale})` : ''}`,
        marginTop,
        transformOrigin: scale ? 'bottom center' : 'top center',
        width: fixedWidth ? 'calc((100% - 5rem) / 5)' : undefined,
      }}
    >
      {showPin && (
        <span className="relative z-20 mx-auto -mb-1 block h-3.5 w-2.5 rounded-[2px] bg-[#f4efe6] shadow-sm dark:bg-[#3a352c]">
          <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#d5cfc2] dark:bg-[#575043]" />
        </span>
      )}
      <div className="relative">
        {/* STAMP FRAME */}
        <div
          className="group relative mx-auto stamp-frame"
          style={perforation}
        >
          {/* Outer paper frame with perforated edge */}
          <div
            className={`relative mx-auto stamp-paper ${
              size === 'podium' ? 'stamp-paper--lg' : 'stamp-paper--sm'
            }`}
          >
            {/* Inner ivory mat */}
            <div
              className={`relative bg-[#f6efe1] dark:bg-[#241f17] ${
                size === 'podium' ? 'p-2.5' : 'p-1.5'
              }`}
            >
              {/* Photo window with thin inner rule */}
              <div className="relative">
                <div
                  className={`relative block aspect-[2/3] overflow-hidden bg-[#e8dfcc] dark:bg-[#1a1610] ring-1 ring-[#c9bda3] dark:ring-[#3a3127]`}
                >
                  <img
                    src={entry.image}
                    alt=""
                    loading={entry.rank <= 3 ? 'eager' : 'lazy'}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Faint vignette to mimic the embossed photo on a stamp */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 shadow-[inset_0_0_24px_rgba(60,40,15,0.25)]"
                  />
                  {/* Rank denomination, top-left like a stamp value */}
                  <span
                    className={`absolute left-1 top-1 inline-flex items-center justify-center rounded-[3px] bg-[#fdf9ee]/95 px-1.5 py-0.5 font-serif font-semibold text-[#7a1d1d] shadow-[0_1px_2px_rgba(0,0,0,0.25)] dark:bg-[#1a1610]/85 dark:text-[#e7b3b3] ${
                      size === 'podium' ? 'text-[13px]' : 'text-[11px]'
                    }`}
                  >
                    №{entry.rank}
                  </span>
                  {/* Postmark circle, a playful collector touch */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-1 top-1 rounded-full border border-[#3a4a6a]/55 text-[#3a4a6a]/70 dark:border-[#9ab0d8]/45 dark:text-[#9ab0d8]/55 ${
                      size === 'podium' ? 'h-9 w-9' : 'h-7 w-7'
                    }`}
                    style={{
                      background:
                        'repeating-linear-gradient(135deg, rgba(58,74,106,0.06) 0 2px, transparent 2px 5px)',
                    }}
                  />
                </div>
              </div>

              {/* Stamp caption — country/name line at the bottom */}
              <div
                className={`mt-1.5 flex items-center justify-center gap-1.5 px-1 ${
                  size === 'podium' ? 'py-1' : 'py-0.5'
                }`}
              >
                <span
                  className={`h-px flex-1 bg-[#c9bda3] dark:bg-[#4a4133]`}
                  aria-hidden="true"
                />
                <span
                  className={`font-handwriting tracking-wide text-[#2c241c] dark:text-[#e8e2d6] ${
                    size === 'podium' ? 'text-[15px] leading-tight' : 'text-[12px] leading-[1.05]'
                  }`}
                >
                  {entry.title}
                </span>
                <span
                  className={`h-px flex-1 bg-[#c9bda3] dark:bg-[#4a4133]`}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Medals for the top 3 — kept, restyled to sit on the stamp corner */}
        {entry.rank <= 3 && <MedalRosette rank={entry.rank} size={size === 'podium' ? 'lg' : 'sm'} />}
      </div>
    </div>
  );
}

export default function Forget() {
  const [anime, setAnime] = useState<AnimeEntry[]>(fallbackAnime);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from('anime')
      .select('rank, title, slug, image, paragraphs')
      .order('rank', { ascending: true })
      .then(({ data, error }) => {
        if (cancelled || error || !data || data.length === 0) return;
        setAnime(
          data.map((row) => ({
            rank: row.rank,
            title: row.title,
            slug: row.slug,
            image: row.image,
            paragraphs: Array.isArray(row.paragraphs) ? row.paragraphs : [],
          })),
        );
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const first = anime[0];
  const second = anime[1];
  const third = anime[2];
  const shelf1 = anime.slice(3, 8);
  const shelf2 = anime.slice(8);

  const rotations = [-2.4, 1.8, -1.2, 2.2, -1.6, 1.4, -2, 2.6, -1.4, 1.6];
  const rot = (i: number) => rotations[i % rotations.length];
  const marginTop = (i: number) => [0, 4, 1, 6, 2, 5, 0, 3][i % 8];

  return (
    <main className="min-h-screen pb-24">
      <div className="mx-auto max-w-[1088px] px-4 pt-24 md:px-6 md:pt-[140px]">
        <Link
          to="/"
          className="mb-8 inline-block text-[14px] text-[#847e78] transition-colors hover:text-[#111111] dark:text-[#9a948b] dark:hover:text-[#f2efe9]"
        >
          ← Back to Home
        </Link>
        <h1 className="mb-2 font-serif text-[32px] font-normal tracking-tight text-[#111111] dark:text-[#f2efe9]">
          Forget <span className="text-[16px] font-light tracking-normal">about reality</span>
        </h1>
        <p className="mb-4 text-[15px] leading-6 text-[#6b6661] dark:text-[#b3ada4]">
          Anime is my go-to escape when life gets hard and reality gets a little too heavy.
          <br />
          I've ranked them based on how much impact they made irl and how much they made me forget —
          pressed here like stamps in an album.
        </p>
      </div>

      <div className="relative px-2 pb-2">
        {/* Podium: #1 center-right, #2 left, #3 right */}
        <div className="mx-auto flex w-full max-w-[760px] items-end justify-center gap-6 px-6 pt-8">
          {second && (
            <StampCard entry={second} rotate={-2} scale={0.92} size="podium" />
          )}
          {first && (
            <StampCard entry={first} rotate={1} size="podium" />
          )}
          {third && (
            <StampCard entry={third} rotate={2.4} scale={0.92} size="podium" />
          )}
        </div>

        {/* Shelf row 1: #4–#8 */}
        {shelf1.length > 0 && (
          <div className="relative mx-auto mt-10 w-full max-w-[1040px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[6px] z-0 h-0.5 bg-[#9a8876] dark:bg-[#a89886]"
              style={{
                left: 'calc(0.5rem + (100% - 1rem - 5rem) / 5 / 2)',
                right: 'calc(0.5rem + (100% - 1rem - 5rem) / 5 / 2)',
              }}
            />
            <div className="relative z-[1] flex items-start gap-5 px-2">
              {shelf1.map((entry, i) => (
                <StampCard
                  key={entry.slug}
                  entry={entry}
                  rotate={rot(i)}
                  marginTop={marginTop(i)}
                  size="shelf"
                  showPin
                />
              ))}
            </div>
          </div>
        )}

        {/* Shelf row 2: #9–#10 */}
        {shelf2.length > 0 && (
          <div className="relative mx-auto mt-10 w-full max-w-[1040px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[6px] z-0 h-0.5 bg-[#9a8876] dark:bg-[#a89886]"
              style={{
                left: 'calc(0.5rem + (100% - 2.25rem) / 2 - (100% - 6rem) / 10)',
                right: 'calc(0.5rem + (100% - 2.25rem) / 2 - (100% - 6rem) / 10)',
              }}
            />
            <div className="relative z-[1] flex items-start justify-center gap-5 px-2">
              {shelf2.map((entry, i) => (
                <StampCard
                  key={entry.slug}
                  entry={entry}
                  rotate={rot(i + 5)}
                  marginTop={marginTop(i + 5)}
                  size="shelf"
                  showPin
                  fixedWidth
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
