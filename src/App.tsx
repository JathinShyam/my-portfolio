import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Blogs from '@/pages/Blogs';
import BlogPost from '@/pages/BlogPost';
import Projects from '@/pages/Projects';
import Oss from '@/pages/Oss';
import Resume from '@/pages/Resume';
import PerfectDay from '@/pages/PerfectDay';
import Forget from '@/pages/Forget';

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
            <Route path="/oss" element={<Oss />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/perfect-day" element={<PerfectDay />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
