import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Blogs from '@/pages/Blogs';
import BlogPost from '@/pages/BlogPost';
import Projects from '@/pages/Projects';
import Experience from '@/pages/Experience';
import Resume from '@/pages/Resume';
import BooksPage from '@/pages/BooksPage';
import MangaPage from '@/pages/MangaPage';
import Anime from '@/pages/Anime';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white font-sans text-[#1a1a1a] antialiased transition-colors duration-300 dark:bg-[#151210] dark:text-[#f2efe9]">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/manga" element={<MangaPage />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
