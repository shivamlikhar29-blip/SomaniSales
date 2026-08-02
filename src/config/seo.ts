import { SEOConfig } from "@/types";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://somanisales.com";

export const seoDefaults: SEOConfig = {
  siteName: "Somani Sales",
  defaultTitle: "Somani Sales | Premium Industrial & B2B Distribution Solutions",
  titleTemplate: "%s | Somani Sales",
  defaultDescription: "Somani Sales is a premium industrial supplier and distributor, offering high-quality machinery, tools, electrical supplies, and B2B products with prompt logistics and reliable support.",
  siteUrl: SITE_URL,
  defaultKeywords: [
    "industrial distribution",
    "B2B supply India",
    "machinery supply",
    "Somani Sales",
    "wholesale industrial tools",
    "electrical components distributor",
    "premium machinery supplier",
    "industrial hardware online",
    "commercial manufacturing suppliers",
  ],
  twitterHandle: "@SomaniSales",
  themeColor: "#0f172a", // Slate 900
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Somani Sales",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Somani Sales - Premium Industrial & B2B Distribution Solutions",
      },
    ],
  },
};

export const contactDetails = {
  email: "info@somanisales.com",
  phone: "+91 98765 43210",
  address: "102-105, Industrial Trade Tower, Sector 3",
  city: "Indore",
  state: "Madhya Pradesh",
  zip: "452001",
  country: "India",
  coordinates: {
    lat: 22.7196,
    lng: 75.8577,
  },
};
