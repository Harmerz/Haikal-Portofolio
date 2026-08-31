import { headers } from "next/headers";
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
import { featuredSoftware, dataProjects } from "@/data/projects";
import { t } from "@/i18n/config";
import { getCtaUrl, SITE_URL } from "@/config/site";
import JsonLd from "@/components/JsonLd";

export default async function Home() {
  const requestHeaders = await headers();
  const mode =
    requestHeaders.get("x-portfolio-mode") === "upwork" ? "upwork" : "general";
  const homeSoftware = featuredSoftware.slice(0, 3);
  const featuredData = dataProjects.slice(0, 3);

  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${SITE_URL}/#profile`,
          url: SITE_URL,
          name: "Haikal Hilmi — Data & Software Engineer",
          mainEntity: { "@id": `${SITE_URL}/#person` },
        }}
      />
      {/* Hero Section */}
      <HeroSection
        ctaHref={getCtaUrl(mode)}
        eyebrow={t(
          "Haikal Hilmi — Data & Software Architect",
          "Haikal Hilmi — Arsitek Data & Software",
          "Haikal Hilmi — Daten- & Software-Architekt",
          "Haikal Hilmi — Architecte Data & Software",
          "Haikal Hilmi — Arquitecto Data & Software",
          "Haikal Hilmi — Architetto Data & Software"
        )}
        title={t(
          "Scale without the chaos.",
          "Berkembang tanpa kekacauan.",
          "Wachstum ohne Chaos.",
          "Grandir sans le chaos.",
          "Crecer sin el caos.",
          "Crescere senza il caos."
        )}
        description={t(
          "I build resilient data & cloud systems that handle the heavy lifting—so you can focus on growing your business. Secure, compliant, and production-ready.",
          "Saya membangun sistem data & cloud yang tangguh untuk menangani pekerjaan berat—agar Anda bisa fokus mengembangkan bisnis. Aman, patuh, dan siap produksi.",
          "Ich baue robuste Daten- und Cloud-Systeme, die die schwere Arbeit übernehmen—damit Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können. Sicher, konform und produktionsreif.",
          "Je conçois des systèmes data & cloud résilients qui absorbent la charge de travail—pour que vous puissiez vous concentrer sur la croissance de votre entreprise. Sécurisés, conformes et prêts pour la production.",
          "Construyo sistemas de datos y cloud resilientes que se encargan del trabajo pesado, para que puedas concentrarte en hacer crecer tu negocio. Seguros, conformes y listos para producción.",
          "Costruisco sistemi dati e cloud resilienti che si occupano del lavoro pesante, così puoi concentrarti sulla crescita della tua attività. Sicuri, conformi e pronti per la produzione."
        )}
        ctaText={t(
          "Discuss Your Project",
          "Diskusikan Proyek Anda",
          "Projekt besprechen",
          "Discuter de votre projet",
          "Hablemos de tu proyecto",
          "Parliamo del tuo progetto"
        )}
      />

      {/* Data Engineering Portfolio Section */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeader
              title={t(
                "Data Engineer Portfolio",
                "Portfolio Data Engineer",
                "Data-Engineer-Portfolio",
                "Portfolio Data Engineer",
                "Portafolio de Data Engineer",
                "Portfolio da Data Engineer"
              )}
              subtitle={t(
                "Large-scale scraping and pipelines processing millions of records daily",
                "Scraping & pipeline skala besar yang memproses jutaan record setiap hari",
                "Umfangreiches Scraping und Pipelines, die täglich Millionen von Datensätzen verarbeiten",
                "Scraping à grande échelle et pipelines traitant des millions d'enregistrements par jour",
                "Scraping a gran escala y pipelines que procesan millones de registros al día",
                "Scraping su larga scala e pipeline che elaborano milioni di record al giorno"
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
                "Software-Engineer-Portfolio",
                "Portfolio Software Engineer",
                "Portafolio de Software Engineer",
                "Portfolio da Software Engineer"
              )}
              subtitle={t(
                "Award-winning products and platforms shipped for real clients",
                "Produk & platform pemenang penghargaan untuk klien nyata",
                "Preisgekrönte Produkte und Plattformen für echte Kunden",
                "Produits et plateformes primés livrés à de vrais clients",
                "Productos y plataformas premiados entregados a clientes reales",
                "Prodotti e piattaforme premiati realizzati per clienti reali"
              )}
              href="/software-engineer"
            />
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homeSoftware.map((project, i) => (
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
      <Testimonials showExternalLinks={mode !== "upwork"} />
      <Footer mode={mode} exportScope="general" />
    </main>
  );
}
