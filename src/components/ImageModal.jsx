import { useEffect } from "react";

const ImageModal = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
        aria-label="Tutup gambar"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/40">
          <img
            src={image.src}
            alt={image.alt || image.title || "Detail Gambar"}
            className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-2xl"
          />
        </div>
        {(image.title || image.subtitle) && (
          <div className="text-white mt-3 text-center">
            {image.title && <h4 className="font-bold text-lg text-white drop-shadow">{image.title}</h4>}
            {image.subtitle && <p className="text-sm text-green-300 font-medium mt-0.5 drop-shadow">{image.subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
