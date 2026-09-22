import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Apakah terapi ruqyah aman dan berdasar syariat?",
      a: "Sangat aman. Klinik RBS hanya mempraktikkan Ruqyah Syar'iyyah yang bersih dari kesyirikan, bersumber dari Al-Qur'an dan As-Sunnah, serta dibimbing oleh ustadz/terapis berpengalaman."
    },
    {
      q: "Berapa lama durasi untuk sekali terapi bekam?",
      a: "Rata-rata sesi terapi bekam memakan waktu 45 hingga 60 menit. Ini mencakup proses sterilisasi, pemijatan ringan (totok punggung), pembekaman, hingga pembersihan akhir."
    },
    {
      q: "Apakah ruangan terapi pria dan wanita dipisah?",
      a: "Ya, demi menjaga kenyamanan dan syariat, kami menyediakan ruangan terapi yang terpisah penuh antara Ikhwan (pria) dan Akhwat (wanita) dengan terapis yang sesuai dengan gender pasien."
    },
    {
      q: "Apakah alat yang digunakan steril?",
      a: "Tentu. Semua jarum/pisau bekam dan cup bekam yang digunakan adalah standar medis sekali pakai (disposable). Kami sangat menjaga higienitas untuk mencegah penularan penyakit."
    },
    {
      q: "Bagaimana cara melakukan reservasi?",
      a: "Anda cukup memilih layanan di website ini dan klik 'Booking Sekarang' untuk terhubung otomatis dengan WhatsApp admin kami untuk menentukan hari dan jam kedatangan."
    }
  ];

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Pertanyaan Umum (FAQ)</h2>
          <p className="mt-4 text-gray-500">Hal-hal yang sering ditanyakan oleh calon pasien kami</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-950 hover:text-green-600 transition-colors focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="ml-4 flex-shrink-0 text-green-600">
                  {activeIndex === idx ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === idx ? "max-h-48 border-t border-gray-50" : "max-h-0"
                }`}
              >
                <div className="p-6 text-sm text-gray-600 leading-relaxed bg-green-50/20">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
