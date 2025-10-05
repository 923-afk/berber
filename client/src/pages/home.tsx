import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ToursSection from "@/components/tours-section";
import GuideSection from "@/components/guide-section";
import ReviewsSection from "@/components/reviews-section";
import BookingSection from "@/components/booking-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo/seo-head";
import StructuredData from "@/components/seo/structured-data";

export default function Home() {
  return (
    <div className="font-inter text-charcoal bg-gray-50">
      <SEOHead 
        title="Berber Tours - Authentic Travel Experiences & Guided Adventures"
        description="Discover authentic Berber culture with our guided tours, travel services, and immersive experiences. Expert local guides, cultural tours, and unforgettable adventures await."
        keywords="Berber Guide 柏林導賞, 柏林導賞, 中文導遊, 薩克森豪森集中營, 導賞服務, Berber Guide, Berlin tour guide, Chinese tour guide Berlin, Sachsenhausen concentration camp tour, guided tour service, historical Berlin tour, German history tour, Berber tours, Morocco travel, cultural tours, guided adventures, local experiences, travel services, authentic tourism, Berber culture, Atlas Mountains, Marrakech tours, Sahara desert tours, traditional villages, local markets, Morocco adventure, cultural immersion, Berber guide, historical tours, Morocco vacation, travel Morocco, Berber lifestyle, indigenous culture, Morocco sightseeing, Berber traditions, Morocco experiences, guided Morocco tours, Berber heritage, Morocco cultural tours, authentic travel Morocco, Berber villages, Morocco local guide, Berber hospitality, Morocco adventure tours, cultural exchange Morocco, Berber history, Morocco traditional tours, Berber customs, Morocco exploration, Berber experience, Morocco travel guide, Berber community, Morocco cultural experience, Morocco authentic tours, Berber way of life, Morocco heritage tours, 柏林圍牆, Berlin Wall tour"
        canonical="https://berber-rose.vercel.app"
      />
      
      <StructuredData 
        type="Organization" 
        data={{
          name: "Berber Tours",
          description: "Authentic Berber travel experiences and guided adventures"
        }} 
      />
      
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ToursSection />
      <GuideSection />
      <ReviewsSection />
      <BookingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
