const TherapySteps = () => {
  const steps = [
    {
      num: "01",
      icon: "💬",
      title: "Konsultasi & Diagnosa Keluhan",
      desc: "Terapis mendengarkan riwayat keluhan Anda dengan ramah, mengecek tekanan darah, dan menentukan titik terapi yang paling tepat.",
    },
    {
      num: "02",
      icon: "💆",
      title: "Relaksasi & Totok Saraf Ringan",
      desc: "Pemijatan lembut di sepanjang jalur saraf tulang belakang agar otot tidak tegang, sirkulasi lancar, dan tubuh benar-benar rileks.",
    },
    {
      num: "03",
      icon: "✨",
      title: "Tindakan Terapi Higienis & Steril",
      desc: "Bekam, ruqyah, atau gurah dilakukan dengan alat medis sekali pakai (disposable). Nyaman, tenang, dan bebas dari rasa sakit berlebih.",
    },
    {
      num: "04",
      icon: "🍯",
      title: "Pemulihan Herba & Edukasi Sehat",
      desc: "Menikmati seduhan madu alami/herba untuk mengembalikan stamina, disertai anjuran gaya hidup sehat sunnah pasca terapi di rumah.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            Transparansi Layanan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Alur Terapi yang Nyaman & Tenang di Klinik RBS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Bagi Anda yang baru pertama kali mencoba pengobatan sunnah, tidak perlu ragu atau cemas. Seluruh proses dilakukan bertahap dan penuh kehati-hatian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-50/80 rounded-3xl p-7 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl p-3 bg-white rounded-2xl shadow-2xs group-hover:scale-110 transition-transform">
                    {step.icon}
                  </span>
                  <span className="font-mono text-3xl font-black text-green-200 group-hover:text-green-600 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-green-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-green-700">
                <span>Tahap {idx + 1} dari 4</span>
                <span className="text-green-400">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapySteps;
