import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../lib/sanity";

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => setArticles(data.slice(0, 2)))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Artikel & Informasi</h2>
          <p className="mt-4 text-gray-500">Edukasi seputar kesehatan Tibbun Nabawi untuk Anda</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-6 bg-gray-200 rounded mt-4 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded mt-3 w-1/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <div key={art._id} className="group border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="text-xs uppercase tracking-wider text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">{art.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 group-hover:text-green-600 transition-colors">{art.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{art.date}</p>
                <Link to={`/artikel/${art.slug.current}`} className="text-green-600 font-bold mt-6 inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Baca selengkapnya <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/artikel"
            className="inline-flex items-center px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-bold rounded-full hover:bg-green-600 hover:text-white transition-all"
          >
            Lihat Semua Artikel
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
