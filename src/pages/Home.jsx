import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";
import TrustSignals from "../components/TrustSignals";
import ServicePricing from "../components/ServicePricing";
import HerbalSection from "../components/HerbalSection";
import NewsSection from "../components/NewsSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const Home = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
      <Navbar />
      <AnnouncementBar />
      <main>
        <Hero />
        <TrustSignals />
        <ServicePricing />
        <HerbalSection />
        <NewsSection />
      </main>
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
