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
  const dims = size === 'lg' ? 'h-[104px] w-[78px] -right-5 -top-7' : 'h-[78px] w-[60px] -right-4 -top-5';
  const points =
    '40.0,4.0 44.5,10.4 50.9,5.9 53.0,13.5 60.6,11.5 59.9,19.3 67.7,20.0 64.4,27.1 71.5,30.4 66.0,36.0 71.5,41.6 64.4,44.9 67.7,52.0 59.9,52.7 60.6,60.5 53.0,58.5 50.9,66.1 44.5,61.6 40.0,68.0 35.5,61.6 29.1,66.1 27.0,58.5 19.4,60.5 20.1,52.7 12.3,52.0 15.6,44.9 8.5,41.6 14.0,36.0 8.5,30.4 15.6,27.1 12.3,20.0 20.1,19.3 19.4,11.5 27.0,13.5 29.1,5.9 35.5,10.4';
  return (
    <svg
      viewBox="0 0 80 108"
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 drop-shadow-[0_4px_6px_rgba(60,30,10,0.28)] ${dims}`}
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

function PosterCard({
  entry,
  rotate,
  marginTop,
  padding,
  captionSize,
  showPin,
  fixedWidth,
  scale,
  maxWidth,
}: {
  entry: AnimeEntry;
  rotate: number;
  marginTop?: number;
  padding: 'podium' | 'shelf';
  captionSize: 'lg' | 'sm';
  showPin?: boolean;
  fixedWidth?: boolean;
  scale?: number;
  maxWidth?: string;
}) {
  return (
    <div
      className={fixedWidth ? 'min-w-0' : 'min-w-0 flex-1 basis-0'}
      style={{
        transform: `rotate(${rotate}deg)${scale ? ` scale(${scale})` : ''}`,
        marginTop,
        transformOrigin: scale ? 'bottom center' : 'top center',
        width: fixedWidth ? 'calc((100% - 5rem) / 5)' : undefined,
        maxWidth: !fixedWidth ? maxWidth : undefined,
      }}
    >
      {showPin && (
        <span className="relative z-10 mx-auto -mb-1 block h-3.5 w-2.5 rounded-[2px] bg-[#f4efe6] shadow-sm dark:bg-[#3a352c]">
          <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#d5cfc2] dark:bg-[#575043]" />
        </span>
      )}
      <div className="relative">
        <div
          className={`block w-full bg-white text-center shadow-[0_10px_16px_rgba(62,36,12,0.32)] ring-1 ring-black/[0.06] ${
            padding === 'podium' ? 'p-1.5 pb-3' : 'p-1 pb-2'
          }`}
        >
          <span className="relative block aspect-[2/3] overflow-hidden bg-[#efe8dc]">
            <img
              src={entry.image}
              alt=""
              loading={entry.rank <= 3 ? 'eager' : 'lazy'}
              className="absolute inset-0 h-full w-full object-contain object-center"
            />
          </span>
          <span
            className={`mt-1 block px-1 font-handwriting text-[#2c241c] ${
              captionSize === 'lg' ? 'text-[18px] leading-tight' : 'text-[14px] leading-[1.05]'
            }`}
          >
            {padding === 'podium' ? (
              <span className="line-clamp-2">
                {entry.rank} · {entry.title}
              </span>
            ) : (
              <>
                <span className="block">#{entry.rank}</span>
                <span className="line-clamp-2 block">{entry.title}</span>
              </>
            )}
          </span>
        </div>
        {entry.rank <= 3 && <MedalRosette rank={entry.rank} size={padding === 'podium' ? 'lg' : 'sm'} />}
        {entry.rank === 1 && (
          <span
            className="absolute -bottom-2.5 left-1/2 z-20 -translate-x-1/2 bg-[#c62828] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sm"
            style={{
              clipPath:
                'polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)',
            }}
          >
            <span className="block max-w-[150px] truncate">{entry.title}</span>
          </span>
        )}
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
        <p className="mb-12 text-[15px] leading-6 text-[#6b6661] dark:text-[#b3ada4]">
          Anime is my go-to escape when life gets hard and reality gets a little too heavy.
          <br />
          <span className="min-[1100px]:whitespace-nowrap">
            I've ranked them based on how much impact they made irl and how much they made me forget.
            I've written my thoughts on each one.
          </span>
          <br />
          Click a card to read it.
        </p>
      </div>

      <div className="relative px-2 pb-2">
        {/* Podium: #1 center-right, #2 left, #3 right */}
        <div className="mx-auto flex w-full max-w-[718px] items-end justify-center gap-5 px-6 pt-6">
          {second && (
            <PosterCard
              entry={second}
              rotate={-2}
              scale={0.92}
              padding="podium"
              captionSize="lg"
              maxWidth="200px"
            />
          )}
          {first && (
            <PosterCard
              entry={first}
              rotate={1}
              padding="podium"
              captionSize="lg"
              maxWidth="230px"
            />
          )}
          {third && (
            <PosterCard
              entry={third}
              rotate={2.4}
              scale={0.92}
              padding="podium"
              captionSize="lg"
              maxWidth="200px"
            />
          )}
        </div>

        {/* Shelf row 1: #4–#8 */}
        {shelf1.length > 0 && (
          <div className="relative mx-auto mt-8 w-full max-w-[1088px]">
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
                <PosterCard
                  key={entry.slug}
                  entry={entry}
                  rotate={rot(i)}
                  marginTop={marginTop(i)}
                  padding="shelf"
                  captionSize="sm"
                  showPin
                />
              ))}
            </div>
          </div>
        )}

        {/* Shelf row 2: #9–#10 */}
        {shelf2.length > 0 && (
          <div className="relative mx-auto mt-8 w-full max-w-[1088px]">
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
                <PosterCard
                  key={entry.slug}
                  entry={entry}
                  rotate={rot(i + 5)}
                  marginTop={marginTop(i + 5)}
                  padding="shelf"
                  captionSize="sm"
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
