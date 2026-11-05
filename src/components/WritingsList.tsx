import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Writing } from '@/data/content';

const rowClass =
  'group flex items-start gap-4 border-b border-[#ece7e1] py-5 last:border-b-0 dark:border-[#2a2620] sm:gap-6';

function Row({ post }: { post: Writing }) {
  const inner = (
    <>
      {post.image && (
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="h-[84px] w-[120px] shrink-0 rounded-md bg-[#f4f1ec] object-cover transition-transform duration-500 group-hover:scale-[1.03] dark:bg-[#1c1913] sm:h-[100px] sm:w-[160px]"
        />
      )}
      <span className="flex min-w-0 flex-col gap-1.5">
        <span className="font-serif text-[17px] leading-snug text-[#1a1a1a] underline decoration-transparent underline-offset-[3px] transition-colors duration-200 group-hover:decoration-current sm:text-[19px] dark:text-[#f2efe9]">
          {post.title}
        </span>
        {post.excerpt && (
          <span className="text-[14px] leading-relaxed text-[#5e5852] dark:text-[#b3ada4]">{post.excerpt}</span>
        )}
        <span className="text-[12.5px] tabular-nums text-[#847e78] dark:text-[#9a948b]">
          {post.date} · {post.readTime}
        </span>
      </span>
    </>
  );

  if (post.url) {
    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer" className={rowClass}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={`/blogs/${post.slug}`} className={rowClass}>
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
