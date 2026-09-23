import { WHATSAPP_LINK } from "../config";

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 lg:py-28">
    {/* Decorative background elements */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-green-200/40 to-emerald-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-green-100/50 to-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-gradient-to-t from-green-200/20 to-transparent rounded-full blur-3xl"></div>
      {/* Geometric accent */}
      <div className="absolute top-20 right-10 lg:right-32 w-16 h-16 border-2 border-green-300/30 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-20 left-10 lg:left-32 w-12 h-12 border-2 border-green-400/20 rounded-full"></div>
      <div className="absolute top-40 left-1/4 w-3 h-3 bg-green-400/30 rounded-full"></div>
      <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-emerald-400/20 rounded-full"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column - Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Klinik Syariah Ruqyah Bekam Sehat
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Hidup Sehat,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mt-2">
              Meraih Mardhotillah
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-500 sm:text-xl leading-relaxed">
            Pengobatan {" "}
            <span className="font-semibold text-green-700">sunnah Nabi,</span>{" "}
            Profesional, Berkualitas, Berstandar PBI, Aman, Nyaman tanpa rasa sakit. Insya Allah membantu mengatasi berbagai keluhan penyakit, baik jasmani maupun rohani. Melayani dengan sepenuh hati. Teruji sejak 2003.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-full text-white bg-green-600 hover:bg-green-700 transition-all shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="transition-transform group-hover:scale-110">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Konsultasi via WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-full border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all"
            >
              Lihat Layanan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Legalitas Dinkes
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Terapis Bersertifikat
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Alat Steril & Higienis
            </div>
          </div>
        </div>

        {/* Right column - Visual cards */}
        <div className="relative hidden lg:flex justify-center items-center">
          {/* Main decorative card stack */}
          <div className="relative w-full max-w-md">
            {/* Back card */}
            <div className="absolute -top-4 -right-4 w-full h-72 bg-gradient-to-br from-green-200/60 to-emerald-100/40 rounded-3xl backdrop-blur-sm border border-green-200/50"></div>
            {/* Middle card */}
            <div className="absolute -top-2 -right-2 w-full h-72 bg-gradient-to-br from-green-100/80 to-white/60 rounded-3xl backdrop-blur-sm border border-green-200/40"></div>
            {/* Main card */}
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl border border-green-100 shadow-xl shadow-green-900/5 p-8">
              {/* Service icons grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: "🤲", label: "Ruqyah" },
                  { icon: "⭕", label: "Bekam" },
                  { icon: "🌿", label: "Gurah" },
                  { icon: "💆", label: "Totok" },
                  { icon: "🍯", label: "Herbal" },
                  { icon: "📋", label: "Check Up" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-green-50/80 hover:bg-green-100 transition-colors cursor-default">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-medium text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Mini stat bar */}
              <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4">
                <div className="text-center">
                  <div className="text-xl font-extrabold text-green-700">6+</div>
                  <div className="text-xs text-gray-500">Layanan</div>
                </div>
                <div className="w-px h-8 bg-green-200"></div>
                <div className="text-center">
                  <div className="text-xl font-extrabold text-green-700">100%</div>
                  <div className="text-xs text-gray-500">Sunnah</div>
                </div>
                <div className="w-px h-8 bg-green-200"></div>
                <div className="text-center">
                  <div className="text-xl font-extrabold text-green-700">24/7</div>
                  <div className="text-xs text-gray-500">Konsultasi</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg shadow-green-900/10 border border-green-100 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Terdaftar Dinkes</div>
                <div className="text-xs text-gray-500">STPT resmi Jakarta Utara</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
