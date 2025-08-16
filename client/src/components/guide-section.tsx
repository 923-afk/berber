import { Tag, Star, CheckCircle, Quote } from "lucide-react";

export default function GuideSection() {
  const qualifications = [
    "德國官方認證導遊執照",
    "10年以上導遊經驗",
    "德國歷史文化專業背景",
    "流利廣東話及普通話"
  ];

  const services = [
    "深入淺出的歷史解說",
    "互動式導賞體驗",
    "客製化行程安排",
    "貼心周到的服務態度"
  ];

  return (
    <section id="guide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">專業導遊介紹</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            經驗豐富的導遊團隊，為您提供最專業的中文導賞服務
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Professional tour guide" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                data-testid="img-guide-avatar"
              />
              <h3 className="text-2xl font-bold mb-2">Berber 導遊</h3>
              <p className="text-berlin-red font-semibold mb-4">資深中文導遊 • 德國歷史專家</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <Tag className="text-berlin-red mr-3" />
                  專業資歷
                </h4>
                <ul className="space-y-2 text-warm-gray">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-berlin-gold mt-1 mr-2 text-sm flex-shrink-0" />
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <Star className="text-berlin-red mr-3" />
                  服務特色
                </h4>
                <ul className="space-y-2 text-warm-gray">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-berlin-gold mt-1 mr-2 text-sm flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Quote className="text-berlin-red mr-3" />
                導遊的話
              </h4>
              <p className="text-warm-gray italic leading-relaxed" data-testid="text-guide-quote">
                "每一次的導賞都是一次歷史的重溫，我希望透過專業的解說和親切的服務，
                讓每位遊客不僅了解德國的歷史，更能從中思考人性和和平的珍貴。
                歡迎您來到柏林，讓我們一起走過這段重要的歷史。"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
