import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "../config";

const CTA = () => (
  <section className="py-20 bg-green-600">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
        Mulai Perjalanan Sehat Anda Hari Ini
      </h2>
      <p className="text-green-100 text-lg mb-10">
        Jangan tunda kesehatan Anda. Hubungi kami sekarang untuk konsultasi gratis dan jadwalkan kunjungan Anda ke Klinik RBS.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl">
          Hubungi via WhatsApp
        </a>
        <Link to="/layanan" className="px-8 py-4 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-all">
          Lihat Layanan
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;
