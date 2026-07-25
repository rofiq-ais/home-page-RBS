import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="font-sans antialiased min-h-screen bg-white flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-6xl font-black text-red-500">!</p>
            <h1 className="mt-6 text-3xl font-bold text-gray-900">Terjadi Kesalahan</h1>
            <p className="mt-4 text-gray-500 max-w-md mx-auto">
              Maaf, terjadi kesalahan tak terduga. Silakan coba lagi atau kembali ke beranda.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
