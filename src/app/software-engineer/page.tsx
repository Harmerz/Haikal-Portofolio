import type { Metadata } from "next";
import TechStack from "@/components/TechStack";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import FeaturedHero from "@/components/FeaturedHero";
import Reveal from "@/components/Reveal";
import About from "@/components/About";
import Experience from "@/components/Experience";
import HowIWork from "@/components/HowIWork";
import Testimonials from "@/components/Testimonials";
import CrossLinkBanner from "@/components/CrossLinkBanner";
import Footer from "@/components/Footer";
import { featuredSoftware, moreSoftware } from "@/data/projects";
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

      {/* Featured Work — the hook (AI, SaaS & real client products) */}
      <section className="bg-white px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              title={t("Featured Work", "Karya Unggulan")}
              subtitle={t(
                "AI products, SaaS, and platforms I've shipped for real clients",
                "Produk AI, SaaS, dan platform yang saya rilis untuk klien nyata",
              )}
            />
          </Reveal>
          {featuredSoftware.length > 0 && (
            <Reveal className="mt-6">
              <FeaturedHero project={featuredSoftware[0]} />
            </Reveal>
          )}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSoftware.slice(1).map((project, i) => (
              <Reveal key={project.id} delay={(i % 4) * 70} className="h-full">
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="bg-white px-4 pb-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              title={t("More Projects", "Proyek Lainnya")}
              subtitle={t(
                "Award-winning competition builds and other client work",
                "Karya kompetisi pemenang penghargaan & pekerjaan klien lainnya",
              )}
            />
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {moreSoftware.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80} className="h-full">
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      <About />

      {/* Experience */}
      <Experience area="se" />

      {/* How I Work */}
      <HowIWork />

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
