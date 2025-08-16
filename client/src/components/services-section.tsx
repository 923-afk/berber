import { GraduationCap, Heart, History, Users, Smartphone, Star } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "專業導遊資格",
      description: "持有正式導遊證照，深度了解德國歷史文化，提供專業詳盡的解說服務"
    },
    {
      icon: Heart,
      title: "貼心中文服務",
      description: "母語級廣東話及普通話服務，深入淺出地為您解說歷史，無語言障礙"
    },
    {
      icon: History,
      title: "深度歷史解說",
      description: "不只是景點介紹，更帶您了解背後的歷史故事，感受歷史的重量與意義"
    },
    {
      icon: Users,
      title: "小團精緻體驗",
      description: "小團制導賞，確保每位團友都能獲得充分的關注和互動機會"
    },
    {
      icon: Smartphone,
      title: "便捷預約方式",
      description: "支援 LINE 和 WhatsApp 預約，輕鬆安排您的柏林歷史之旅"
    },
    {
      icon: Star,
      title: "五星好評保證",
      description: "獲得眾多遊客好評推薦，提供超越期待的優質導賞體驗"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">為什麼選擇我們？</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            專業、貼心、深度的中文導賞服務，讓您的柏林之旅更有意義
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              data-testid={`service-card-${index}`}
            >
              <div className="bg-berlin-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="text-berlin-red text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-warm-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
