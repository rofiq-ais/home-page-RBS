import { useState } from 'react';
import imgSertifikat1 from '../assets/sertifikat 1.jpeg';
import imgSertifikat2 from '../assets/sertifikat 2.jpeg';
import imgRuangIkhwan from '../assets/ruang ikhwan.jpeg';
import imgRuangAkhwat from '../assets/ruang akhwat.jpeg';
import imgRuangTunggu from '../assets/ruang tunggu.jpeg';
import imgTampakLuar from '../assets/tampak luar.jpeg';

const TrustSignals = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const signals = [
    { 
      title: "Legalitas Dinkes", 
      desc: "STPT: 001/B.41/31.72.03.1003/-1.779.3/2018", 
      icon: "⚖️",
      images: []
    },
    { 
      title: "Terapis Bersertifikat", 
      desc: "Standar PBI Nasional", 
      icon: "🎓",
      images: [
        { src: imgSertifikat1, caption: "Sertifikat PBI Nasional 1" },
        { src: imgSertifikat2, caption: "Sertifikat PBI Nasional 2" }
      ]
    },
    { 
      title: "Ruangan Terpisah & Fasilitas", 
      desc: "Privasi terjaga untuk Ikhwan & Akhwat dengan ruang tunggu yang nyaman", 
      icon: "🚪",
      images: [
        { src: imgRuangIkhwan, caption: "Fasilitas Ruang Perawatan Ikhwan" },
        { src: imgRuangAkhwat, caption: "Fasilitas Ruang Perawatan Akhwat" },
        { src: imgRuangTunggu, caption: "Ruang Tunggu Pasien yang Nyaman" },
        { src: imgTampakLuar, caption: "Tampak Luar Gedung Klinik" }
      ]
    },
    { 
      title: "Alat Higienis", 
      desc: "Standar alat steril sekali pakai", 
      icon: "✨",
      images: []
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Mengapa Memilih Kami?</h2>
          <p className="mt-4 text-gray-500">Kami mengutamakan kualitas, kebersihan, dan syariat dalam setiap pelayanan.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedItem(item)}
              className="text-center p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col items-center h-full"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-lg leading-6 font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 flex-grow">{item.desc}</p>
              <div className="mt-6 text-sm text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Lihat Detail <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200" 
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-10">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-3xl">{selectedItem.icon}</span>
                {selectedItem.title}
              </h3>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Tutup modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 mb-8 text-lg">{selectedItem.desc}</p>
              
              {selectedItem.images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedItem.images.map((img, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div 
                        className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 group relative aspect-[4/3] cursor-zoom-in"
                        onClick={() => setZoomedImage(img)}
                      >
                        <img 
                          src={img.src} 
                          alt={img.caption} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                      </div>
                      <p className="text-center font-medium text-gray-700">{img.caption}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-gray-400">Data/Foto belum tersedia saat ini.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button 
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none"
            aria-label="Tutup gambar"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" 
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={zoomedImage.src} 
              alt={zoomedImage.caption} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200" 
            />
            <p className="text-white mt-4 text-lg font-medium tracking-wide drop-shadow-md">
              {zoomedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrustSignals;

