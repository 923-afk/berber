import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ToursSection from "@/components/tours-section";
import GuideSection from "@/components/guide-section";
import ReviewsSection from "@/components/reviews-section";
import BookingSection from "@/components/booking-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter text-charcoal bg-gray-50">
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
