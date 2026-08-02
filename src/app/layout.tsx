import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { seoDefaults } from "@/config/seo";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seoDefaults.defaultTitle,
    template: seoDefaults.titleTemplate,
  },
  description: seoDefaults.defaultDescription,
  keywords: seoDefaults.defaultKeywords,
  metadataBase: new URL(seoDefaults.siteUrl),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
    url: seoDefaults.openGraph.url,
    siteName: seoDefaults.openGraph.siteName,
    locale: seoDefaults.openGraph.locale,
    type: "website",
    images: seoDefaults.openGraph.images,
  },
  twitter: {
    card: "summary_large_image",
    site: seoDefaults.twitterHandle,
    creator: seoDefaults.twitterHandle,
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
    images: seoDefaults.openGraph.images.map((img) => img.url),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content={seoDefaults.themeColor} />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          <div className="flex" style={{ flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main style={{ flex: "1 0 auto" }}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
