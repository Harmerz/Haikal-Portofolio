import { t, type Localized } from "./config";

// Shared UI chrome strings (nav, footer, badges, contact, testimonials).
// Page-specific copy (hero, section headers) lives in the page files as
// Localized literals so each page stays self-contained.

export const dict = {
  nav: {
    home: t("Home", "Beranda"),
    software: t("Software", "Software"),
    data: t("Data", "Data"),
    contact: t("Contact", "Kontak"),
  },
  hero: {
    available: t(
      "Available for work (Remote/Onsite)",
      "Tersedia untuk bekerja (Remote/Onsite)",
    ),
    companyNext: t("Your company next?", "Perusahaan Anda berikutnya?"),
  },
  testimonials: {
    title: t("What clients say", "Kata klien"),
    subtitle: t(
      "Trusted by teams and organizations to deliver.",
      "Dipercaya tim dan organisasi untuk memberikan hasil.",
    ),
  },
  card: {
    details: t("View details", "Lihat detail"),
    close: t("Close", "Tutup"),
    problem: t("Problem", "Masalah"),
    solution: t("Solution", "Solusi"),
    stack: t("Tech stack", "Tech stack"),
    architecture: t("How it works", "Cara kerja"),
    decisions: t("Key decisions", "Keputusan kunci"),
    role: t("Role", "Peran"),
  },
  context: {
    client: t("Client work", "Proyek klien"),
    owned: t("Owned product", "Produk sendiri"),
    competition: t("Competition", "Kompetisi"),
  },
  experience: {
    title: t("Experience", "Pengalaman"),
    subtitle: t(
      "Roles where I've owned systems, led teams, and shipped at scale.",
      "Peran di mana saya memiliki sistem, memimpin tim, dan merilis dalam skala besar.",
    ),
  },
  standards: {
    title: t("Engineering Standards", "Standar Engineering"),
    subtitle: t(
      "How I keep large-scale data work reliable, clean, and responsible.",
      "Cara saya menjaga pekerjaan data skala besar tetap andal, bersih, dan bertanggung jawab.",
    ),
  },
  howIWork: {
    title: t("How I Work", "Cara Saya Bekerja"),
    subtitle: t(
      "Straightforward collaboration, built for results.",
      "Kolaborasi yang lugas, dirancang untuk hasil.",
    ),
  },
  about: {
    title: t("About", "Tentang"),
    body: t(
      "I'm Haikal Hilmi, a freelance data & software engineer. I build large-scale scraping systems and data pipelines, ship full-stack products for clients, and operate HPC infrastructure. Backend Engineer intern at ByteDance (100k+ RPS), 5.0★ on Upwork, and multiple international hackathon wins. I do my best work on long-term engagements where I can own systems end to end.",
      "Saya Haikal Hilmi, data & software engineer freelance. Saya membangun sistem scraping skala besar dan data pipeline, merilis produk full-stack untuk klien, serta mengoperasikan infrastruktur HPC. Backend Engineer intern di ByteDance (100k+ RPS), 5.0★ di Upwork, dan beberapa juara hackathon internasional. Saya bekerja paling optimal pada kerja sama jangka panjang di mana saya bisa memiliki sistem secara end-to-end.",
    ),
  },
  footer: {
    tagline: t(
      "Building the future with data and code.",
      "Membangun masa depan dengan data dan kode.",
    ),
  },
} satisfies Record<string, Record<string, Localized>>;
