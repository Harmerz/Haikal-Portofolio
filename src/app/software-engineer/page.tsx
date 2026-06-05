import type { Metadata } from "next";
import TechStack from "@/components/TechStack";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import CrossLinkBanner from "@/components/CrossLinkBanner";
import Footer from "@/components/Footer";
import { softwareProjects } from "@/data/projects";
import { t } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Haikal Hilmi — Software Engineer",
  description:
    "Production-ready full-stack web applications by Haikal Hilmi. React/Next.js, backend APIs, and database design.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection
        eyebrow={t(
          "Specialized in Software Engineering",
          "Spesialisasi Software Engineering",
        )}
        title={t(
          "Production-ready web applications.",
          "Aplikasi web yang siap produksi.",
        )}
        description={t(
          "Full-stack development that combines seamless user interfaces with high-performance backends. Secure, maintainable, and built for growth.",
          "Pengembangan full-stack yang memadukan antarmuka mulus dengan backend berperforma tinggi. Aman, mudah dipelihara, dan dibangun untuk berkembang.",
        )}
        supportingLine={t(
          "React/Next.js • Backend APIs • Database Design • Fullstack",
          "React/Next.js • Backend API • Desain Database • Fullstack",
        )}
        ctaText={t("Discuss Your Product", "Diskusikan Produk Anda")}
      />

      {/* Featured Projects Section */}
      <section className="bg-white px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              title={t("Selected Work", "Karya Pilihan")}
              subtitle={t(
                "Award-winning products and platforms shipped for real clients & competitions",
                "Produk & platform pemenang penghargaan untuk klien nyata & kompetisi",
              )}
            />
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {softwareProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80} className="h-full">
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Testimonials */}
      <Testimonials />

      {/* Cross-link to Data Engineering */}
      <CrossLinkBanner
        title={t("Need data work too?", "Butuh pekerjaan data juga?")}
        description={t(
          "Beyond apps, I build reliable data pipelines, web scrapers, and ETL systems that keep your data clean and ready to use.",
          "Selain aplikasi, saya membangun data pipeline, web scraper, dan sistem ETL yang menjaga data Anda bersih dan siap pakai.",
        )}
        href="/data-engineer"
        ctaLabel={t(
          "See my data engineering work",
          "Lihat karya data engineering saya",
        )}
      />

      <Footer />
    </div>
  );
}
