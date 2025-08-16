import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      rating: 5,
      text: "Berber 導遊非常專業，解說詳細生動，讓我們深入了解了這段沉重的歷史。整個行程安排得很好，強烈推薦給想了解德國歷史的朋友們！",
      name: "李女士",
      location: "來自香港",
      image: "https://pixabay.com/get/gae75592cae156a88afc6b1a26c57d9b8cdf6b00f3f944f3e2687e85adccadf0ceda2917bb9cc63263384b31984a28d57cbceb5ccd67090cf9e488991bc1cd03a_1280.jpg"
    },
    {
      rating: 5,
      text: "第一次參加中文導賞團，感受真的很不一樣！用母語聽歷史故事特別有感觸，Berber 很用心地解答我們的每個問題。",
      name: "張先生",
      location: "來自台灣",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "很有意義的一次行程，不僅學到了歷史知識，更重要的是讓我們思考了很多關於人性和和平的問題。非常推薦！",
      name: "王太太",
      location: "來自新加坡",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "預約過程很簡單，透過 WhatsApp 就搞定了。導遊準時到達，整個行程節奏很好，時間控制得很準確。",
      name: "陳同學",
      location: "來自馬來西亞",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "小團制的感受真的很棒，可以隨時提問，導遊也會根據我們的興趣調整解說重點。物超所值！",
      name: "劉女士",
      location: "來自中國大陸",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "作為歷史愛好者，我對這次導賞非常滿意。導遊的專業知識豐富，能回答我們各種深入的問題。",
      name: "林教授",
      location: "來自香港",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const stats = [
    { value: "98%", label: "客戶滿意度" },
    { value: "500+", label: "服務客戶" },
    { value: "4.9", label: "平均評分" },
    { value: "95%", label: "回購率" }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">客戶真實評價</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            來自世界各地的遊客對我們服務的真實評價和推薦
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
              data-testid={`review-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-berlin-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-warm-gray text-sm">{review.rating}.0</span>
              </div>
              <p className="text-warm-gray mb-6 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center">
                <img 
                  src={review.image} 
                  alt={`Customer review from ${review.name}`} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`review-avatar-${index}`}
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-warm-gray text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Review Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">客戶滿意度統計</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} data-testid={`stat-${index}`}>
                <div className="text-3xl font-bold text-berlin-red mb-2">{stat.value}</div>
                <p className="text-warm-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
