import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Writing } from '@/data/content';

function Row({ post }: { post: Writing }) {
  const inner = (
    <>
      <span className="order-1 text-[12.5px] tabular-nums text-[#847e78] dark:text-[#9a948b] sm:order-none">
        {post.date}
      </span>
      <span className="order-3 col-span-2 font-serif text-[17px] leading-snug text-[#1a1a1a] underline decoration-transparent underline-offset-[3px] transition-colors duration-200 group-hover:decoration-current dark:text-[#f2efe9] sm:order-none sm:col-span-1">
        {post.title}
      </span>
      <span className="order-2 text-right text-[12.5px] text-[#6f6a63] dark:text-[#8a847b] sm:order-none">
        {post.readTime}
      </span>
    </>
  );

  if (post.url) {
    return (
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-[#ece7e1] py-3.5 last:border-b-0 dark:border-[#2a2620] sm:grid-cols-[6.75rem_minmax(0,1fr)_4.25rem] sm:gap-x-6"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-[#ece7e1] py-3.5 last:border-b-0 dark:border-[#2a2620] sm:grid-cols-[6.75rem_minmax(0,1fr)_4.25rem] sm:gap-x-6"
    >
      {inner}
    </Link>
  );
}

export default function WritingsList({
  posts,
  viewAllTo,
}: {
  posts: Writing[];
  viewAllTo?: string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="-ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
          Writings
        </h2>
        {viewAllTo && (
          <Link
            to={viewAllTo}
            className="flex items-center gap-1 text-[14px] font-medium text-[#5e5852] transition-colors duration-200 hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-black/5 dark:text-[#c9c3ba] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10"
          >
            View All
            <ArrowUpRight size={18} />
          </Link>
        )}
      </div>
      <div className="border-t border-[#ece7e1] dark:border-[#2a2620]">
        {posts.map((post) => (
          <Row key={post.slug ?? post.url ?? post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
