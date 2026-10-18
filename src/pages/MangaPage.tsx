import PageHeader from '@/components/PageHeader';
import { BookShelf } from '@/components/BookShelf';
import { slugify } from '@/components/BookPoster';
import { content } from '@/data/content';

const chunk = <T,>(arr: T[], n: number): T[][] => {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += n) rows.push(arr.slice(i, i + n));
  return rows;
};

export default function MangaPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <PageHeader title="Manga / Manhwa" intro={content.manga.intro} />
      <div className="flex flex-col gap-10">
        {chunk(content.manga.items, 4).map((shelf, i) => (
          <BookShelf
            key={i}
            books={shelf.map((b) => ({ ...b, cover: `/manga/${slugify(b.title)}.jpg` }))}
          />
        ))}
      </div>
    </div>
  );
}
