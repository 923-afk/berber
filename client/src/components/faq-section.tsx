import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "如何前往薩克森豪森集中營？",
      answer: "從柏林市中心可搭乘 S1 線至 Oranienburg 站，再轉乘巴士或步行約 20 分鐘即可到達。我們建議您提前 15 分鐘到達集合地點（集中營資訊中心門口）。如需詳細交通指引，預約確認後我們會提供完整的交通資訊。"
    },
    {
      question: "導賞團的語言是廣東話還是普通話？",
      answer: "我們的導遊精通廣東話和普通話，會根據團友的需求調整使用的語言。如果團內有不同語言需求的朋友，我們會盡量兼顧兩種語言進行解說，確保每位團友都能充分理解導賞內容。"
    },
    {
      question: "€20 的費用包括什麼？",
      answer: "€20 的費用已包括：專業中文導遊服務（3小時）、集中營的團體入場費、詳細的歷史解說和問答時間。您只需要負擔前往集中營的交通費用即可。我們提供的是全包式服務，沒有任何隱藏費用。"
    },
    {
      question: "可以取消或更改預約嗎？",
      answer: "我們理解計劃可能會有變動。如需取消或更改預約，請至少提前 24 小時透過 LINE 或 WhatsApp 聯絡我們。我們會盡力配合您的需求，協助安排其他合適的時段。"
    },
    {
      question: "導賞團適合什麼年齡參加？",
      answer: "由於薩克森豪森集中營涉及沉重的歷史內容，我們建議 14 歲以上的朋友參加。對於年輕的參加者，我們會適度調整解說方式，確保內容既有教育意義又不會造成過度的心理負擔。"
    },
    {
      question: "天氣不好會取消導賞嗎？",
      answer: "集中營內有室內展館和戶外區域，一般的雨天不會影響導賞進行。我們建議您根據天氣預報準備適當的衣物。只有在極端天氣情況下（如暴風雪），我們才會建議延期，並會提前通知您。"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">常見問題</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            解答您可能關心的問題，讓您安心預約
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <button 
                onClick={() => toggleItem(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
                data-testid={`faq-toggle-${index}`}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown 
                  className={`text-warm-gray transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openItems.includes(index) && (
                <div className="mt-4 text-warm-gray" data-testid={`faq-content-${index}`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
