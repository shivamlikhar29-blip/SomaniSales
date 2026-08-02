import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { seoDefaults, contactDetails } from "@/config/seo";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import FAQs from "@/components/sections/FAQs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // Generate structured data for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoDefaults.siteName,
    "url": seoDefaults.siteUrl,
    "logo": `${seoDefaults.siteUrl}/images/logo.png`,
    "description": seoDefaults.defaultDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactDetails.phone,
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"],
    },
  };

  // Generate structured data for local business discovery
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": seoDefaults.siteName,
    "image": `${seoDefaults.siteUrl}/images/og-image.jpg`,
    "@id": `${seoDefaults.siteUrl}/#local-business`,
    "url": seoDefaults.siteUrl,
    "telephone": contactDetails.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactDetails.address,
      "addressLocality": contactDetails.city,
      "addressRegion": contactDetails.state,
      "postalCode": contactDetails.zip,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contactDetails.coordinates.lat,
      "longitude": contactDetails.coordinates.lng,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Main Sections */}
      <Hero />
      <About />
      <Products />
      <FAQs />
      <Contact />
    </>
  );
}
