import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "../config";
import { fetchServices, urlFor } from "../lib/sanity";
import { SkeletonCard } from "./ui/Skeleton";

const ServicePricing = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <p className="mt-4 text-gray-500">Pilih layanan kesehatan yang sesuai dengan kebutuhan Anda</p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {previewServices.map((srv) => (
              <div key={srv._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 pt-0 flex flex-col hover:shadow-xl transition-all duration-300 group">
                <div className="-mx-8 mb-6 overflow-hidden rounded-t-2xl">
                  <img src={urlFor(srv.image).width(600).height(320).url()} alt={srv.alt} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{srv.name}</h3>
                <p className="mt-4 text-gray-500 flex-grow leading-relaxed line-clamp-3">{srv.shortDesc}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-2xl font-black text-green-600 mb-4">{srv.price}</div>
                  <a href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Halo, saya ingin reservasi layanan ${srv.name} di Klinik RBS.`)}`} target="_blank" rel="noreferrer" className="block text-center w-full py-3 px-4 rounded-xl bg-green-50 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-all transform hover:scale-[1.02] duration-200 flex items-center justify-center gap-2 group/btn">
                    <span>Booking Sekarang</span>
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
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
            to="/layanan"
            className="inline-flex items-center px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-bold rounded-full hover:bg-green-600 hover:text-white transition-all"
          >
            Lihat Semua Layanan
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
