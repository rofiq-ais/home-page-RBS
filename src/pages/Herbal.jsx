import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "../config";
import { fetchProducts, urlFor } from "../lib/sanity";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { SkeletonProduct } from "../components/ui/Skeleton";
import ImageModal from "../components/ImageModal";

const Herbal = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [expandedKhasiat, setExpandedKhasiat] = useState({});

  const toggleKhasiat = (id) => {
    setExpandedKhasiat((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
              ✓ Bahan Alami Pilihan
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium">
              ✓ Kualitas Premium RBS
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {products.map((prod) => (
                <article
                  key={prod._id}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full"
                >
                  <div
                    className="relative overflow-hidden cursor-zoom-in bg-gray-50 aspect-[4/3] group/img shrink-0"
                    onClick={() =>
                      setZoomedImage({
                        src: urlFor(prod.image).url(),
                        title: prod.name,
                        subtitle: `${prod.size || ""} ${prod.size && prod.price ? "•" : ""} ${prod.price || ""}`,
                      })
                    }
                    title="Klik untuk memperbesar brosur produk"
                  >
                    <img
                      src={urlFor(prod.image).width(600).height(450).url()}
                      alt={prod.alt || prod.name}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/75 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg transform -translate-y-1 group-hover/img:translate-y-0 duration-200">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                        Lihat Brosur Lengkap
                      </span>
                    </div>

                    {prod.size && (
                      <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-md shadow-xs">
                        {prod.size}
                      </span>
                    )}
                    <span className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      100% Herbal
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-1">
                      {prod.name}
                    </h2>

                    <p className="mt-1.5 text-gray-600 leading-relaxed text-xs sm:text-sm line-clamp-2">
                      {prod.desc || prod.shortDesc}
                    </p>

                    {/* Khasiat Utama Expandable Toggle */}
                    {prod.benefits && prod.benefits.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-100/90">
                        <button
                          type="button"
                          onClick={() => toggleKhasiat(prod._id)}
                          className="w-full py-1.5 px-3 rounded-lg bg-gray-50 hover:bg-green-50 text-green-700 font-semibold text-xs transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {expandedKhasiat[prod._id] ? "Sembunyikan Khasiat" : `Lihat ${prod.benefits.length} Khasiat Utama`}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${expandedKhasiat[prod._id] ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {expandedKhasiat[prod._id] && (
                          <ul className="mt-2.5 space-y-2 animate-in fade-in duration-200">
                            {prod.benefits.map((b, i) => (
                              <li key={i} className="flex items-start text-xs text-gray-600 leading-relaxed">
                                <svg
                                  className="w-3.5 h-3.5 text-green-600 mr-2 mt-0.5 shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Harga & Tombol Pesan rapi 1 baris */}
                    <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block leading-tight">Harga</span>
                        <div className="text-xl font-black text-green-700">{prod.price}</div>
                      </div>
                      <a
                        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                          `Halo, saya ingin memesan produk ${prod.name} di Klinik RBS.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-green-600 text-white font-bold text-xs sm:text-sm hover:bg-green-700 transition-all transform hover:scale-[1.02] duration-200 flex items-center gap-1.5 group/btn shadow-xs shrink-0"
                      >
                        <span>Pesan</span>
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
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
              {
                icon: "🕌",
                title: "Sesuai Sunnah",
                desc: "Produk dipilih berdasarkan anjuran Nabi ﷺ untuk menjaga kesehatan holistik.",
              },
              {
                icon: "✅",
                title: "Kualitas Terjamin",
                desc: "Formula herbal murni, higienis, dan tersertifikasi untuk khasiat maksimal.",
              },
              {
                icon: "🚚",
                title: "Pengiriman Cepat",
                desc: "Pesan hari ini, dikirim keesokan harinya ke seluruh Indonesia.",
              },
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
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
              "Halo, saya ingin konsultasi produk herbal di Klinik RBS."
            )}`}
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

      <ImageModal
        isOpen={!!zoomedImage}
        image={zoomedImage}
        onClose={() => setZoomedImage(null)}
      />
    </div>
  );
};

export default Herbal;
