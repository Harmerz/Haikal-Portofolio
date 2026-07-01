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
      "Entwickelte einen Microservice für über 100.000 Anfragen pro Sekunde.",
      "Développement d'un microservice traitant plus de 100 000 requêtes par seconde.",
      "Desarrollo de un microservicio capaz de gestionar más de 100.000 solicitudes por segundo.",
      "Sviluppo di un microservizio in grado di gestire oltre 100.000 richieste al secondo.",
    ),
    note: t(
      "Contributed to Tokopedia × TikTok-Shop system integrations.",
      "Berkontribusi pada integrasi sistem Tokopedia × TikTok-Shop.",
      "Beteiligt an den Systemintegrationen von Tokopedia × TikTok-Shop.",
      "Contribution aux intégrations système entre Tokopedia × TikTok-Shop.",
      "Colaboración en las integraciones de sistemas entre Tokopedia × TikTok-Shop.",
      "Contributo alle integrazioni di sistema tra Tokopedia × TikTok-Shop.",
    ),
    role: t(
      "Backend Engineer · Intern",
      "Backend Engineer · Magang",
      "Backend Engineer · Praktikant",
      "Ingénieur Backend · Stagiaire",
      "Ingeniero Backend · Prácticas",
      "Backend Engineer · Tirocinante",
    ),
    period: t(
      "Feb 2025 – Jun 2025",
      "Feb 2025 – Jun 2025",
      "Feb 2025 – Jun 2025",
      "Feb 2025 – Jun 2025",
      "Feb 2025 – Jun 2025",
      "Feb 2025 – Jun 2025",
    ),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Contributed to Tokopedia × TikTok-Shop system integrations.",
        "Berkontribusi pada integrasi sistem Tokopedia × TikTok-Shop.",
        "Beteiligt an den Systemintegrationen von Tokopedia × TikTok-Shop.",
        "Contribution aux intégrations système entre Tokopedia × TikTok-Shop.",
        "Colaboración en las integraciones de sistemas entre Tokopedia × TikTok-Shop.",
        "Contributo alle integrazioni di sistema tra Tokopedia × TikTok-Shop.",
      ),
      t(
        "Added Lark support to the internal dev kit, cutting log spam ~60%.",
        "Menambah dukungan Lark pada internal dev kit, memangkas log spam ~60%.",
        "Lark-Unterstützung ins interne Dev-Kit integriert und Log-Spam um ca. 60 % reduziert.",
        "Ajout du support Lark au kit de développement interne, réduisant le bruit des logs d'environ 60 %.",
        "Incorporación de soporte para Lark en el kit de desarrollo interno, reduciendo el ruido de logs en ~60%.",
        "Aggiunto il supporto Lark al dev kit interno, riducendo lo spam nei log di circa il 60%.",
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
      "Betrieb des UGM Career Summit für über 2.800 gleichzeitige Nutzer ohne Ausfallzeit.",
      "Exploitation de l'UGM Career Summit pour plus de 2 800 utilisateurs simultanés sans aucune interruption.",
      "Gestión del UGM Career Summit para más de 2.800 usuarios simultáneos sin tiempo de inactividad.",
      "Gestione dell'UGM Career Summit per oltre 2.800 utenti simultanei senza tempi di inattività.",
    ),
    role: t(
      "Full Stack Software Engineer",
      "Full Stack Software Engineer",
      "Full-Stack-Softwareentwickler",
      "Ingénieur logiciel Full Stack",
      "Ingeniero de software Full Stack",
      "Ingegnere Software Full Stack",
    ),
    period: t(
      "Jul 2025 – Jan 2026",
      "Jul 2025 – Jan 2026",
      "Jul 2025 – Jan 2026",
      "Jul 2025 – Jan 2026",
      "Jul 2025 – Jan 2026",
      "Jul 2025 – Jan 2026",
    ),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Engineered a white-label ticketing architecture with QR validation under 2 seconds.",
        "Merancang arsitektur ticketing white-label dengan validasi QR di bawah 2 detik.",
        "Entwicklung einer White-Label-Ticketing-Architektur mit QR-Validierung in unter 2 Sekunden.",
        "Conception d'une architecture de billetterie en marque blanche avec validation QR en moins de 2 secondes.",
        "Diseño de una arquitectura de emisión de entradas de marca blanca con validación QR en menos de 2 segundos.",
        "Progettazione di un'architettura di ticketing white-label con validazione QR in meno di 2 secondi.",
      ),
      t(
        "Built an automated document-generation pipeline for an international symposium.",
        "Membangun pipeline generasi dokumen otomatis untuk simposium internasional.",
        "Aufbau einer automatisierten Pipeline zur Dokumentenerstellung für ein internationales Symposium.",
        "Mise en place d'un pipeline automatisé de génération de documents pour un symposium international.",
        "Creación de un pipeline automatizado de generación de documentos para un simposio internacional.",
        "Realizzazione di una pipeline automatizzata per la generazione di documenti per un simposio internazionale.",
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
      "Entwarf HPC-Datenpipelines — Zuverlässigkeit +25 %, Verarbeitungszeit −40 %.",
      "Conception de pipelines de données HPC — fiabilité +25 %, temps de traitement −40 %.",
      "Diseño de pipelines de datos HPC: fiabilidad +25 %, tiempo de procesamiento −40 %.",
      "Progettazione di pipeline di dati HPC — affidabilità +25%, tempo di elaborazione −40%.",
    ),
    note: t(
      "Operated an 8-server HPC cluster ingesting social-media & news data at scale.",
      "Mengoperasikan cluster HPC 8 server untuk ingest data media sosial & berita dalam skala besar.",
      "Betrieb eines HPC-Clusters mit 8 Servern zur Verarbeitung großer Mengen an Social-Media- und Nachrichtendaten.",
      "Exploitation d'un cluster HPC de 8 serveurs ingérant à grande échelle des données de réseaux sociaux et d'actualités.",
      "Operación de un clúster HPC de 8 servidores para la ingesta a gran escala de datos de redes sociales y noticias.",
      "Gestione di un cluster HPC a 8 server per l'ingestione su larga scala di dati da social media e notizie.",
    ),
    role: t(
      "Data Engineer · Contract",
      "Data Engineer · Kontrak",
      "Data Engineer · Vertrag",
      "Ingénieur Data · Contrat",
      "Ingeniero de Datos · Contrato",
      "Data Engineer · Contratto",
    ),
    period: t(
      "Jan 2024 – Nov 2025",
      "Jan 2024 – Nov 2025",
      "Jan 2024 – Nov 2025",
      "Jan 2024 – Nov 2025",
      "Jan 2024 – Nov 2025",
      "Jan 2024 – Nov 2025",
    ),
    location: "Jakarta, ID",
    bullets: [
      t(
        "Architected a resilient social-media data pipeline ingesting from diverse sources.",
        "Merancang data pipeline media sosial yang tangguh dengan ingest dari beragam sumber.",
        "Entwarf eine robuste Social-Media-Datenpipeline mit Ingestion aus vielfältigen Quellen.",
        "Conception d'un pipeline de données de réseaux sociaux résilient, ingérant des données issues de sources variées.",
        "Diseño de un pipeline de datos de redes sociales resiliente que ingiere información de fuentes diversas.",
        "Progettazione di una pipeline di dati sui social media resiliente, con ingestione da fonti diverse.",
      ),
      t(
        "Built Grafana + Prometheus monitoring with alerts that prevented server crashes.",
        "Membangun monitoring Grafana + Prometheus dengan alert yang mencegah server crash.",
        "Implementierte Grafana + Prometheus Monitoring mit Alerts, die Serverabstürze verhinderten.",
        "Mise en place d'un monitoring Grafana + Prometheus avec des alertes ayant permis d'éviter des pannes serveur.",
        "Implementación de monitoreo con Grafana + Prometheus con alertas que evitaron caídas del servidor.",
        "Implementazione del monitoraggio Grafana + Prometheus con avvisi che hanno prevenuto crash dei server.",
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
      "Analytics-Dashboards — Zuverlässigkeit +50 %, teamübergreifende Effizienz +70 %.",
      "Tableaux de bord analytiques — fiabilité +50 %, efficacité inter-équipes +70 %.",
      "Paneles de analítica — fiabilidad +50 %, eficiencia entre equipos +70 %.",
      "Dashboard di analisi — affidabilità +50%, efficienza tra i team +70%.",
    ),
    role: t(
      "Web App Developer · Contract",
      "Web App Developer · Kontrak",
      "Webanwendungsentwickler · Vertrag",
      "Développeur d'applications web · Contrat",
      "Desarrollador de aplicaciones web · Contrato",
      "Sviluppatore di applicazioni web · Contratto",
    ),
    period: t(
      "Sep 2023 – Mar 2024",
      "Sep 2023 – Mar 2024",
      "Sep 2023 – Mar 2024",
      "Sep 2023 – Mar 2024",
      "Sep 2023 – Mar 2024",
      "Sep 2023 – Mar 2024",
    ),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Integrated multiple APIs to streamline interdepartmental workflows.",
        "Mengintegrasikan banyak API untuk merampingkan alur kerja antar-departemen.",
        "Integrierte mehrere APIs zur Optimierung abteilungsübergreifender Arbeitsabläufe.",
        "Intégration de multiples API pour fluidifier les flux de travail interservices.",
        "Integración de múltiples APIs para optimizar los flujos de trabajo entre departamentos.",
        "Integrazione di più API per ottimizzare i flussi di lavoro tra reparti.",
      ),
      t(
        "Shipped a document-conversion feature for better document management.",
        "Merilis fitur konversi dokumen untuk manajemen dokumen yang lebih baik.",
        "Veröffentlichte eine Dokumentenkonvertierungsfunktion für besseres Dokumentenmanagement.",
        "Livraison d'une fonctionnalité de conversion de documents pour une meilleure gestion documentaire.",
        "Lanzamiento de una función de conversión de documentos para mejorar la gestión documental.",
        "Rilascio di una funzionalità di conversione documenti per una migliore gestione documentale.",
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
      "Leitete ein Team beim Aufbau von Echtzeit-Datendashboards und wiederverwendbaren Komponenten.",
      "Direction d'une équipe développant des tableaux de bord de données en temps réel et des composants réutilisables.",
      "Liderazgo de un equipo en el desarrollo de paneles de datos en tiempo real y componentes reutilizables.",
      "Guida di un team nello sviluppo di dashboard di dati in tempo reale e componenti riutilizzabili.",
    ),
    role: t(
      "Web App Developer · Contract",
      "Web App Developer · Kontrak",
      "Webanwendungsentwickler · Vertrag",
      "Développeur d'applications web · Contrat",
      "Desarrollador de aplicaciones web · Contrato",
      "Sviluppatore di applicazioni web · Contratto",
    ),
    period: t(
      "Jan 2023 – Jan 2024",
      "Jan 2023 – Jan 2024",
      "Jan 2023 – Jan 2024",
      "Jan 2023 – Jan 2024",
      "Jan 2023 – Jan 2024",
      "Jan 2023 – Jan 2024",
    ),
    location: "Yogyakarta, ID",
    bullets: [
      t(
        "Applied Agile to accelerate delivery and raise software quality.",
        "Menerapkan Agile untuk mempercepat delivery dan meningkatkan kualitas software.",
        "Wendete Agile an, um die Auslieferung zu beschleunigen und die Softwarequalität zu steigern.",
        "Application des méthodes Agile pour accélérer la livraison et améliorer la qualité du logiciel.",
        "Aplicación de metodologías Agile para acelerar la entrega y mejorar la calidad del software.",
        "Applicazione di metodologie Agile per accelerare le consegne e migliorare la qualità del software.",
      ),
      t(
        "Delivered scalable apps that gave actionable business insights.",
        "Merilis aplikasi scalable yang memberi wawasan bisnis yang actionable.",
        "Lieferte skalierbare Anwendungen, die verwertbare Geschäftseinblicke ermöglichten.",
        "Livraison d'applications évolutives fournissant des insights métier exploitables.",
        "Entrega de aplicaciones escalables que proporcionaron información empresarial procesable.",
        "Realizzazione di applicazioni scalabili in grado di fornire insight aziendali concreti.",
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
      "Führte Penetrationstests für kritische Webplattformen durch und stärkte deren Sicherheit.",
      "Réalisation de tests d'intrusion sur des plateformes web critiques et renforcement de leur sécurité.",
      "Realización de pruebas de penetración en plataformas web críticas y refuerzo de su seguridad.",
      "Esecuzione di penetration test su piattaforme web critiche e rafforzamento della loro sicurezza.",
    ),
    role: t(
      "Datacomm Product Dev · Intern",
      "Datacomm Product Dev · Magang",
      "Datacomm Product Dev · Praktikant",
      "Datacomm Product Dev · Stagiaire",
      "Datacomm Product Dev · Prácticas",
      "Datacomm Product Dev · Tirocinante",
    ),
    period: t(
      "Jan 2024 – Mar 2024",
      "Jan 2024 – Mar 2024",
      "Jan 2024 – Mar 2024",
      "Jan 2024 – Mar 2024",
      "Jan 2024 – Mar 2024",
      "Jan 2024 – Mar 2024",
    ),
    location: "Jakarta, ID",
    bullets: [
      t(
        "Reported vulnerabilities and coordinated fixes with vendors.",
        "Melaporkan kerentanan dan mengoordinasikan perbaikan dengan vendor.",
        "Meldete Schwachstellen und koordinierte Fehlerbehebungen mit Anbietern.",
        "Signalement des vulnérabilités et coordination des correctifs avec les fournisseurs.",
        "Reporte de vulnerabilidades y coordinación de soluciones con proveedores.",
        "Segnalazione delle vulnerabilità e coordinamento delle correzioni con i fornitori.",
      ),
      t(
        "Aligned security measures with business objectives in an Agile team.",
        "Menyelaraskan langkah keamanan dengan tujuan bisnis dalam tim Agile.",
        "Stimmte Sicherheitsmaßnahmen mit Geschäftszielen in einem agilen Team ab.",
        "Alignement des mesures de sécurité avec les objectifs métier au sein d'une équipe Agile.",
        "Alineación de las medidas de seguridad con los objetivos del negocio dentro de un equipo Agile.",
        "Allineamento delle misure di sicurezza agli obiettivi di business all'interno di un team Agile.",
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
