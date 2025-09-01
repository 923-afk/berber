import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Tour' | 'Service' | 'FAQ';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Berber Tours",
          "description": "Authentic Berber travel experiences and guided adventures",
          "url": "https://your-domain.com",
          "logo": "https://your-domain.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Arabic", "French"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Morocco"
          },
          "sameAs": [
            "https://www.facebook.com/berbertours",
            "https://www.instagram.com/berbertours",
            "https://www.twitter.com/berbertours"
          ]
        };
        break;
        
      case 'Tour':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": data.name || "Berber Cultural Tour",
          "description": data.description || "Experience authentic Berber culture and traditions",
          "provider": {
            "@type": "Organization",
            "name": "Berber Tours"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price || "199",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "duration": data.duration || "P1D",
          "touristType": "Cultural",
          "includesAttraction": data.attractions || ["Berber Villages", "Traditional Markets", "Cultural Sites"]
        };
        break;
        
      case 'Service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Travel Services",
          "description": data.description || "Comprehensive travel and tour services",
          "provider": {
            "@type": "Organization",
            "name": "Berber Tours"
          },
          "serviceType": "Travel Services",
          "areaServed": "Morocco",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Travel Services",
            "itemListElement": data.services || [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Guided Tours"
                }
              }
            ]
          }
        };
        break;
        
      case 'FAQ':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs || [
            {
              "@type": "Question",
              "name": "What should I expect on a Berber tour?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Berber tours offer authentic cultural experiences including visits to traditional villages, local markets, and opportunities to learn about Berber customs and traditions."
              }
            }
          ]
        };
        break;
        
      default:
        return;
    }
    
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);
  
  return null;
}
