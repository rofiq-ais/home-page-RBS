import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_BENCHMARK, GOOGLE_MAPS_LINK } from "../config";

const ContactSection = () => {
  const operations = [
    { days: "Senin - Kamis", hours: "09:00 - 20:00" },
    { days: "Jumat", hours: "13:00 - 20:00 (Setelah Jumatan)" },
    { days: "Sabtu - Minggu", hours: "08:00 - 20:00" }
  ];

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Lokasi & Jam Operasional</h2>
          <p className="mt-4 text-gray-500">Kunjungi klinik kami atau hubungi kami sebelum kedatangan</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Alamat & Jam Buka */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-950 mb-3 flex items-center gap-2">
                  <span className="text-green-600">📍</span> Alamat Klinik
                </h3>
                <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Alamat Resmi
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Patokan: {CLINIC_BENCHMARK}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-base">
                      {CLINIC_NAME}
                    </h4>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                      {CLINIC_ADDRESS}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-gray-200/60 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-600">
                    <span className="font-semibold text-gray-800">Telepon & WhatsApp:</span>
                    <a
                      href="https://wa.me/6285782819183"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-700 font-bold hover:underline"
                    >
                      0857-8281-9183
                    </a>
                    <span className="text-gray-300">&bull;</span>
                    <a
                      href="https://wa.me/6281213840501"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-700 font-bold hover:underline"
                    >
                      0812-1384-0501
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-950 mb-3 flex items-center gap-2">
                  <span className="text-green-600">⏰</span> Jam Operasional
                </h3>
                <div className="space-y-3">
                  {operations.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50">
                      <span className="text-sm font-semibold text-gray-700">{item.days}</span>
                      <span className="text-sm text-gray-500 font-medium bg-green-50 text-green-700 px-3 py-1 rounded-full">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50/60 rounded-2xl border border-green-100 flex items-center gap-4">
              <span className="text-3xl">🧭</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Petunjuk Arah & Google Maps</h4>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 mt-1 text-xs text-green-700 font-bold hover:underline"
                >
                  <span>Buka di Google Maps Langsung &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
            <iframe
              title="Peta Lokasi Klinik RBS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.037136365022!2d106.9079633!3d-6.1257125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMzIuNiJTIDEwNsKwNTQnMjguNyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
