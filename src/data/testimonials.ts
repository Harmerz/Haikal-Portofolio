import { t, type Localized } from "@/i18n/config";

export interface Testimonial {
  id: string;
  quote: Localized;
  name: string;
  role: Localized;
  /** Optional avatar image path under /public. */
  avatar?: string;
}

// ⚠️ PLACEHOLDER CONTENT — replace with REAL client testimonials before launch.
// Do not ship invented quotes attributed to real people. These samples use
// role-based attribution so they read as examples until you swap them.
// To hide the section entirely, set this to an empty array: `export const testimonials = [];`
export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    quote: t(
      "Haikal delivered a production-ready dashboard faster than we expected, and the data was rock solid.",
      "Haikal menyelesaikan dashboard yang siap produksi lebih cepat dari perkiraan kami, dan datanya sangat andal.",
    ),
    name: "— Add client name",
    role: t("Product Lead, Hospitality SaaS", "Product Lead, Hospitality SaaS"),
  },
  {
    id: "sample-2",
    quote: t(
      "The scraping pipeline he built handles millions of records a day without a hitch. Exactly what we needed.",
      "Pipeline scraping yang ia bangun menangani jutaan record per hari tanpa kendala. Persis seperti yang kami butuhkan.",
    ),
    name: "— Add client name",
    role: t("Founder, Market Intelligence Startup", "Founder, Startup Market Intelligence"),
  },
  {
    id: "sample-3",
    quote: t(
      "Clear communication, clean code, and real results. We'd work with him again in a heartbeat.",
      "Komunikasi jelas, kode rapi, dan hasil nyata. Kami pasti akan bekerja sama lagi dengannya.",
    ),
    name: "— Add client name",
    role: t("Engineering Manager, Agency", "Engineering Manager, Agency"),
  },
];
