import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[800px] px-6 pb-24 pt-32 md:pt-[180px]">
      <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#847e78] dark:text-[#9a948b]">404 / Not found</div>
      <h1 className="mt-4 font-serif text-[42px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">This page took a wrong turn.</h1>
      <p className="mt-4 max-w-[500px] text-[15px] leading-7 text-[#5e5852] dark:text-[#c9c3ba]">The address does not point to a page on this site.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full border border-[#d8d2cb] px-4 py-2 text-[13px] font-semibold text-[#222222] transition-colors hover:border-[#2563eb] hover:text-[#2563eb] dark:border-[#4a453b] dark:text-[#f0ede7] dark:hover:border-[#93c5fd] dark:hover:text-[#93c5fd]">Back home</Link>
    </div>
  );
}
