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
  footer: {
    tagline: t(
      "Building the future with data and code.",
      "Membangun masa depan dengan data dan kode.",
    ),
  },
} satisfies Record<string, Record<string, Localized>>;
