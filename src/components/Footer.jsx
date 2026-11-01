import { Link } from "react-router-dom";
import logoRbs from "../assets/logo-rbs.jpeg";
import { CLINIC_ADDRESS, CLINIC_BENCHMARK, GOOGLE_MAPS_LINK } from "../config";

const Footer = () => (
  <footer className="bg-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src={logoRbs}
              alt="Logo Klinik RBS"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-700"
            />
            <div className="leading-tight">
              <div className="text-xs text-gray-400 font-medium">Klinik</div>
              <div className="text-lg font-extrabold text-white">Ruqyah Bekam Sehat</div>
            </div>
          </div>
          <div className="text-gray-400 mt-3 text-xs sm:text-sm space-y-1 md:ml-[60px] max-w-sm">
            <p className="text-gray-300 font-medium">
              {CLINIC_ADDRESS}
            </p>
            <p className="text-xs text-gray-400">Patokan: {CLINIC_BENCHMARK}</p>
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1 text-xs">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
              >
                <span>📍 Buka Google Maps</span>
              </a>
              <span className="text-gray-500">&bull;</span>
              <a href="https://wa.me/6285782819183" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                0857-8281-9183
              </a>
              <span className="text-gray-500">/</span>
              <a href="https://wa.me/6281213840501" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                0812-1384-0501
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Beranda</Link></li>
            <li><Link to="/layanan" className="text-gray-400 hover:text-white">Layanan</Link></li>
            <li><Link to="/herbal" className="text-gray-400 hover:text-white">Herbal</Link></li>
            <li><Link to="/artikel" className="text-gray-400 hover:text-white">Artikel</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Klinik Ruqyah Bekam Sehat. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
