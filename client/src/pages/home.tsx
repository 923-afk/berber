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
        keywords="Berber tours, Morocco travel, cultural tours, guided adventures, local experiences, travel services, authentic tourism"
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
      <div style={{background: 'red', color: 'white', padding: '20px', textAlign: 'center'}}>
        TEST: ReviewsSection should appear after GuideSection
      </div>
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
