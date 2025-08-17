export default function BookingSection() {
  const steps = [
    {
      number: "1",
      title: "選擇日期時段",
      description: "選擇您方便的日期和時段（上午或下午）"
    },
    {
      number: "2",
      title: "填寫聯絡資訊",
      description: "提供您的 LINE 或 WhatsApp 聯絡方式"
    },
    {
      number: "3",
      title: "確認預約",
      description: "我們會透過您提供的方式確認預約詳情"
    }
  ];

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">立即預約您的柏林歷史之旅</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            簡單三步驟，輕鬆預約專業的中文導賞服務
          </p>
        </div>
        
        {/* Booking Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`booking-step-${index}`}>
              <div className="bg-berlin-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-berlin-red font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-warm-gray">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Embedded Booking Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">預約表單</h3>
            
            {/* Google Form Embed Container */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc2bd0axyUOnG4lQslUesq6Te7iAKum-veh982XybjHGNF8Yw/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-lg"
                title="Berlin Tour Booking Form"
                data-testid="booking-form-iframe"
              >
                載入中…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
