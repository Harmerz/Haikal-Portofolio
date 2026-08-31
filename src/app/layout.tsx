import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import Header from "@/components/Header";
import LanguageSuggestBanner from "@/components/LanguageSuggestBanner";
import JsonLd from "@/components/JsonLd";
import { LINKEDIN_URL, SITE_URL } from "@/config/site";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/seo";

const analyticsId = /^G-[A-Z0-9]+$/.test(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-14R2Q6ER1M"
)
  ? (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-14R2Q6ER1M")
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Haikal Hilmi — Data & Software Engineer",
    template: "%s | Haikal Hilmi",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: DEFAULT_KEYWORDS,
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Haikal Hilmi — Data & Software Engineer",
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Haikal Hilmi — Data & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haikal Hilmi — Data & Software Engineer",
    description: DEFAULT_DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const portfolioMode =
    requestHeaders.get("x-portfolio-mode") === "upwork" ? "upwork" : "general";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl("/haikal-hilmi-profile.jpg"),
    jobTitle: ["Data Engineer", "Software Engineer"],
    sameAs: [LINKEDIN_URL],
    knowsAbout: DEFAULT_KEYWORDS.slice(1),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${SITE_NAME} Portfolio`,
    description: DEFAULT_DESCRIPTION,
    inLanguage: ["en", "id", "de", "fr", "es", "it"],
    author: { "@id": `${SITE_URL}/#person` },
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <JsonLd data={[personJsonLd, websiteJsonLd]} />
        <LanguageProvider>
          <Header mode={portfolioMode} />
          {children}
          {modal}
          <LanguageSuggestBanner />
        </LanguageProvider>
        {analyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${analyticsId}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
