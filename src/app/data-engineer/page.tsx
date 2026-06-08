import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import About from "@/components/About";
import EngineeringStandards from "@/components/EngineeringStandards";
import Experience from "@/components/Experience";
import HowIWork from "@/components/HowIWork";
import HpcStats from "@/components/HpcStats";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CrossLinkBanner from "@/components/CrossLinkBanner";
import Footer from "@/components/Footer";
import { dataProjects } from "@/data/projects";
import { t } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Haikal Hilmi — Data Engineer",
  description:
    "Large-scale web scraping, ETL pipelines, automation, and data quality systems by Haikal Hilmi. Multi-million records per day.",
};

const dataTech: string[] = [
  "Python",
  "Selenium",
  "BeautifulSoup",
  "Scrapy",
  "newspaper4k",
  "Airflow",
  "RabbitMQ",
  "Elasticsearch",
  "PostgreSQL",
  "Docker",
  "Grafana",
  "Prometheus",
  "Speech-to-Text AI",
  "Linux",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection
        eyebrow={t(
          "Specialized in Data Engineering",
          "Spesialisasi Data Engineering",
        )}
        title={t(
          "Reliable data pipelines & automated extraction.",
          "Data pipeline andal & ekstraksi otomatis.",
        )}
        description={t(
          "I design and operate robust data systems—from complex web scraping to clean warehousing—so your data stays accurate and ready to use.",
          "Saya merancang dan mengoperasikan sistem data yang tangguh—dari web scraping kompleks hingga warehousing yang rapi—agar data Anda tetap akurat dan siap pakai.",
        )}
        supportingLine={t(
          "Web Scraping • Automation • ETL Pipelines • Data Quality",
          "Web Scraping • Otomasi • ETL Pipeline • Kualitas Data",
        )}
        ctaText={t("Discuss Your Data Needs", "Diskusikan Kebutuhan Data Anda")}
      />

      {/* Data Engineering Projects */}
      <section className="bg-white px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              title={t("Data Engineering Work", "Karya Data Engineering")}
              subtitle={t(
                "Production scraping systems and pipelines processing data at scale",
                "Sistem scraping produksi & pipeline yang memproses data dalam skala besar",
              )}
            />
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dataProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80} className="h-full">
                <ProjectCard {...project} showCover={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HPC Infrastructure */}
      <HpcStats />

      {/* Engineering standards / data quality & compliance */}
      <EngineeringStandards />

      {/* Data Stack */}
      <TechStack
        title={t("Data Stack", "Data Stack")}
        description={t(
          "The tools I use to extract, process, and deliver clean, reliable data.",
          "Alat yang saya gunakan untuk mengekstrak, memproses, dan mengirim data yang bersih dan andal.",
        )}
        items={dataTech}
      />

      <About />

      {/* Experience */}
      <Experience area="de" />

      {/* How I Work */}
      <HowIWork />

      {/* Testimonials */}
      <Testimonials />

      {/* Cross-link to Software Engineering */}
      <CrossLinkBanner
        title={t("Also building software?", "Sedang membangun software juga?")}
        description={t(
          "Beyond data, I ship production-ready full-stack web applications—from UI to API to database.",
          "Selain data, saya membangun aplikasi web full-stack siap produksi—dari UI hingga API hingga database.",
        )}
        href="/software-engineer"
        ctaLabel={t(
          "See my software engineering work",
          "Lihat karya software engineering saya",
        )}
      />

      <Footer />
    </div>
  );
}
