import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";

const NotFound = () => (
  <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
    <Navbar />
    <AnnouncementBar />
    <main className="flex items-center justify-center py-32 px-4">
      <div className="text-center">
        <p className="text-9xl font-black text-green-600">404</p>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">Halaman Tidak Ditemukan</h1>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
