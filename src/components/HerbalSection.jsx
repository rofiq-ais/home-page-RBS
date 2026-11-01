import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "../config";
import { fetchProducts, urlFor } from "../lib/sanity";
import { SkeletonProduct } from "./ui/Skeleton";
import ImageModal from "./ImageModal";

const HerbalSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [zoomedImage, setZoomedImage] = useState(null);

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
          <p className="mt-4 text-gray-500">
            Menyediakan produk herbal berkualitas tinggi untuk mendukung kesehatan Anda dan keluarga
          </p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonProduct key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {previewProducts.map((prod) => (
              <div
                key={prod._id}
                className="group bg-white rounded-2xl p-4 sm:p-5 text-left hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  <div
                    className="mb-3.5 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 aspect-square relative cursor-zoom-in group/img shrink-0"
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
                      src={urlFor(prod.image).width(500).height(500).url()}
                      alt={prod.alt || prod.name}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg transform -translate-y-1 group-hover/img:translate-y-0 duration-200">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                        Lihat Brosur
                      </span>
                    </div>

                    {prod.size && (
                      <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-md shadow-xs">
                        {prod.size}
                      </span>
                    )}
                    <span className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      100% Herbal
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-1">
                    {prod.name}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2 flex-1">
                    {prod.shortDesc || prod.desc}
                  </p>
                </div>

                {/* Bagian harga dan tombol pesanan rapi 1 baris */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 mt-3.5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block leading-tight">Harga</span>
                    <span className="text-base sm:text-lg font-black text-green-700">{prod.price}</span>
                  </div>
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                      `Halo, saya ingin memesan produk ${prod.name} di Klinik RBS.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-green-600 text-white font-bold text-xs sm:text-sm hover:bg-green-700 transition-all transform hover:scale-[1.02] duration-200 flex items-center gap-1 group/btn shrink-0 shadow-2xs"
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
            ))}
          </div>
        )}
        <div className="mt-12 text-center">
          <Link
            to="/herbal"
            className="inline-flex items-center px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-bold rounded-full hover:bg-green-600 hover:text-white transition-all shadow-sm"
          >
            Lihat Semua Produk
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <ImageModal
        isOpen={!!zoomedImage}
        image={zoomedImage}
        onClose={() => setZoomedImage(null)}
      />
    </section>
  );
};

export default HerbalSection;
