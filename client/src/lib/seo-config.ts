export const SEO_CONFIG = {
  // Default site information
  siteName: "Berber Tours",
  siteUrl: "https://your-domain.com", // Replace with your actual domain
  defaultTitle: "Berber Tours - Authentic Travel Experiences & Guided Adventures",
  defaultDescription: "Discover authentic Berber culture with our guided tours, travel services, and immersive experiences. Expert local guides, cultural tours, and unforgettable adventures await.",
  defaultKeywords: "Berber tours, Morocco travel, cultural tours, guided adventures, local experiences, travel services, authentic tourism",
  
  // Social media
  twitterHandle: "@berbertours",
  facebookUrl: "https://www.facebook.com/berbertours",
  instagramUrl: "https://www.instagram.com/berbertours",
  
  // Images
  defaultOgImage: "https://your-domain.com/og-image.jpg",
  logoUrl: "https://your-domain.com/logo.png",
  
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
      title: "Berber Tours - Authentic Travel Experiences & Guided Adventures",
      description: "Discover authentic Berber culture with our guided tours, travel services, and immersive experiences. Expert local guides, cultural tours, and unforgettable adventures await.",
      keywords: "Berber tours, Morocco travel, cultural tours, guided adventures, local experiences, travel services, authentic tourism"
    },
    services: {
      title: "Travel Services - Berber Tours",
      description: "Comprehensive travel services including guided tours, cultural experiences, and authentic Berber adventures in Morocco.",
      keywords: "travel services, guided tours, cultural experiences, Morocco travel, Berber culture"
    },
    tours: {
      title: "Berber Cultural Tours - Authentic Experiences",
      description: "Join our expert guides for authentic Berber cultural tours. Experience traditional villages, local markets, and immerse yourself in Berber traditions.",
      keywords: "Berber cultural tours, traditional villages, local markets, Berber traditions, Morocco cultural experiences"
    },
    booking: {
      title: "Book Your Berber Tour - Reserve Today",
      description: "Book your authentic Berber tour experience today. Easy online booking with instant confirmation for your cultural adventure.",
      keywords: "book Berber tour, tour booking, cultural tour reservation, Morocco tour booking"
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
