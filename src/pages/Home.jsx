import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";
import SymptomMatcher from "../components/SymptomMatcher";
import PromoBundleSpotlight from "../components/PromoBundleSpotlight";
import ServicePricing from "../components/ServicePricing";
import GenderSeparation from "../components/GenderSeparation";
import TherapySteps from "../components/TherapySteps";
import TrustSignals from "../components/TrustSignals";
import HerbalSection from "../components/HerbalSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
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
        <SymptomMatcher />
        <PromoBundleSpotlight />
        <ServicePricing />
        <GenderSeparation />
        <TherapySteps />
        <TrustSignals />
        <HerbalSection />
        <Testimonials />
        <FAQ />
        <ContactSection />
        <NewsSection />
      </main>
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
