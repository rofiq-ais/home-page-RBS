const Testimonials = () => {
  const list = [
    {
      name: "Bapak Rahmat",
      role: "Pasien Bekam Rutin",
      avatar: "👨‍💼",
      rating: 5,
      review: "Alhamdulillah setelah rutin bekam sebulan sekali di Klinik RBS, badan terasa jauh lebih ringan dan tensi darah lebih stabil. Pelayanannya sangat higienis, cup bekamnya baru dan steril."
    },
    {
      name: "Ibu Fatimah",
      role: "Pasien Terapi Ruqyah",
      avatar: "🧕",
      rating: 5,
      review: "Sangat bersyukur ada klinik syariah dengan ruangan khusus akhwat yang benar-benar tertutup. Terapis wanitanya ramah dan menjelaskan proses ruqyah syar'iyyah dengan baik tanpa ada unsur mistis."
    },
    {
      name: "Mas Dedi",
      role: "Pasien Gurah & Bekam",
      avatar: "👦",
      rating: 5,
      review: "Tempatnya bersih, nyaman, dan tenang. Gurahnya mantap sekali untuk membersihkan lendir pernafasan. Rekomendasi buat yang mau terapi Tibbun Nabawi sesuai sunnah di Jakarta Utara."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Apa Kata Pasien Kami?</h2>
          <p className="mt-4 text-gray-500">Ulasan tulus dari mereka yang telah merasakan manfaat terapi di Klinik RBS</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-6">"{item.review}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
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
