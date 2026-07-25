import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticleBySlug } from "../lib/sanity";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const ArtikelDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetchArticleBySlug(slug)
      .then((data) => {
        if (data) {
          setArticle(data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
        <Navbar />
        <AnnouncementBar />
        <main className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-4 bg-gray-200 rounded w-24 mt-8"></div>
            <div className="h-10 bg-gray-200 rounded mt-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mt-4 w-1/4"></div>
            <div className="space-y-3 mt-8">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
        <Navbar />
        <AnnouncementBar />
        <main className="flex items-center justify-center py-32 px-4">
          <div className="text-center">
            <p className="text-6xl font-black text-gray-300">404</p>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Artikel Tidak Ditemukan</h1>
            <p className="mt-2 text-gray-500">Artikel yang Anda cari tidak tersedia.</p>
            <Link
              to="/artikel"
              className="inline-block mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all"
            >
              Kembali ke Artikel
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
      <Navbar />
      <AnnouncementBar />
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/artikel" className="inline-flex items-center text-green-600 font-bold hover:text-green-700 mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Artikel
          </Link>
          <span className="text-xs uppercase tracking-wider text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-gray-400">{article.date}</p>
          <div className="mt-8 prose prose-green max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ArtikelDetail;
