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
                <p className="text-gray-600 leading-relaxed">
                  Jl. Menteng Terusan No. 32 (Depan Bank BRI), Pasar Sinar Lagoa, Jakarta Utara 14270
                </p>
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
              <span className="text-3xl">📞</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Butuh Bantuan Navigasi?</h4>
                <a
                  href="https://maps.google.com/?q=Jl.+Menteng+Terusan+No.+32+Pasar+Sinar+Lagoa+Jakarta+Utara"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-green-700 font-bold hover:underline"
                >
                  Buka Petunjuk Arah Google Maps &rarr;
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
