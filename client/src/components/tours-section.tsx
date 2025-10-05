import { MapPin, Euro, Clock, Info, Building, BookOpen, Church, Heart } from "lucide-react";

export default function ToursSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    {
      icon: Building,
      title: "營房建築",
      description: "了解集中營的建築結構和囚犯生活環境"
    },
    {
      icon: BookOpen,
      title: "歷史背景",
      description: "深入了解納粹時期的歷史脈絡"
    },
    {
      icon: Church,
      title: "紀念設施",
      description: "參觀各種紀念碑和展示設施"
    },
    {
      icon: Heart,
      title: "人性思考",
      description: "引導深度思考歷史與人性的課題"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">薩克森豪森集中營導賞團</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            深度了解第二次世界大戰歷史，感受歷史的重量與意義
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tour Details */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-charcoal">行程詳細資訊</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-berlin-red/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-berlin-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">地點</h4>
                    <p className="text-warm-gray">Str. d. Nationen 22, Oranienburg</p>
                    <p className="text-sm text-warm-gray">集合地點：集中營資訊中心門口</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-berlin-red/10 p-3 rounded-full flex-shrink-0">
                    <Euro className="text-berlin-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">費用</h4>
                    <p className="text-warm-gray">每位 €20（已包括集中營收取的團體費用）</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-berlin-red/10 p-3 rounded-full flex-shrink-0">
                    <Clock className="text-berlin-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">時間安排</h4>
                    <p className="text-warm-gray">上午 10:00 - 下午 1:00</p>
                    <p className="text-warm-gray">下午 2:00 - 下午 5:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-berlin-red/10 p-3 rounded-full flex-shrink-0">
                    <Info className="text-berlin-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">導賞內容</h4>
                    <p className="text-warm-gray">詳細介紹第二次世界大戰集中營的歷史及營內設施和用途，以及戰後的變遷</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-berlin-red hover:bg-red-700 text-white py-4 px-6 rounded-full font-semibold text-center transition-all transform hover:scale-105"
                  data-testid="button-book-this-tour"
                >
                  立即預約這個行程
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tour Highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">導賞重點</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
                data-testid={`highlight-card-${index}`}
              >
                <highlight.icon className="text-berlin-red text-2xl mb-4" />
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-warm-gray text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
