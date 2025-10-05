export const SEO_CONFIG = {
  // Default site information
  siteName: "Berber Guide 柏林導賞",
  siteUrl: "https://berber-rose.vercel.app", // Replace with your actual domain
  defaultTitle: "Berber Guide 柏林導賞 - Professional Chinese Tour Guide Berlin",
  defaultDescription: "Professional Chinese tour guide in Berlin. Expert Sachsenhausen concentration camp tours, Berlin history tours, and cultural experiences. €20 per person including group fees.",
  defaultKeywords: "Berber Guide 柏林導賞, 柏林導賞, 中文導遊, 薩克森豪森集中營, 導賞服務, Berber Guide, Berlin tour guide, Chinese tour guide Berlin, Sachsenhausen concentration camp tour, guided tour service, historical Berlin tour, German history tour, Berber tours, Morocco travel, cultural tours, guided adventures, local experiences, travel services, authentic tourism, Berber culture, Atlas Mountains, Marrakech tours, Sahara desert tours, traditional villages, local markets, Morocco adventure, cultural immersion, Berber guide, historical tours, Morocco vacation, travel Morocco, Berber lifestyle, indigenous culture, Morocco sightseeing, Berber traditions, Morocco experiences, guided Morocco tours, Berber heritage, Morocco cultural tours, authentic travel Morocco, Berber villages, Morocco local guide, Berber hospitality, Morocco adventure tours, cultural exchange Morocco, Berber history, Morocco traditional tours, Berber customs, Morocco exploration, Berber experience, Morocco travel guide, Berber community, Morocco cultural experience, Morocco authentic tours, Berber way of life, Morocco heritage tours, 柏林圍牆, Berlin Wall tour",
  
  // Social media
  twitterHandle: "@berbertours",
  facebookUrl: "https://www.facebook.com/berbertours",
  instagramUrl: "https://www.instagram.com/berbertours",
  
  // Images
  defaultOgImage: "https://berber-rose.vercel.app/og-image.jpg",
  logoUrl: "https://berber-rose.vercel.app/logo.png",
  
  // Contact information
  contactInfo: {
    phone: "+1-XXX-XXX-XXXX", // Replace with actual phone
    email: "info@berbertours.com", // Replace with actual email
    address: {
      country: "Morocco",
      region: "Atlas Mountains"
    }
  },
  
  // Page-specific SEO data
  pages: {
    home: {
      title: "Berber Guide 柏林導賞 - Professional Chinese Tour Guide Berlin",
      description: "Professional Chinese tour guide in Berlin. Expert Sachsenhausen concentration camp tours, Berlin history tours, and cultural experiences. €20 per person including group fees.",
      keywords: "Berber Guide 柏林導賞, 柏林導賞, 中文導遊, 薩克森豪森集中營, 導賞服務, Berber Guide, Berlin tour guide, Chinese tour guide Berlin, Sachsenhausen concentration camp tour, guided tour service, historical Berlin tour, German history tour, Berber tours, Morocco travel, cultural tours, guided adventures, local experiences, travel services, authentic tourism, Berber culture, Atlas Mountains, Marrakech tours, Sahara desert tours, traditional villages, local markets, Morocco adventure, cultural immersion, Berber guide, historical tours, Morocco vacation, travel Morocco, Berber lifestyle, indigenous culture, Morocco sightseeing, Berber traditions, Morocco experiences, guided Morocco tours, Berber heritage, Morocco cultural tours, authentic travel Morocco, Berber villages, Morocco local guide, Berber hospitality, Morocco adventure tours, cultural exchange Morocco, Berber history, Morocco traditional tours, Berber customs, Morocco exploration, Berber experience, Morocco travel guide, Berber community, Morocco cultural experience, Morocco authentic tours, Berber way of life, Morocco heritage tours, 柏林圍牆, Berlin Wall tour"
    },
    services: {
      title: "Travel Services - Berber Tours",
      description: "Comprehensive travel services including guided tours, cultural experiences, and authentic Berber adventures in Morocco.",
      keywords: "travel services, guided tours, cultural experiences, Morocco travel, Berber culture, travel planning Morocco, Morocco travel agency, Berber travel consultant, Morocco trip planning, travel assistance Morocco, Morocco tour operator, Berber travel services, Morocco vacation planning, travel support Morocco, Morocco travel advice, Berber travel expert, Morocco travel consultation, travel booking Morocco, Morocco travel support, Berber travel assistance"
    },
    tours: {
      title: "Berber Cultural Tours - Authentic Experiences",
      description: "Join our expert guides for authentic Berber cultural tours. Experience traditional villages, local markets, and immerse yourself in Berber traditions.",
      keywords: "Berber cultural tours, traditional villages, local markets, Berber traditions, Morocco cultural experiences, Atlas Mountains tours, Berber village tours, Morocco desert tours, Sahara expeditions, Berber homestay, Morocco cultural immersion, Berber craft workshops, Morocco traditional music, Berber cooking classes, Morocco hiking tours, Berber storytelling, Morocco photography tours, Berber textile tours, Morocco nature tours, Berber pottery tours, Morocco stargazing, Berber tea ceremony, Morocco adventure experiences, Berber folklore tours, Morocco eco-tourism, Berber sustainable tourism"
    },
    booking: {
      title: "Book Your Berber Tour - Reserve Today",
      description: "Book your authentic Berber tour experience today. Easy online booking with instant confirmation for your cultural adventure.",
      keywords: "book Berber tour, tour booking, cultural tour reservation, Morocco tour booking, online tour booking, Berber tour reservation, Morocco travel booking, tour package booking, Berber experience booking, Morocco adventure booking, tour price booking, Berber tour schedule, Morocco tour availability, tour confirmation, Berber tour payment, Morocco tour package, tour inquiry, Berber tour contact, Morocco tour information, tour booking system"
    }
  }
};

// Helper function to generate page titles
export const generatePageTitle = (pageTitle?: string): string => {
  if (pageTitle) {
    return `${pageTitle} | ${SEO_CONFIG.siteName}`;
  }
  return SEO_CONFIG.defaultTitle;
};

// Helper function to generate canonical URLs
export const generateCanonicalUrl = (path: string = ""): string => {
  return `${SEO_CONFIG.siteUrl}${path}`;
};
