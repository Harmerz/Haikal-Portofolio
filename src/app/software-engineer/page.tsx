import type { Metadata } from "next";
import { headers } from "next/headers";
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
import {
  getCtaUrl,
  UPWORK_PORTFOLIO_URLS,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Haikal Hilmi — Software Engineer",
  description:
    "Production-ready full-stack web applications by Haikal Hilmi. React/Next.js, backend APIs, and database design.",
};

export default async function Home() {
  const requestHeaders = await headers();
  const mode =
    requestHeaders.get("x-portfolio-mode") === "upwork"
      ? "upwork"
      : "general";

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection
        ctaHref={getCtaUrl(mode)}
        eyebrow={t(
          "Specialized in Software Engineering",
          "Spesialisasi Software Engineering",
          "Spezialisiert auf Software Engineering",
          "Spécialisé en Software Engineering",
          "Especializado en Software Engineering",
          "Specializzato in Software Engineering",
        )}
        title={t(
          "Production-ready web applications.",
          "Aplikasi web yang siap produksi.",
          "Produktionsreife Webanwendungen.",
          "Applications web prêtes pour la production.",
          "Aplicaciones web listas para producción.",
          "Applicazioni web pronte per la produzione.",
        )}
        description={t(
          "Full-stack development that combines seamless user interfaces with high-performance backends. Secure, maintainable, and built for growth.",
          "Pengembangan full-stack yang memadukan antarmuka mulus dengan backend berperforma tinggi. Aman, mudah dipelihara, dan dibangun untuk berkembang.",
          "Full-Stack-Entwicklung, die nahtlose Benutzeroberflächen mit leistungsstarken Backends verbindet. Sicher, wartbar und für Wachstum gebaut.",
          "Un développement full-stack qui allie interfaces utilisateur fluides et backends hautement performants. Sécurisé, maintenable et conçu pour évoluer.",
          "Desarrollo full-stack que combina interfaces de usuario fluidas con backends de alto rendimiento. Seguro, mantenible y construido para crecer.",
          "Sviluppo full-stack che unisce interfacce utente fluide a backend ad alte prestazioni. Sicuro, manutenibile e costruito per crescere.",
        )}
        supportingLine={t(
          "React/Next.js • Backend APIs • Database Design • Fullstack",
          "React/Next.js • Backend API • Desain Database • Fullstack",
          "React/Next.js • Backend-APIs • Datenbankdesign • Fullstack",
          "React/Next.js • API Backend • Conception de bases de données • Fullstack",
          "React/Next.js • APIs de Backend • Diseño de Bases de Datos • Fullstack",
          "React/Next.js • API Backend • Progettazione Database • Fullstack",
        )}
        ctaText={t(
          "Discuss Your Product",
          "Diskusikan Produk Anda",
          "Produkt besprechen",
          "Discuter de votre produit",
          "Hablemos de tu producto",
          "Parliamo del tuo prodotto",
        )}
      />

      {/* Featured Work — the hook (AI, SaaS & real client products) */}
      <section className="bg-white px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              title={t(
                "Featured Work",
                "Karya Unggulan",
                "Ausgewählte Arbeiten",
                "Travaux phares",
                "Trabajos destacados",
                "Lavori in evidenza",
              )}
              subtitle={t(
                "AI products, SaaS, and platforms I've shipped for real clients",
                "Produk AI, SaaS, dan platform yang saya rilis untuk klien nyata",
                "KI-Produkte, SaaS und Plattformen, die ich für echte Kunden umgesetzt habe",
                "Produits IA, SaaS et plateformes livrés à de vrais clients",
                "Productos de IA, SaaS y plataformas que he entregado a clientes reales",
                "Prodotti IA, SaaS e piattaforme realizzati per clienti reali",
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
              title={t(
                "More Projects",
                "Proyek Lainnya",
                "Weitere Projekte",
                "Autres projets",
                "Más proyectos",
                "Altri progetti",
              )}
              subtitle={t(
                "Award-winning competition builds and other client work",
                "Karya kompetisi pemenang penghargaan & pekerjaan klien lainnya",
                "Preisgekrönte Wettbewerbsprojekte und weitere Kundenarbeiten",
                "Projets de compétition primés et autres travaux clients",
                "Proyectos de competición premiados y otros trabajos para clientes",
                "Progetti di competizione premiati e altri lavori per clienti",
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
      <Testimonials showExternalLinks={mode !== "upwork"} />

      {/* Cross-link to Data Engineering */}
      <CrossLinkBanner
        title={t(
          "Need data work too?",
          "Butuh pekerjaan data juga?",
          "Brauchen Sie auch Datenarbeit?",
          "Besoin de travail sur vos données aussi ?",
          "¿También necesitas trabajo con datos?",
          "Hai bisogno anche di lavoro sui dati?",
        )}
        description={t(
          "Beyond apps, I build reliable data pipelines, web scrapers, and ETL systems that keep your data clean and ready to use.",
          "Selain aplikasi, saya membangun data pipeline, web scraper, dan sistem ETL yang menjaga data Anda bersih dan siap pakai.",
          "Neben Apps baue ich zuverlässige Datenpipelines, Web-Scraper und ETL-Systeme, die Ihre Daten sauber und einsatzbereit halten.",
          "Au-delà des applications, je construis des pipelines de données, des web scrapers et des systèmes ETL fiables qui gardent vos données propres et prêtes à l'emploi.",
          "Más allá de las apps, construyo pipelines de datos, web scrapers y sistemas ETL fiables que mantienen tus datos limpios y listos para usar.",
          "Oltre alle app, costruisco pipeline di dati, web scraper e sistemi ETL affidabili che mantengono i tuoi dati puliti e pronti all'uso.",
        )}
        href={
          mode === "upwork"
            ? UPWORK_PORTFOLIO_URLS.data
            : "/data-engineer"
        }
        ctaLabel={t(
          "See my data engineering work",
          "Lihat karya data engineering saya",
          "Meine Data-Engineering-Arbeit ansehen",
          "Voir mon travail en data engineering",
          "Ver mi trabajo de data engineering",
          "Guarda il mio lavoro di data engineering",
        )}
      />

      <Footer mode={mode} exportScope="se" />
    </div>
  );
}
