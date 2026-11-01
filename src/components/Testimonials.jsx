const Testimonials = () => {
  const list = [
    {
      name: "Bapak Hendra",
      age: "48 Tahun",
      location: "Koja, Jakarta Utara",
      therapy: "Terapi Bekam Medis & Totok Punggung",
      avatar: "👨‍💼",
      rating: 5,
      complaint: "Pundak sering kaku menahun, leher tegang, dan tensi darah sering naik sampai 155/95 akibat kelelahan kerja.",
      result: "Alhamdulillah setelah diterapi bekam dan totok punggung oleh ustadz terapisnya, malamnya tidur langsung pulas sekali. Bangun pagi badan terasa enteng seperti hilang beban berat. Alat bekam dan jarumnya benar-benar dibuka baru dari bungkus steril di depan saya.",
    },
    {
      name: "Ibu Siti Khadijah",
      age: "41 Tahun",
      location: "Lagoa, Jakarta Utara",
      therapy: "Terapi Ruqyah Syari'ah & Gurah Hidung",
      avatar: "🧕",
      rating: 5,
      complaint: "Dada terasa sesak gelisah tanpa sebab medis, sering mimpi buruk, dan hidung sering mampet berlendir.",
      result: "Awalnya saya takut ruqyah karena membayangkan hal mistis. Ternyata di RBS sangat adem, murni lantunan ayat Al-Qur'an dan doa Nabi. Ruangan akhwatnya sangat tertutup dan terapis wanitanya ramah sekali. Hati terasa tenang plong dan napas jadi sangat lega setelah gurah.",
    },
    {
      name: "Mas Faiz Akbar",
      age: "29 Tahun",
      location: "Tanjung Priok, Jakarta Utara",
      therapy: "Paket Sehat (Check Up + Bekam)",
      avatar: "👦",
      rating: 5,
      complaint: "Sering mengantuk berat di siang hari, kolesterol sedikit tinggi, dan badan terasa cepat lemas.",
      result: "Cek kesehatan QRMA-nya praktis tanpa suntik jarum, langsung ketahuan titik lemah tubuh. Dilanjutkan bekam steril, darah kotornya keluar banyak. Pelayanan cepat, tempatnya bersih, dan parkir motor/mobil aman.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50/70 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <span>⭐</span> Rating 4.9/5 dari 100+ Pasien di Jakarta Utara
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Kisah Nyata Pasien Klinik RBS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Ulasan tulus dari para pasien yang telah berikhtiar dan merasakan langsung perubahan kebugaran serta ketenangan jiwa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Therapy Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/80">
                    {item.therapy}
                  </span>
                </div>

                {/* Complaint Box */}
                <div className="bg-red-50/50 rounded-xl p-3 border border-red-100/70 mb-4 text-xs text-gray-700">
                  <strong className="text-red-800 font-bold block mb-0.5">Keluhan Awal:</strong>
                  {item.complaint}
                </div>

                {/* Result Quote */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{item.result}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="flex items-center gap-3.5 border-t border-gray-100 pt-4">
                <div className="w-11 h-11 bg-green-100 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm leading-snug">{item.name}</h4>
                  <p className="text-xs text-gray-400 mt-0.5 font-medium">{item.age} &bull; {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
