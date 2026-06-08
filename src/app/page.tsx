import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import HpcStats from "@/components/HpcStats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import HowIWork from "@/components/HowIWork";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { softwareProjects, dataProjects } from "@/data/projects";
import { t } from "@/i18n/config";

export default function Home() {
  const featuredSoftware = softwareProjects.slice(0, 3);
  const featuredData = dataProjects.slice(0, 3);

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection
        eyebrow={t(
          "Haikal Hilmi — Data & Software Architect",
          "Haikal Hilmi — Arsitek Data & Software",
        )}
        title={t("Scale without the chaos.", "Berkembang tanpa kekacauan.")}
        description={t(
          "I build resilient data & cloud systems that handle the heavy lifting—so you can focus on growing your business. Secure, compliant, and production-ready.",
          "Saya membangun sistem data & cloud yang tangguh untuk menangani pekerjaan berat—agar Anda bisa fokus mengembangkan bisnis. Aman, patuh, dan siap produksi.",
        )}
        ctaText={t("Discuss Your Project", "Diskusikan Proyek Anda")}
      />

      {/* Data Engineering Portfolio Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader
              title={t("Data Engineer Portfolio", "Portfolio Data Engineer")}
              subtitle={t(
                "Large-scale scraping and pipelines processing millions of records daily",
                "Scraping & pipeline skala besar yang memproses jutaan record setiap hari",
              )}
              href="/data-engineer"
            />
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredData.map((project, i) => (
              <Reveal key={project.id} delay={i * 80} className="h-full">
                <ProjectCard {...project} showCover={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Software Engineering Portfolio Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader
              title={t(
                "Software Engineer Portfolio",
                "Portfolio Software Engineer",
              )}
              subtitle={t(
                "Award-winning products and platforms shipped for real clients",
                "Produk & platform pemenang penghargaan untuk klien nyata",
              )}
              href="/software-engineer"
            />
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredSoftware.map((project, i) => (
              <Reveal key={project.id} delay={i * 80} className="h-full">
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure / scale credibility */}
      <HpcStats />

      <About />
      <Experience />
      <HowIWork />
      <Testimonials />
      <Footer />
    </div>
  );
}
