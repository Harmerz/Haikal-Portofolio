import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const SITE_NAME = "Haikal Hilmi";
export const DEFAULT_DESCRIPTION =
  "Portfolio of Haikal Hilmi, a Data and Software Engineer building scalable data pipelines, cloud systems, and production-ready web products.";

export const DEFAULT_KEYWORDS = [
  "Haikal Hilmi",
  "Data Engineer",
  "Software Engineer",
  "Web Scraping",
  "ETL Pipelines",
  "Next.js Developer",
  "Full-stack Engineer",
  "Indonesia",
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage =
    image && !/\.(?:mp4|webm|mov|ogg)$/i.test(image)
      ? absoluteUrl(image)
      : absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: socialImage, alt: `${title} — ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
