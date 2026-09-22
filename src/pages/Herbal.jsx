import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "../config";
import { fetchProducts, urlFor } from "../lib/sanity";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { SkeletonProduct } from "../components/ui/Skeleton";

const Herbal = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
      <Navbar />
      <AnnouncementBar />

      <section className="bg-gradient-to-b from-green-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Produk <span className="text-green-600">Herbal Sunnah</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Produk herbal alami berkualitas tinggi untuk mendukung kesehatan Anda dan keluarga, dipilih langsung sesuai anjuran sunnah Nabi ﷺ.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium">
              ✓ 100% Halal
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium">
              ✓ Bersertifikat BPOM
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium">
              ✓ Kualitas Premium
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonProduct key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((prod) => (
                <article
                  key={prod._id}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={urlFor(prod.image).width(600).height(400).url()}
                      alt={prod.alt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {prod.name}
                      </h2>
                      <span className="shrink-0 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                        {prod.size}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-500 leading-relaxed text-sm flex-grow line-clamp-3">
                      {prod.desc}
                    </p>
                    <ul className="mt-4 space-y-1.5 flex-grow">
                      {prod.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
                      <div className="text-2xl font-black text-green-600">{prod.price}</div>
                      <a
                        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                          `Halo, saya ingin memesan produk ${prod.name} di Klinik RBS.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all transform hover:scale-[1.02] duration-200 flex items-center gap-1.5 group/btn"
                      >
                        <span>Pesan</span>
                        <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
            Mengapa Memilih Herbal Kami?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🕌", title: "Sesuai Sunnah", desc: "Produk dipilih berdasarkan anjuran Nabi ﷺ untuk menjaga kesehatan holistic." },
              { icon: "✅", title: "Bersertifikat", desc: "Semua produk telah terdaftar BPOM dan lulus uji laboratorium." },
              { icon: "🚚", title: "Pengiriman Cepat", desc: "Pesan hari ini, dikirim keesokan harinya ke seluruh Indonesia." },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 border border-gray-100 rounded-2xl bg-gray-50">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Butuh Rekomendasi Produk yang Tepat?
          </h2>
          <p className="text-green-100 mt-3">
            Konsultasikan kebutuhan Anda dengan terapis kami. Kami akan bantu rekomendasikan produk herbal yang sesuai dengan kondisi kesehatan Anda.
          </p>
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Halo, saya ingin konsultasi produk herbal di Klinik RBS.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl"
          >
            Konsultasi Gratis
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Herbal;
