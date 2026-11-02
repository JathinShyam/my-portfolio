import { useEffect, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import Home from '@/pages/Home';
import Blogs from '@/pages/Blogs';
import BlogPost from '@/pages/BlogPost';
import Projects from '@/pages/Projects';
import Experience from '@/pages/Experience';
import Resume from '@/pages/Resume';
import BooksPage from '@/pages/BooksPage';
import MangaPage from '@/pages/MangaPage';
import Anime from '@/pages/Anime';
import NotFound from '@/pages/NotFound';

function PageTitle({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} — Shyam Kumar Reddy Kalla`;
  }, [title]);
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="flex min-h-screen flex-col bg-white font-sans text-[#1a1a1a] antialiased transition-colors duration-300 dark:bg-[#151210] dark:text-[#f2efe9]">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<PageTitle title="Home"><Home /></PageTitle>} />
            <Route path="/blogs" element={<PageTitle title="Writings"><Blogs /></PageTitle>} />
            <Route path="/blogs/:slug" element={<PageTitle title="Writing"><BlogPost /></PageTitle>} />
            <Route path="/projects" element={<PageTitle title="Projects"><Projects /></PageTitle>} />
            <Route path="/experience" element={<PageTitle title="Work"><Experience /></PageTitle>} />
            <Route path="/resume" element={<PageTitle title="Resume"><Resume /></PageTitle>} />
            <Route path="/books" element={<PageTitle title="Books"><BooksPage /></PageTitle>} />
            <Route path="/manga" element={<PageTitle title="Manga"><MangaPage /></PageTitle>} />
            <Route path="/anime" element={<PageTitle title="Anime"><Anime /></PageTitle>} />
            <Route path="*" element={<PageTitle title="Not Found"><NotFound /></PageTitle>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
