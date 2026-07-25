import { Link } from "react-router-dom";
import logoRbs from "../assets/logo-rbs.jpeg";

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
          <p className="text-gray-400 mt-3 max-w-sm md:ml-[60px]">Jl. Menteng Terusan No. 32 (Depan Bank BRI), Pasar Sinar Lagoa, Jakarta Utara 14270</p>
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
