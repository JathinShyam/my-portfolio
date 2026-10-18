import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import type { WritingBlock } from '@/data/content';
import content from '@/data/content';

function renderBlock(block: WritingBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={i}
          id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className="mb-4 mt-12 font-serif text-[24px] font-normal tracking-tight text-[#111111] dark:text-[#f2efe9]"
        >
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} className="mb-5 text-[15.5px] leading-[1.75] text-[#3a3530] dark:text-[#d7d2ca]">
          {block.text}
        </p>
      );
    case 'code':
      return (
        <pre
          key={i}
          className="mb-6 overflow-x-auto rounded-xl bg-[#0f0f0e] px-5 py-4 font-mono text-[13.5px] leading-[1.65] text-[#f8fafc] dark:bg-[#1c1913]"
        >
          <code>{block.code}</code>
        </pre>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = content.writings.find((w) => w.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} — ${content.meta.title}` : content.meta.title;
    return () => {
      document.title = content.meta.title;
    };
  }, [post]);

  if (!post || post.url) {
    return (
      <div className="mx-auto max-w-[800px] px-6 pb-24 pt-24 md:pt-[140px]">
        <Link to="/blogs" className="text-[14px] text-[#847e78] hover:text-[#111111] dark:text-[#9a948b] dark:hover:text-[#f2efe9]">
          ← Back to Writings
        </Link>
        <p className="mt-8 text-[15px] text-[#6b6661] dark:text-[#b3ada4]">
          This post lives elsewhere — check the Writings list for the link.
        </p>
      </div>
    );
  }

  const headings = (post.blocks ?? []).filter(
    (b): b is Extract<WritingBlock, { type: 'h2' }> => b.type === 'h2'
  );

  return (
    <div className="relative mx-auto max-w-[1300px] px-6 pb-24 pt-24 md:pt-[140px]">
      <Link
        to="/blogs"
        className="text-[14px] text-[#847e78] transition-colors duration-200 hover:text-[#111111] dark:text-[#9a948b] dark:hover:text-[#f2efe9]"
      >
        ← Back to Writings
      </Link>

      {headings.length > 0 && (
        <aside className="no-scrollbar fixed left-8 top-[210px] hidden max-h-[calc(100vh-230px)] w-[240px] overflow-y-auto lg:block">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#a9a39d] dark:text-[#78726a]">
            Contents
          </div>
          <ul className="flex flex-col gap-2">
            {headings.map((h) => {
              const id = h.text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-2 text-[13px] text-[#847e78] transition-colors duration-200 hover:text-[#111111] dark:text-[#9a948b] dark:hover:text-[#f2efe9]"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#d4cfc8] dark:bg-[#4a453b]" />
                    {h.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      )}

      <article className="mx-auto max-w-[720px] lg:mx-0 lg:ml-[320px]">
        <h1 className="font-serif text-[38px] font-normal leading-tight tracking-tight text-[#111111] dark:text-[#f2efe9] md:text-[50px]">
          {post.title}
        </h1>
        <div className="mt-4 mb-8 flex items-center gap-2 text-[13px] text-[#847e78] dark:text-[#9a948b]">
          <span className="tabular-nums">{post.date}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>
        <div className="mb-8 h-px w-full bg-[#ece7e1] dark:bg-[#2a2620]" />
        {post.excerpt && (
          <p className="mb-6 text-[15.5px] italic leading-[1.75] text-[#6b6661] dark:text-[#b3ada4]">
            {post.excerpt}
          </p>
        )}
        {(post.blocks ?? []).map(renderBlock)}
      </article>
    </div>
  );
}
