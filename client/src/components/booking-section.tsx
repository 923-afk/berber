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
            
            {/* Alternative Contact Methods */}
            <div className="mt-8 text-center">
              <p className="text-warm-gray mb-4">或者您也可以直接透過以下方式聯絡我們：</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="#" 
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors"
                  data-testid="contact-whatsapp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full transition-colors"
                  data-testid="contact-line"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  <span>LINE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
