import { t, type Localized } from "@/i18n/config";

export interface ExperienceItem {
  id: string;
  company: string;
  /** Lead line — the impact, shown prominently (NOT the job title). */
  headline: Localized;
  /** Optional single supporting line (only used for the 1-2 top entries). */
  note?: Localized;
  role: Localized; // shown small & secondary
  period: Localized;
  location: string;
  bullets: Localized[];
  tech: string[];
  /** Which discipline pages this entry is relevant to. */
  area: ("se" | "de")[];
}

// Professional experience — framed impact-first. Titles kept honest but
// de-emphasized (ByteDance/Telkom are internships); the achievement leads.
// Most recent first.
export const experience: ExperienceItem[] = [
  {
    id: "bytedance",
    company: "ByteDance",
    headline: t(
      "Built a microservice handling 100,000+ requests/second.",
      "Membangun microservice yang menangani 100.000+ request/detik.",
    ),
    note: t(
      "Contributed to Tokopedia × TikTok-Shop system integrations.",
      "Berkontribusi pada integrasi sistem Tokopedia × TikTok-Shop.",
    ),
    role: t("Backend Engineer · Intern", "Backend Engineer · Magang"),
    period: t("Feb 2025 – Jun 2025", "Feb 2025 – Jun 2025"),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Contributed to Tokopedia × TikTok-Shop system integrations.",
        "Berkontribusi pada integrasi sistem Tokopedia × TikTok-Shop.",
      ),
      t(
        "Added Lark support to the internal dev kit, cutting log spam ~60%.",
        "Menambah dukungan Lark pada internal dev kit, memangkas log spam ~60%.",
      ),
    ],
    tech: ["Go", "gRPC", "RocketMQ", "NSQ", "Bytecloud"],
    area: ["se", "de"],
  },
  {
    id: "eric",
    company: "Engineering Research & Innovation Center, FT UGM",
    headline: t(
      "Ran UGM Career Summit for 2,800+ concurrent users with zero downtime.",
      "Menangani UGM Career Summit untuk 2.800+ pengguna bersamaan tanpa downtime.",
    ),
    role: t("Full Stack Software Engineer", "Full Stack Software Engineer"),
    period: t("Jul 2025 – Jan 2026", "Jul 2025 – Jan 2026"),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Engineered a white-label ticketing architecture with QR validation under 2 seconds.",
        "Merancang arsitektur ticketing white-label dengan validasi QR di bawah 2 detik.",
      ),
      t(
        "Built an automated document-generation pipeline for an international symposium.",
        "Membangun pipeline generasi dokumen otomatis untuk simposium internasional.",
      ),
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase"],
    area: ["se"],
  },
  {
    id: "semesta-data",
    company: "Semesta Data Digital",
    headline: t(
      "Designed HPC data pipelines — reliability +25%, processing time −40%.",
      "Merancang HPC data pipeline — reliability +25%, waktu proses −40%.",
    ),
    note: t(
      "Operated an 8-server HPC cluster ingesting social-media & news data at scale.",
      "Mengoperasikan cluster HPC 8 server untuk ingest data media sosial & berita dalam skala besar.",
    ),
    role: t("Data Engineer · Contract", "Data Engineer · Kontrak"),
    period: t("Jan 2024 – Nov 2025", "Jan 2024 – Nov 2025"),
    location: "Jakarta, ID",
    bullets: [
      t(
        "Architected a resilient social-media data pipeline ingesting from diverse sources.",
        "Merancang data pipeline media sosial yang tangguh dengan ingest dari beragam sumber.",
      ),
      t(
        "Built Grafana + Prometheus monitoring with alerts that prevented server crashes.",
        "Membangun monitoring Grafana + Prometheus dengan alert yang mencegah server crash.",
      ),
    ],
    tech: ["Python", "Elasticsearch", "PostgreSQL", "RabbitMQ", "Docker", "Grafana"],
    area: ["de", "se"],
  },
  {
    id: "tilikan",
    company: "Tilikan Indonesia",
    headline: t(
      "Analytics dashboards — reliability +50%, cross-team efficiency +70%.",
      "Dashboard analitik — reliability +50%, efisiensi lintas tim +70%.",
    ),
    role: t("Web App Developer · Contract", "Web App Developer · Kontrak"),
    period: t("Sep 2023 – Mar 2024", "Sep 2023 – Mar 2024"),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Integrated multiple APIs to streamline interdepartmental workflows.",
        "Mengintegrasikan banyak API untuk merampingkan alur kerja antar-departemen.",
      ),
      t(
        "Shipped a document-conversion feature for better document management.",
        "Merilis fitur konversi dokumen untuk manajemen dokumen yang lebih baik.",
      ),
    ],
    tech: ["Next.js 14", "React", "TypeScript", "MongoDB"],
    area: ["se", "de"],
  },
  {
    id: "global-data-inspirasi",
    company: "Global Data Inspirasi",
    headline: t(
      "Led a team building real-time data dashboards and reusable components.",
      "Memimpin tim membangun dashboard data real-time dan komponen yang dapat dipakai ulang.",
    ),
    role: t("Web App Developer · Contract", "Web App Developer · Kontrak"),
    period: t("Jan 2023 – Jan 2024", "Jan 2023 – Jan 2024"),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Applied Agile to accelerate delivery and raise software quality.",
        "Menerapkan Agile untuk mempercepat delivery dan meningkatkan kualitas software.",
      ),
      t(
        "Delivered scalable apps that gave actionable business insights.",
        "Merilis aplikasi scalable yang memberi wawasan bisnis yang actionable.",
      ),
    ],
    tech: ["Next.js 13", "React", "TypeScript", "TanStack"],
    area: ["se"],
  },
  {
    id: "telkom",
    company: "Telkom Indonesia",
    headline: t(
      "Penetration-tested critical web platforms and hardened their security.",
      "Melakukan penetration testing pada platform web kritikal dan memperkuat keamanannya.",
    ),
    role: t("Datacomm Product Dev · Intern", "Datacomm Product Dev · Magang"),
    period: t("Jan 2024 – Mar 2024", "Jan 2024 – Mar 2024"),
    location: "Jakarta, ID",
    bullets: [
      t(
        "Reported vulnerabilities and coordinated fixes with vendors.",
        "Melaporkan kerentanan dan mengoordinasikan perbaikan dengan vendor.",
      ),
      t(
        "Aligned security measures with business objectives in an Agile team.",
        "Menyelaraskan langkah keamanan dengan tujuan bisnis dalam tim Agile.",
      ),
    ],
    tech: ["Python", "SD-WAN", "Tableau"],
    area: ["se"],
  },
];

export function getExperience(area?: "se" | "de"): ExperienceItem[] {
  if (!area) return experience;
  return experience.filter((item) => item.area.includes(area));
}
