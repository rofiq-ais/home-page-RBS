import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "../config";
import { fetchServices, urlFor } from "../lib/sanity";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { SkeletonCard } from "../components/ui/Skeleton";

const Layanan = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices()
      .then(setServices)
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
            Layanan <span className="text-green-600">Terapi Kami</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Pilih layanan kesehatan sesuai syariat yang sesuai dengan kebutuhan Anda. Semua terapi dilakukan oleh terapis bersertifikat dengan alat steril sekali pakai.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((srv) => (
                <article
                  key={srv._id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={urlFor(srv.image).width(600).height(400).url()}
                      alt={srv.alt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {srv.name}
                      </h2>
                      <span className="shrink-0 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                        {srv.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-500 leading-relaxed text-sm flex-grow line-clamp-3">
                      {srv.desc}
                    </p>
                    <ul className="mt-4 space-y-1.5 flex-grow">
                      {srv.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-4">
                      <div className="text-2xl font-black text-green-600">{srv.price}</div>
                      <a
                        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                          `Halo, saya ingin reservasi layanan ${srv.name} di Klinik RBS.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all transform hover:scale-[1.02] duration-200 flex items-center gap-1.5 group/btn"
                      >
                        <span>Booking</span>
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
    </div>
  );
};

export default Layanan;
