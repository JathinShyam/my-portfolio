import PageHeader from '@/components/PageHeader';
import { BookShelf } from '@/components/BookShelf';
import { content } from '@/data/content';

const chunk = <T,>(arr: T[], n: number): T[][] => {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += n) rows.push(arr.slice(i, i + n));
  return rows;
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
      <PageHeader title="Books" intro={content.books.intro} />

      {/* <h2 className="mb-6 font-serif text-[22px] font-normal tracking-tight text-[#222] dark:text-[#f0ede7]">Read</h2> */}
      <div className="flex flex-col gap-10">
        {chunk(content.books.read, 4).map((shelf, i) => (
          <BookShelf key={i} books={shelf} />
        ))}
      </div>
    </div>
  );
}
