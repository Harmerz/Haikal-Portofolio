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
  "JavaScript",
  "Web Scraping",
  "Data Scraping",
  "Web Crawling",
  "Data Extraction",
  "Data Engineering",
  "ETL Pipeline",
  "API Integration",
  "Scrapy",
  "Playwright",
  "Puppeteer",
  "Selenium",
  "Beautiful Soup",
  "newspaper4k",
  "RabbitMQ",
  "Apache Airflow",
  "Docker",
  "Kubernetes",
  "Elasticsearch",
  "PostgreSQL",
  "Grafana",
  "Prometheus",
  "Speech-to-Text AI",
  "Linux",
  "IT Infrastructure",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection
        eyebrow={t(
          "Specialized in Data Engineering",
          "Spesialisasi Data Engineering",
          "Spezialisiert auf Data Engineering",
          "Spécialisé en Data Engineering",
          "Especializado en Data Engineering",
          "Specializzato in Data Engineering",
        )}
        title={t(
          "Reliable data pipelines & automated extraction.",
          "Data pipeline andal & ekstraksi otomatis.",
          "Zuverlässige Datenpipelines & automatisierte Extraktion.",
          "Pipelines de données fiables et extraction automatisée.",
          "Pipelines de datos fiables y extracción automatizada.",
          "Pipeline di dati affidabili ed estrazione automatizzata.",
        )}
        description={t(
          "I design and operate robust data systems—from complex web scraping to clean warehousing—so your data stays accurate and ready to use.",
          "Saya merancang dan mengoperasikan sistem data yang tangguh—dari web scraping kompleks hingga warehousing yang rapi—agar data Anda tetap akurat dan siap pakai.",
          "Ich entwerfe und betreibe robuste Datensysteme—von komplexem Web-Scraping bis zu sauberem Warehousing—damit Ihre Daten präzise und einsatzbereit bleiben.",
          "Je conçois et exploite des systèmes de données robustes—du web scraping complexe à un entreposage propre—pour que vos données restent précises et prêtes à l'emploi.",
          "Diseño y opero sistemas de datos robustos—desde web scraping complejo hasta un almacenamiento limpio—para que tus datos se mantengan precisos y listos para usar.",
          "Progetto e gestisco sistemi di dati robusti—dal web scraping complesso a un data warehousing pulito—così i tuoi dati restano accurati e pronti all'uso.",
        )}
        supportingLine={t(
          "Web Scraping • Automation • ETL Pipelines • Data Quality",
          "Web Scraping • Otomasi • ETL Pipeline • Kualitas Data",
          "Web Scraping • Automatisierung • ETL-Pipelines • Datenqualität",
          "Web Scraping • Automatisation • Pipelines ETL • Qualité des Données",
          "Web Scraping • Automatización • Pipelines ETL • Calidad de Datos",
          "Web Scraping • Automazione • Pipeline ETL • Qualità dei Dati",
        )}
        ctaText={t(
          "Discuss Your Data Needs",
          "Diskusikan Kebutuhan Data Anda",
          "Datenbedarf besprechen",
          "Discuter de vos besoins en données",
          "Hablemos de tus necesidades de datos",
          "Parliamo delle tue esigenze di dati",
        )}
      />

      {/* Data Engineering Projects */}
      <section className="bg-white px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              title={t(
                "Data Engineering Work",
                "Karya Data Engineering",
                "Data-Engineering-Arbeiten",
                "Travaux Data Engineering",
                "Trabajo de Data Engineering",
                "Lavori di Data Engineering",
              )}
              subtitle={t(
                "Production scraping systems and pipelines processing data at scale",
                "Sistem scraping produksi & pipeline yang memproses data dalam skala besar",
                "Produktive Scraping-Systeme und Pipelines, die Daten in großem Maßstab verarbeiten",
                "Systèmes de scraping en production et pipelines traitant les données à grande échelle",
                "Sistemas de scraping en producción y pipelines que procesan datos a gran escala",
                "Sistemi di scraping in produzione e pipeline che elaborano dati su larga scala",
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
        title={t(
          "Data Stack",
          "Data Stack",
          "Data Stack",
          "Data Stack",
          "Data Stack",
          "Data Stack",
        )}
        description={t(
          "The tools I use to extract, process, and deliver clean, reliable data.",
          "Alat yang saya gunakan untuk mengekstrak, memproses, dan mengirim data yang bersih dan andal.",
          "Die Werkzeuge, mit denen ich Daten extrahiere, verarbeite und in sauberer, zuverlässiger Form liefere.",
          "Les outils que j'utilise pour extraire, traiter et livrer des données propres et fiables.",
          "Las herramientas que uso para extraer, procesar y entregar datos limpios y fiables.",
          "Gli strumenti che uso per estrarre, elaborare e fornire dati puliti e affidabili.",
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
        title={t(
          "Also building software?",
          "Sedang membangun software juga?",
          "Bauen Sie auch Software?",
          "Vous développez aussi des logiciels ?",
          "¿También estás construyendo software?",
          "Stai anche costruendo software?",
        )}
        description={t(
          "Beyond data, I ship production-ready full-stack web applications—from UI to API to database.",
          "Selain data, saya membangun aplikasi web full-stack siap produksi—dari UI hingga API hingga database.",
          "Neben Daten liefere ich produktionsreife Full-Stack-Webanwendungen—von der Oberfläche über die API bis zur Datenbank.",
          "Au-delà des données, je livre des applications web full-stack prêtes pour la production—de l'interface à l'API en passant par la base de données.",
          "Más allá de los datos, entrego aplicaciones web full-stack listas para producción—desde la interfaz hasta la API y la base de datos.",
          "Oltre ai dati, realizzo applicazioni web full-stack pronte per la produzione—dall'interfaccia utente all'API fino al database.",
        )}
        href="/software-engineer"
        ctaLabel={t(
          "See my software engineering work",
          "Lihat karya software engineering saya",
          "Meine Software-Engineering-Arbeit ansehen",
          "Voir mon travail en software engineering",
          "Ver mi trabajo de software engineering",
          "Guarda il mio lavoro di software engineering",
        )}
      />

      <Footer />
    </div>
  );
}
