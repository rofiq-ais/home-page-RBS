import { useState } from "react";
import posterBundle from "../assets/paket-bundling-rbs.jpg";
import ImageModal from "./ImageModal";
import { WHATSAPP_LINK } from "../config";

const PromoBundleSpotlight = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <section id="promo-bundle" className="py-16 sm:py-20 bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Visual Poster with Click-to-Zoom */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400/40 cursor-zoom-in group/poster bg-black/40"
                onClick={() =>
                  setZoomedImage({
                    src: posterBundle,
                    title: "Poster Resmi: Paket Terapi RBS (Special Offer Rp 150.000)",
                    subtitle: "Check Up + Bekam + Totok Syaraf + Totok Punggung",
                  })
                }
                title="Klik untuk memperbesar poster resmi"
              >
                <img
                  src={posterBundle}
                  alt="Poster Paket Terapi RBS - Check Up Bekam Totok Syaraf Totok Punggung Hanya 150rb"
                  className="w-full h-auto object-cover group-hover/poster:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover zoom pill */}
                <div className="absolute inset-0 bg-black/0 group-hover/poster:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/poster:opacity-100 transition-opacity bg-black/80 backdrop-blur-xs text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Perbesar Poster Resmi
                  </span>
                </div>

                {/* Ribbon Tag */}
                <div className="absolute top-3 left-3 bg-amber-400 text-gray-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <span>★</span> Special Offer
                </div>
              </div>

              <p className="text-xs text-emerald-200/80 mt-3 flex items-center gap-1.5 text-center">
                <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Klik poster untuk melihat resolusi penuh
              </p>
            </div>

            {/* Right Column: Detail Paket Sesuai Poster */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                ★ Promo Bundling 4-in-1
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                PAKET TERAPI RBS
              </h2>
              <div className="text-lg sm:text-xl font-bold text-emerald-300 mt-1">
                CHECK UP + BEKAM + TOTOK SYARAF + TOTOK PUNGGUNG
              </div>

              {/* Price Banner */}
              <div className="mt-5 inline-flex items-center gap-4 bg-emerald-900/80 border border-emerald-400/40 p-4 rounded-2xl shadow-inner">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-200 font-bold block">Biaya Terapi Lengkap</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-gray-300">Hanya</span>
                    <span className="text-3xl sm:text-4xl font-black text-amber-300">Rp 150.000</span>
                  </div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-xs text-emerald-100">
                  <span className="font-bold text-amber-400 block">4 Terapi Sekaligus</span>
                  Hemat ratusan ribu dibanding tarif satuan
                </div>
              </div>

              {/* 4 Komponen Terapi dalam Poster */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    name: "Check Up Kesehatan",
                    desc: "Skrining fungsi organ & metabolisme tubuh secara akurat.",
                    icon: "📋",
                  },
                  {
                    name: "Bekam / Hijamah Medis",
                    desc: "Detoksifikasi darah kotor, jarum steril sekali pakai standar PBI.",
                    icon: "⭕",
                  },
                  {
                    name: "Totok Syaraf",
                    desc: "Menstimulasi titik simpul saraf untuk memulihkan vitalitas.",
                    icon: "⚡",
                  },
                  {
                    name: "Totok Punggung",
                    desc: "Mengurai sumbatan di jalur tulang belakang agar badan plong.",
                    icon: "💆",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-2xl p-1 bg-white/10 rounded-lg shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.name}</h4>
                      <p className="text-xs text-emerald-100/70 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Praktisi & Legalitas */}
              <div className="mt-5 p-3.5 bg-black/20 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">👤</span>
                  <span>Terapis Utama: <strong className="text-white font-bold">Abu Fariz</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <span>⚖️</span>
                  <span>STPT: <strong className="text-white font-mono">001/B.41/31.72.03.1003/-1.779.3/2018</strong></span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-7 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Halo Admin RBS, saya ingin reservasi Paket Terapi RBS 4-in-1 (Check Up + Bekam + Totok Syaraf + Totok Punggung) Special Offer Rp 150.000.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-400 text-gray-950 font-black text-base hover:bg-amber-300 transition-all shadow-xl hover:shadow-amber-400/30 flex items-center justify-center gap-2.5 group transform hover:scale-[1.02]"
                >
                  <span>Ambil Paket Terapi 150rb</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
                <span className="text-xs text-emerald-200/80">
                  ⚡ Kuota terbatas harian agar terapi tetap steril & nyaman.
                </span>
              </div>
            </div>

          </div>
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

export default PromoBundleSpotlight;
