import { Languages, Euro, Clock } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Berlin Brandenburg Gate background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <img 
          src="https://pixabay.com/get/g5387af6ef1004e51791632fa0a2fb439e9be68c0bd2c75737de09e605e03bf8490cb306b912faea026db2fc567fa5c42482e9e993a4846a1056f538bffd3bdf5_1280.jpg" 
          alt="Berlin Brandenburg Gate at sunset" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          發現柏林的<span className="text-berlin-gold">深度故事</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          專業中文導遊帶您深入了解柏林歷史文化<br />
          薩克森豪森集中營 • 柏林歷史 • 深度導賞
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('booking')}
            className="bg-berlin-red hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            data-testid="button-book-tour"
          >
            立即預約導賞
          </button>
          <button 
            onClick={() => scrollToSection('tours')}
            className="border-2 border-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-full text-lg font-semibold transition-all"
            data-testid="button-learn-more"
          >
            了解更多
          </button>
        </div>
        
        {/* Quick Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Languages className="text-berlin-gold text-2xl mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">廣東話 / 中文</h3>
            <p className="text-sm opacity-80">專業導賞服務</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Euro className="text-berlin-gold text-2xl mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">€20 每位</h3>
            <p className="text-sm opacity-80">包團體入場費</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Clock className="text-berlin-gold text-2xl mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">3小時深度遊</h3>
            <p className="text-sm opacity-80">上午或下午時段</p>
          </div>
        </div>
      </div>
    </section>
  );
}
