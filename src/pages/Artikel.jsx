import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../lib/sanity";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const Artikel = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => setArticles(data))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
      <Navbar />
      <AnnouncementBar />

      <section className="bg-gradient-to-b from-green-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Artikel & <span className="text-green-600">Informasi</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Edukasi seputar Tibbun Nabawi, pengumuman klinik, dan tips kesehatan untuk Anda.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-6 bg-gray-200 rounded mt-4 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mt-3 w-1/4"></div>
                  <div className="h-16 bg-gray-200 rounded mt-4"></div>
                </div>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada artikel yang dipublikasikan.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((art) => (
                <article
                  key={art._id}
                  className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <span className="text-xs uppercase tracking-wider text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-4 group-hover:text-green-600 transition-colors">
                    {art.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">{art.date}</p>
                  <p className="text-gray-600 mt-4 leading-relaxed">{art.excerpt}</p>
                  <Link to={`/artikel/${art.slug.current}`} className="text-green-600 font-bold mt-6 inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Baca selengkapnya <span className="ml-2">&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Artikel;
