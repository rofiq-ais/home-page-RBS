import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "../config";
import { fetchServices, urlFor } from "../lib/sanity";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { SkeletonCard } from "../components/ui/Skeleton";
import ImageModal from "../components/ImageModal";
import PromoBundleSpotlight from "../components/PromoBundleSpotlight";
import imgDaftarTarif from "../assets/daftar-tarif-rbs.jpg";

const Layanan = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [expandedBenefits, setExpandedBenefits] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleBenefits = (id) => {
    setExpandedBenefits((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    fetchServices()
      .then(setServices)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const isHomeCare = (srv) =>
    srv.slug?.current?.includes("kunjungan") ||
    srv.name?.toLowerCase().includes("kunjungan") ||
    srv.badge?.toLowerCase().includes("rumah") ||
    srv.badge?.toLowerCase().includes("home");

  const clinicCount = services.filter((s) => !isHomeCare(s)).length;
  const homeCareCount = services.filter((s) => isHomeCare(s)).length;

  const filteredServices = services.filter((srv) => {
    if (activeCategory === "homecare") return isHomeCare(srv);
    if (activeCategory === "klinik") return !isHomeCare(srv);
    return true;
  });

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
      <Navbar />
      <AnnouncementBar />

      <section className="bg-gradient-to-b from-green-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Layanan <span className="text-green-600">Terapi Kami</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Pilih layanan kesehatan sesuai syariat yang sesuai dengan kebutuhan Anda. Semua terapi dilakukan oleh terapis bersertifikat dengan alat steril sekali pakai.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                  : "bg-white text-gray-600 hover:text-green-700 hover:bg-green-50 border border-gray-200"
              }`}
            >
              Semua Layanan ({services.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("klinik")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "klinik"
                  ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                  : "bg-white text-gray-600 hover:text-green-700 hover:bg-green-50 border border-gray-200"
              }`}
            >
              <span>🏥</span> Layanan di Klinik ({clinicCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("homecare")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "homecare"
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                  : "bg-white text-emerald-800 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200"
              }`}
            >
              <span>🚗</span> Home Care / Panggilan ({homeCareCount})
            </button>
          </div>

          {activeCategory === "homecare" && (
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200 flex items-start gap-3.5 text-left text-xs sm:text-sm text-emerald-900 animate-in fade-in duration-200">
              <span className="text-2xl mt-0.5 shrink-0">🏠</span>
              <div>
                <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                  Layanan Terapi Kunjungan Langsung ke Rumah Anda
                </h4>
                <p className="text-emerald-800 mt-1 leading-relaxed">
                  Terapis profesional berseragam resmi Klinik RBS hadir langsung membawa perlengkapan steril, ranjang terapi portabel higienis, serta peralatan steril sekali pakai. Dapatkan kenyamanan terapi sunnah penuh privasi tanpa repot keluar rumah.
                </p>
              </div>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filteredServices.map((srv) => (
                <article
                  key={srv._id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:border-green-200 transition-all duration-300 group h-full"
                >
                  <div
                    className="relative overflow-hidden cursor-zoom-in bg-gray-100 aspect-[16/10] group/img shrink-0"
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
                      <span
                        className={`absolute top-2.5 left-2.5 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-md z-10 uppercase tracking-wider flex items-center gap-1 ${
                          srv.badge.toLowerCase().includes("rumah") || srv.badge.toLowerCase().includes("home")
                            ? "bg-emerald-600 text-white"
                            : "bg-amber-400 text-gray-950"
                        }`}
                      >
                        {srv.badge.toLowerCase().includes("rumah") || srv.badge.toLowerCase().includes("home") ? "🚗" : "★"} {srv.badge}
                      </span>
                    )}
                    {srv.duration && (
                      <span className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded-full z-10 shadow-sm">
                        {srv.duration}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {srv.name}
                    </h2>

                    <p className="mt-1.5 text-gray-600 leading-relaxed text-xs sm:text-sm line-clamp-2">
                      {srv.desc || srv.shortDesc}
                    </p>

                    {/* Manfaat Terapi Expandable Toggle */}
                    {srv.benefits && srv.benefits.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-100/90">
                        <button
                          type="button"
                          onClick={() => toggleBenefits(srv._id)}
                          className="w-full py-1.5 px-3 rounded-lg bg-gray-50 hover:bg-green-50 text-green-700 font-semibold text-xs transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {expandedBenefits[srv._id] ? "Sembunyikan Manfaat" : `Lihat ${srv.benefits.length} Manfaat Terapi`}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${expandedBenefits[srv._id] ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {expandedBenefits[srv._id] && (
                          <ul className="mt-2.5 space-y-2 animate-in fade-in duration-200">
                            {srv.benefits.map((b, i) => (
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

                    {/* Harga dan tombol booking rapi 1 baris */}
                    <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block leading-tight">Tarif</span>
                        <div className="text-xl font-black text-green-700">{srv.price}</div>
                      </div>
                      <a
                        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                          `Halo, saya ingin reservasi layanan ${srv.name} di Klinik RBS.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-green-600 text-white font-bold text-xs sm:text-sm hover:bg-green-700 transition-all transform hover:scale-[1.02] duration-200 flex items-center gap-1.5 group/btn shadow-xs shrink-0"
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
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Promo Bundle */}
      <PromoBundleSpotlight />

      {/* Official Pricelist Poster Spotlight */}
      <section id="daftar-tarif" className="py-16 sm:py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-900 via-green-900 to-teal-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background ornaments */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Poster Image Preview with zoom */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400/30 max-w-sm w-full bg-emerald-950/40"
                  onClick={() =>
                    setZoomedImage({
                      src: imgDaftarTarif,
                      title: "Daftar Biaya Terapi Resmi Klinik RBS",
                      subtitle: "Transparan & Sesuai Syariat - Menerima Terapi Kunjungan Ikhwan & Akhwat",
                    })
                  }
                  title="Klik untuk memperbesar brosur tarif"
                >
                  <img
                    src={imgDaftarTarif}
                    alt="Brosur Resmi Daftar Biaya Terapi Klinik Syariah Ruqyah Bekam Sehat RBS"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 backdrop-blur-xs text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/20 transform group-hover:scale-105">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      Klik untuk Perbesar Brosur HD
                    </span>
                  </div>
                </div>

                <p className="text-xs text-emerald-200/80 mt-2.5 flex items-center gap-1.5 text-center">
                  <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Klik brosur untuk melihat resolusi penuh
                </p>
              </div>

              {/* Right Column: Key Details & Homecare Highlights */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-emerald-800/80 text-emerald-200 border border-emerald-700/60 px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
                  <span>📋</span> Brosur Resmi & Transparansi Biaya
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  Daftar Biaya Terapi Resmi & Layanan Kunjungan
                </h2>
                <p className="mt-3 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  Klinik RBS berkomitmen memberikan transparansi biaya penuh tanpa ada biaya tambahan tak terduga. Terapi nyaman, higienis dengan alat steril sekali pakai, dan dibimbing langsung oleh terapis bersertifikat.
                </p>

                {/* Highlights grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3.5 border border-white/10">
                    <div className="text-emerald-300 font-bold text-sm flex items-center gap-1.5">
                      <span>🏷️</span> Biaya Pendaftaran Ringan
                    </div>
                    <p className="text-xs text-emerald-100/80 mt-1">
                      Pendaftaran hanya <strong>Rp 10.000</strong> untuk administrasi & rekam medis terapi.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3.5 border border-white/10">
                    <div className="text-emerald-300 font-bold text-sm flex items-center gap-1.5">
                      <span>⭐</span> Paket Hemat Paling Favorit
                    </div>
                    <p className="text-xs text-emerald-100/80 mt-1">
                      Paket 4-in-1 (Bekam + Check Up + Topung) hanya <strong>Rp 150.000</strong>.
                    </p>
                  </div>

                  <div className="sm:col-span-2 bg-emerald-950/60 rounded-xl p-4 border border-emerald-500/30">
                    <div className="text-amber-300 font-extrabold text-sm flex items-center gap-2">
                      <span className="text-base">🚗</span>
                      <span>Menerima Terapi Kunjungan ke Rumah (Home Care)</span>
                      <span className="bg-amber-400 text-emerald-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Ikhwan & Akhwat
                      </span>
                    </div>
                    <p className="text-xs text-emerald-100/90 mt-1.5 leading-relaxed">
                      Bagi pasien lansia, pasca stroke, atau yang sedang lemah fisik dan kesulitan datang ke klinik, terapis kami siap datang langsung ke kediaman Anda.
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="bg-white/15 px-2.5 py-1 rounded-md text-emerald-200">
                        • Kunjungan Terapi Bekam: <strong>Rp 300.000</strong>
                      </span>
                      <span className="bg-white/15 px-2.5 py-1 rounded-md text-emerald-200">
                        • Kunjungan Terapi Ruqyah: <strong>Rp 350.000</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-7 flex flex-wrap gap-3.5 items-center">
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Halo Admin RBS, saya ingin reservasi terapi berdasarkan daftar biaya resmi.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-sm transition-all shadow-lg hover:shadow-emerald-400/20"
                  >
                    <span>Reservasi Terapi Sekarang</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </a>

                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Halo Admin RBS, saya ingin tanya info mengenai Layanan Terapi Kunjungan ke Rumah.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
                  >
                    <span>Tanya Terapi Kunjungan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Belum yakin layanan mana yang cocok?
          </h2>
          <p className="text-green-100 mt-3">
            Konsultasikan keluhan Anda gratis via WhatsApp. Terapis kami siap membantu.
          </p>
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Halo, saya ingin konsultasi terapi di Klinik RBS.")}`}
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

export default Layanan;
