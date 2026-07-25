const TrustSignals = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Mengapa Memilih Kami?</h2>
        <p className="mt-4 text-gray-500">Kami mengutamakan kualitas, kebersihan, dan syariat dalam setiap pelayanan.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Legalitas Dinkes", desc: "STPT: 001/B.41/31.72.03.1003/-1.779.3/2018", icon: "⚖️" },
          { title: "Terapis Bersertifikat", desc: "Standar PBI Nasional", icon: "🎓" },
          { title: "Ruangan Terpisah", desc: "Privasi terjaga untuk Ikhwan & Akhwat", icon: "🚪" },
          { title: "Alat Higienis", desc: "Standar alat steril sekali pakai", icon: "✨" },
        ].map((item, idx) => (
          <div key={idx} className="text-center p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <h3 className="text-lg leading-6 font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSignals;
