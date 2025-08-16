import { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="text-berlin-red text-xl" />
            <span className="font-bold text-xl text-charcoal">Walk With Me 柏林導賞</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-warm-gray hover:text-berlin-red transition-colors"
              data-testid="nav-services"
            >
              服務介紹
            </button>
            <button 
              onClick={() => scrollToSection('tours')} 
              className="text-warm-gray hover:text-berlin-red transition-colors"
              data-testid="nav-tours"
            >
              行程詳情
            </button>
            <button 
              onClick={() => scrollToSection('guide')} 
              className="text-warm-gray hover:text-berlin-red transition-colors"
              data-testid="nav-guide"
            >
              導遊介紹
            </button>

            <button 
              onClick={() => scrollToSection('booking')} 
              className="text-warm-gray hover:text-berlin-red transition-colors"
              data-testid="nav-booking"
            >
              立即預約
            </button>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-warm-gray hover:text-berlin-red"
              data-testid="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => scrollToSection('services')} 
                className="block py-2 text-warm-gray hover:text-berlin-red w-full text-left"
                data-testid="mobile-nav-services"
              >
                服務介紹
              </button>
              <button 
                onClick={() => scrollToSection('tours')} 
                className="block py-2 text-warm-gray hover:text-berlin-red w-full text-left"
                data-testid="mobile-nav-tours"
              >
                行程詳情
              </button>
              <button 
                onClick={() => scrollToSection('guide')} 
                className="block py-2 text-warm-gray hover:text-berlin-red w-full text-left"
                data-testid="mobile-nav-guide"
              >
                導遊介紹
              </button>

              <button 
                onClick={() => scrollToSection('booking')} 
                className="block py-2 text-warm-gray hover:text-berlin-red w-full text-left"
                data-testid="mobile-nav-booking"
              >
                立即預約
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
