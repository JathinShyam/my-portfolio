import { BookPoster, type Book } from '@/components/BookPoster';

export function BookShelf({ books, status }: { books: Book[]; status: 'read' | 'to-read' }) {
  return (
    <div className="border-b border-[#e8e4de] pb-5 shadow-[0_10px_18px_-16px_rgba(0,0,0,0.35)] dark:border-[#2e2a24] dark:shadow-[0_10px_18px_-16px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
        {books.map((book) => (
          <BookPoster key={book.title} book={book} status={status} />
        ))}
      </div>
    </div>
  );
}
