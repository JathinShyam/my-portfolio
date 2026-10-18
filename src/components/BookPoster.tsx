export type Book = { title: string; author?: string; genre: string; cover?: string };

const GENRE_THEME: Record<string, string> = {
  Thriller: 'from-[#2a2620] to-[#4a453b]',
  Fantasy: 'from-[#3a2f26] to-[#6b5a48]',
  Philosophy: 'from-[#1f1c18] to-[#3a3530]',
  'Self-help': 'from-[#574a3b] to-[#8a7761]',
  Spirituality: 'from-[#2b2419] to-[#5a4a33]',
  Memoir: 'from-[#4b3f34] to-[#7a6a58]',
  Classic: 'from-[#2f2a24] to-[#57503f]',
  Finance: 'from-[#413a2e] to-[#6f6650]',
  Fiction: 'from-[#3d332b] to-[#6e5e4c]',
  'Short stories': 'from-[#38312a] to-[#645748]',
  Seinen: 'from-[#26313a] to-[#4d5e6e]',
  Shonen: 'from-[#5a2b22] to-[#8f4a37]',
  Manhwa: 'from-[#2f3a2c] to-[#556b50]',
};

const FALLBACK_THEME = 'from-[#332e28] to-[#5e5548]';

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")";

export function BookPoster({ book }: { book: Book }) {
  return (
    <article className="group">
      <div className="relative aspect-[2/3] overflow-hidden rounded-[10px] border border-[#e8e4de] bg-[#fcfbf9] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:shadow-sm dark:border-[#2e2a24] dark:bg-[#171410]">
        {book.cover ? (
          <img
            src={book.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col justify-between bg-gradient-to-b p-3 ${GENRE_THEME[book.genre] ?? FALLBACK_THEME}`}
          >
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/50">{book.genre}</span>
            <h3 className="font-serif text-[17px] leading-tight text-white/90">{book.title}</h3>
            {book.author && (
              <span className="text-[9.5px] uppercase tracking-[0.14em] text-white/55">{book.author}</span>
            )}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{ backgroundImage: GRAIN }}
            />
            <span className="pointer-events-none absolute inset-2 rounded-[6px] border border-white/15" />
          </div>
        )}

        <span className="pointer-events-none absolute inset-y-0 left-0 w-[6px] bg-black/[0.10] dark:bg-black/30" />
        <span className="pointer-events-none absolute inset-y-0 left-[6px] w-px bg-white/30 dark:bg-white/10" />
      </div>

      <h3 className="mt-3 font-serif text-[15px] leading-snug text-[#1a1a1a] dark:text-[#f2efe9]">{book.title}</h3>
      {book.author && <p className="mt-1 text-[12px] text-[#847e78] dark:text-[#9a948b]">{book.author}</p>}
      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6f6a63] dark:text-[#8a847b]">
        {book.genre}
      </p>
    </article>
  );
}
