import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "../config";
import { fetchServices, urlFor } from "../lib/sanity";
import { SkeletonCard } from "./ui/Skeleton";
import ImageModal from "./ImageModal";
import imgDaftarTarif from "../assets/daftar-tarif-rbs.jpg";

const ServicePricing = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    fetchServices()
      .then(setServices)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const previewServices = services.slice(0, 4);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Layanan & Harga</h2>
          <p className="mt-4 text-gray-500">Pilih layanan kesehatan syariah yang sesuai dengan kebutuhan Anda</p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {previewServices.map((srv) => (
              <div
                key={srv._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 pt-0 flex flex-col hover:shadow-xl hover:border-green-200 transition-all duration-300 group h-full"
              >
                <div
                  className="-mx-5 mb-4 overflow-hidden rounded-t-2xl relative cursor-zoom-in group/img aspect-[16/10] bg-gray-100 shrink-0"
                  onClick={() =>
                    setZoomedImage({
                      src: urlFor(srv.image).url(),
                      title: srv.name,
                      subtitle: `${srv.duration || ""} ${srv.duration && srv.price ? "•" : ""} ${srv.price || ""}`,
                    })
                  }
                  title="Klik untuk melihat foto"
                >
                  <img
                    src={urlFor(srv.image).width(600).height(375).url()}
                    alt={srv.alt || srv.name}
                    className="w-full h-full object-cover object-[center_28%] group-hover/img:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      Lihat Foto
                    </span>
                  </div>

                  {srv.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-amber-400 text-gray-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-md z-10 uppercase tracking-wider">
                      ★ {srv.badge}
                    </span>
                  )}
                  {srv.duration && (
                    <span className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded-full z-10 shadow-sm">
                      {srv.duration}
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-1">
                    {srv.name}
                  </h3>

                  <p className="mt-1.5 text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 flex-1">
                    {srv.shortDesc || srv.desc}
                  </p>
                </div>

                {/* Bagian harga & tombol booking rapi 1 baris */}
                <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block leading-tight">Tarif</span>
                    <span className="text-lg sm:text-xl font-black text-green-700">{srv.price}</span>
                  </div>
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                      `Halo, saya ingin reservasi layanan ${srv.name} di Klinik RBS.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-green-50 text-green-700 font-bold text-xs sm:text-sm hover:bg-green-600 hover:text-white transition-all transform hover:scale-[1.02] duration-200 flex items-center gap-1.5 group/btn shrink-0"
                  >
                    <span>Booking</span>
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
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/layanan"
            className="inline-flex items-center px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-bold rounded-full hover:bg-green-600 hover:text-white transition-all shadow-sm"
          >
            Lihat Semua Layanan
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <button
            type="button"
            onClick={() =>
              setZoomedImage({
                src: imgDaftarTarif,
                title: "Daftar Biaya Terapi Resmi Klinik RBS",
                subtitle: "Transparan & Sesuai Syariat - Menerima Terapi Kunjungan Ikhwan & Akhwat",
              })
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-800 border border-emerald-200/90 font-bold rounded-full hover:bg-emerald-100 hover:border-emerald-300 transition-all text-sm shadow-2xs cursor-pointer"
          >
            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Buka Brosur Daftar Biaya Resmi</span>
          </button>
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

export default ServicePricing;
