import { WHATSAPP_LINK } from "../config";

const SymptomMatcher = () => {
  const problems = [
    {
      icon: "💆‍♂️",
      title: "Pegal Kronis, Pundak Kaku & Nyeri Pinggang",
      symptoms: "Otot tegang akibat lelah beraktivitas, duduk lama di kantor, leher kaku, atau badan terasa pegal berat.",
      recommendation: "Bekam Medis + Totok Punggung",
      benefit: "Mengurai sumbatan saraf tulang belakang dan membuang darah statis beracun agar badan langsung enteng.",
      badge: "Paling Banyak Dipilih",
      waText: "Halo Admin RBS, saya sering merasa pundak kaku dan nyeri pinggang. Mau tanya terapi bekam dan totok punggung.",
    },
    {
      icon: "🌿",
      title: "Hidung Mampet, Sinusitis & Nafas Berat",
      symptoms: "Lendir/dahak menumpuk, hidung tersumbat menahun, migrain di area dahi, nafas berbunyi, atau suara serak.",
      recommendation: "Gurah Hidung Tradisional Herbal",
      benefit: "Mengeluarkan lendir kotor dan kotoran pernapasan secara alami hingga rongga kepala & dada plong seketika.",
      badge: "Spesialis Pernapasan",
      waText: "Halo Admin RBS, saya mengalami hidung tersumbat / sinusitis, mau konsultasi terapi gurah hidung.",
    },
    {
      icon: "🤲",
      title: "Gelisah, Susah Tidur & Keresahan Batin",
      symptoms: "Pikiran tidak tenang, sering cemas berlebih, mimpi buruk berulang, rasa berat di dada tanpa sebab medis.",
      recommendation: "Ruqyah Syar'iyyah Murni",
      benefit: "Terapi spiritual menyejukkan hati dengan lantunan ayat suci Al-Qur'an dan doa sahih, 100% bebas dari klenik/syirik.",
      badge: "Sesuai Sunnah",
      waText: "Halo Admin RBS, saya ingin konsultasi mengenai terapi Ruqyah Syari'ah.",
    },
    {
      icon: "📊",
      title: "Mudah Lelah, Darah Tinggi & Kolesterol",
      symptoms: "Kepala sering berdenyut, leher tegang, mudah mengantuk, serta ada riwayat asam urat atau kolesterol tinggi.",
      recommendation: "Check Up QRMA + Bekam Hijamah",
      benefit: "Pemindaian puluhan organ tubuh tanpa jarum dalam 60 detik, dilanjutkan pengeluaran darah kotor metabolik.",
      badge: "Deteksi & Detoks",
      waText: "Halo Admin RBS, saya ingin check up kesehatan QRMA dan terapi bekam di Klinik RBS.",
    },
  ];

  return (
    <section id="peta-keluhan" className="py-20 bg-gradient-to-b from-white to-gray-50/60 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            Peta Keluhan & Solusi Terapi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Keluhan Apa yang Sedang Anda Rasakan?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Kenali kondisi tubuh Anda dan temukan rekomendasi terapi sunnah yang tepat untuk memulihkan kebugaran jasmani serta ketenangan jiwa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-4xl p-3 bg-green-50 rounded-2xl border border-green-100/60 shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  <strong className="text-gray-700 font-semibold">Gejala umum:</strong> {item.symptoms}
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 mb-6">
                  <div className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider mb-1">
                    Rekomendasi Terapi RBS:
                  </div>
                  <div className="text-base font-bold text-green-800">
                    {item.recommendation}
                  </div>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    &bull; {item.benefit}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(item.waText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-white border border-green-600 text-green-700 font-bold text-sm hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn shadow-2xs hover:shadow-md"
                >
                  <span>Konsultasikan Keluhan Ini</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomMatcher;
