import { useEffect, useState } from "react";
import { WHATSAPP_ADMINS } from "../config";

const WhatsAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const handleWhatsAppClick = (e) => {
      // Find closest anchor tag
      const a = e.target.closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (href && href.startsWith("#whatsapp")) {
        e.preventDefault();

        // Extract text param if any
        let text = "Halo, saya ingin konsultasi di Klinik RBS.";
        if (href.includes("?text=")) {
          text = decodeURIComponent(href.split("?text=")[1]);
        }

        setMessageText(text);
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleWhatsAppClick);
    return () => document.removeEventListener("click", handleWhatsAppClick);
  }, []);

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-7 shadow-2xl animate-in zoom-in-95 duration-200 border border-green-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Layanan Pasien Siap Membantu
            </div>
            <h3 id="whatsapp-modal-title" className="text-xl font-bold text-gray-900">
              Pilih Admin WhatsApp
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Silakan pilih admin untuk reservasi atau konsultasi terapi:
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Tutup modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          {WHATSAPP_ADMINS.map((admin) => (
            <a
              key={admin.id || admin.phone}
              href={`https://wa.me/${admin.phone}?text=${encodeURIComponent(messageText)}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full p-4 rounded-2xl border border-gray-100 bg-gray-50/70 hover:bg-green-50/70 hover:border-green-200 transition-all group shadow-xs hover:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-base leading-snug group-hover:text-green-700 transition-colors">
                    {admin.name}
                  </div>
                  {admin.desc && (
                    <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                      {admin.desc}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-green-600 font-semibold text-xs bg-white px-3 py-1.5 rounded-full border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-all shrink-0 ml-2">
                Chat &rarr;
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 p-3 bg-emerald-50/90 rounded-2xl border border-emerald-100/90 text-left">
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-700 text-sm mt-0.5 shrink-0">🕌</span>
            <p className="text-[11px] sm:text-xs text-emerald-800 leading-relaxed font-medium">
              <strong>Standar Syariah RBS:</strong> Pasien pria ditangani terapis ikhwan di ruangan pria, dan pasien wanita ditangani 100% oleh terapis akhwat di ruangan khusus wanita yang aman & privat.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 text-center">
          <p className="text-[11px] text-gray-400">
            Jam Operasional Chat: Senin - Minggu (08:00 - 20:00 WIB)
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;
