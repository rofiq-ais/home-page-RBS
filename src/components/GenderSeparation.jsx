import imgRuangIkhwan from "../assets/ruang ikhwan.jpeg";
import imgRuangAkhwat from "../assets/ruang akhwat.jpeg";
import { WHATSAPP_ADMINS } from "../config";

const GenderSeparation = () => {
  const adminIkhwan = WHATSAPP_ADMINS[0] || { phone: "6281213840501" };
  const adminAkhwat = WHATSAPP_ADMINS[1] || { phone: "6285782819183" };

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            Komitmen Syariah & Privasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Privasi & Batasan Aurat Terjaga 100% Sesuai Syariat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Kenyamanan dan ketenangan hati Anda adalah prioritas kami. Ruangan dan terapis dipisah penuh antara pasien pria (Ikhwan) dan pasien wanita (Akhwat).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Ikhwan */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={imgRuangIkhwan}
                alt="Fasilitas Ruang Perawatan Khusus Ikhwan Klinik RBS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-emerald-700/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <span>👨</span> Khusus Pasien Ikhwan (Pria)
              </div>
            </div>

            <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  Ruang Perawatan Ikhwan (Pria)
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Suasana terapi yang bersih, tenang, dan tertata rapi. Pasien pria dapat berkonsultasi mengenai keluhan stamina, fisik, maupun keluhan medis lainnya dengan nyaman tanpa canggung.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Ditangani terapis pria bersertifikat resmi PBI Nasional",
                    "Fasilitas bed terapi nyaman dan higienis",
                    "Konsultasi terbuka keluhan vitalitas dan kesehatan pria",
                    "Alat bekam dan jarum disposable steril sekali pakai",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`https://wa.me/${adminIkhwan.phone}?text=${encodeURIComponent("Halo Admin RBS, saya ingin reservasi terapi untuk pasien pria.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Reservasi Pasien Pria (Ikhwan)</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Card Akhwat */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={imgRuangAkhwat}
                alt="Fasilitas Ruang Perawatan Khusus Akhwat Klinik RBS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-teal-700/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <span>🧕</span> Khusus Pasien Akhwat (Wanita)
              </div>
            </div>

            <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  Ruang Perawatan Akhwat (Wanita)
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Ruangan tertutup privat yang didesain khusus agar para muslimah, ibu-ibu, dan remaja putri merasa tenang, terjaga auratnya, dan nyaman selama proses terapi berlangsung.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "100% Ditangani oleh terapis wanita (Akhwat) yang ramah & amanah",
                    "Ruangan tertutup penuh tanpa akses pandangan dari luar",
                    "Sangat nyaman untuk muslimah, ibu hamil, atau pasca melahirkan",
                    "Pendampingan terapi dengan bimbingan doa-doa sunnah yang menenangkan",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-gray-700">
                      <svg className="w-4 h-4 text-teal-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`https://wa.me/${adminAkhwat.phone}?text=${encodeURIComponent("Halo Admin RBS, saya ingin reservasi terapi khusus pasien wanita (dengan Terapis Akhwat).")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Reservasi Pasien Wanita (Akhwat)</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GenderSeparation;
