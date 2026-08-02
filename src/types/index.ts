export interface SEOConfig {
  siteName: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  defaultKeywords: string[];
  twitterHandle: string;
  themeColor: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
