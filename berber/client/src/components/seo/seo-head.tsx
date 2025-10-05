import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

export default function SEOHead({
  title = "Berber Tours - Authentic Travel Experiences & Guided Adventures",
  description = "Discover authentic Berber culture with our guided tours, travel services, and immersive experiences. Expert local guides, cultural tours, and unforgettable adventures await.",
  keywords = "Berber tours, Morocco travel, cultural tours, guided adventures, local experiences, travel services, authentic tourism, Berber culture, Atlas Mountains, Marrakech tours, Sahara desert tours, traditional villages, local markets, Morocco adventure, cultural immersion, Berber guide, historical tours, Morocco vacation, travel Morocco, Berber lifestyle, indigenous culture, Morocco sightseeing, Berber traditions, Morocco experiences, guided Morocco tours, Berber heritage, Morocco cultural tours, authentic travel Morocco, Berber villages, Morocco local guide, Berber hospitality, Morocco adventure tours, cultural exchange Morocco, Berber history, Morocco traditional tours, Berber customs, Morocco exploration, Berber experience, Morocco travel guide, Berber community, Morocco cultural experience, Morocco authentic tours, Berber way of life, Morocco heritage tours, 柏林導賞, 中文導遊, 薩克森豪森集中營, 柏林圍牆, 導賞服務, Berber Guide, Berlin tour guide, Chinese tour guide Berlin, Sachsenhausen concentration camp tour, Berlin Wall tour, guided tour service, historical Berlin tour, German history tour",
  canonical = "https://your-domain.com",
  ogImage = "https://your-domain.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:card', twitterCard);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, noIndex]);
  
  return null;
}
