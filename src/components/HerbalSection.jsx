import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "../config";
import { fetchProducts, urlFor } from "../lib/sanity";

const HerbalSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const previewProducts = products.slice(0, 4);

  return (
    <section id="produk-herbal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Produk Herbal Sunnah</h2>
          <p className="mt-4 text-gray-500">Menyediakan produk herbal berkualitas tinggi untuk mendukung kesehatan Anda</p>
        </div>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-green-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-500">Memuat produk...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {previewProducts.map((prod) => (
              <div key={prod._id} className="group bg-green-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-100">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={urlFor(prod.image).width(400).height(300).url()}
                    alt={prod.alt}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{prod.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{prod.shortDesc}</p>
                <div className="text-lg font-bold text-green-600 mb-4">{prod.price}</div>
                <a href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Halo, saya ingin memesan produk ${prod.name} di Klinik RBS.`)}`} target="_blank" rel="noreferrer" className="inline-block w-full py-2 px-4 rounded-lg bg-green-600 text-white font-bold text-sm border border-green-600 hover:bg-green-700 hover:border-green-700 hover:shadow-lg transition-all">
                  Pesan Sekarang
                </a>
              </div>
            ))}
          </div>
        )}
        <div className="mt-12 text-center">
          <Link
            to="/herbal"
            className="inline-flex items-center px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-bold rounded-full hover:bg-green-600 hover:text-white transition-all"
          >
            Lihat Semua Produk
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HerbalSection;
