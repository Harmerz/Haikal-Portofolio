import { t, type Localized } from "@/i18n/config";

export interface Testimonial {
  id: string;
  quote: Localized;
  name: string;
  role: Localized;
  /** Client location, e.g. "Aurora, Canada" — shows international reach. */
  location?: string;
  /** Optional avatar image path under /public. */
  avatar?: string;
  /** Optional LinkedIn (or other) profile URL — lets clients verify the review. */
  linkedin?: string;
}

// Real Upwork client reviews (5.0★). Quotes kept in their original English to
// stay authentic — they read the same in both language modes.
export const testimonials: Testimonial[] = [
  {
    id: "alamsyah-pangestu",
    quote: t(
      "As Director of PT Aksarakan Bhumi Indonesia, I deeply appreciate his work—he not only built the company's website and digital infrastructure, but also drafted our IT security SOPs and actively took part in negotiations with strategic clients, showing a remarkable combination of technical skill, leadership, and business sense.",
      "Sebagai Direktur PT Aksarakan Bhumi Indonesia, saya sangat mengapresiasi kinerja beliau yang tidak hanya berhasil mengembangkan website dan infrastruktur digital perusahaan, tetapi juga menyusun SOP keamanan IT serta berperan aktif dalam negosiasi dengan klien-klien strategis, menunjukkan kombinasi kemampuan teknis, kepemimpinan, dan pemahaman bisnis yang luar biasa.",
    ),
    name: "Alamsyah Pangestu",
    role: t(
      "Director, PT Aksarakan Bhumi Indonesia",
      "Direktur, PT Aksarakan Bhumi Indonesia",
    ),
    location: "Yogyakarta, ID",
    avatar: "/home/review/alamsyah-pangestu.jpg",
    linkedin: "https://www.linkedin.com/in/alamsyah-pangestu/",
  },
  {
    id: "jeesun-kim",
    quote: t(
      "I had the pleasure of working with Haikal on a scraping project, and he exceeded my expectations in every aspect. Professional, responsive, and highly skilled, delivering high-quality work on time. I highly recommend Haikal—he's a fantastic contractor.",
      "I had the pleasure of working with Haikal on a scraping project, and he exceeded my expectations in every aspect. Professional, responsive, and highly skilled, delivering high-quality work on time. I highly recommend Haikal—he's a fantastic contractor.",
    ),
    name: "Jeesun Kim",
    role: t("Upwork client · Twitter/X Scraper", "Klien Upwork · Twitter/X Scraper"),
    location: "Aurora, Canada",
  },
  {
    id: "claire-bartolozzi",
    quote: t(
      "Haikal is very smart, creative and good at what he does. He is a great communicator and very efficient.",
      "Haikal is very smart, creative and good at what he does. He is a great communicator and very efficient.",
    ),
    name: "Claire Bartolozzi",
    role: t("Upwork client · Tweet Collector", "Klien Upwork · Tweet Collector"),
    location: "South Yarra, Australia",
  },
  {
    id: "cristian-buda",
    quote: t(
      "Haikal was very quick to respond and professional in his work. He even suggested some improvements to the deliverables, which I found useful. I would definitely work with him again.",
      "Haikal was very quick to respond and professional in his work. He even suggested some improvements to the deliverables, which I found useful. I would definitely work with him again.",
    ),
    name: "Cristian Buda",
    role: t("Upwork client · PDF→JSON Extraction", "Klien Upwork · Ekstraksi PDF→JSON"),
    location: "Cluj-Napoca, Romania",
  },
];
