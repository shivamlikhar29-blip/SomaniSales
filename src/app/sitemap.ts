import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";

// In a real application, you might fetch products/pages from an API or database
const staticPages = [
  { url: "", changeFrequency: "daily" as const, priority: 1.0 },
  { url: "/products", changeFrequency: "weekly" as const, priority: 0.8 },
  { url: "/contact", changeFrequency: "monthly" as const, priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = staticPages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Example of adding dynamic product paths (mocking the database fetch)
  const products = [
    { id: "heavy-duty-lathe", updatedAt: new Date() },
    { id: "cnc-milling-machine", updatedAt: new Date() },
    { id: "digital-multimeter-pro", updatedAt: new Date() },
    { id: "industrial-air-compressor", updatedAt: new Date() },
  ];

  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    lastModified: product.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...productRoutes];
}
