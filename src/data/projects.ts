import { t, type Localized } from "@/i18n/config";

export interface Project {
  id: string;
  title: string;
  description: Localized;
  problem?: Localized;
  solution?: Localized;
  tech: string[];
  result?: Localized; // outcome / impact metric (rendered in green)
  award?: Localized; // award badge (rendered in amber)
  scale?: Localized; // headline metric, used for data-engineering work
  image?: string; // card cover
  images?: string[]; // gallery shown in the detail view / modal (add more here)
  alt?: string;
}

// ----------------------------------------------------------------------------
// Software Engineering — ordered strongest-first (awards & big metrics lead).
// Copy is benefit-led and framed for US/EU clients (no opaque local context).
// ----------------------------------------------------------------------------
export const softwareProjects: Project[] = [
  {
    id: "pwc",
    title: "PwC Securing AI",
    description: t(
      "An AI investment assistant that helps people understand and manage their assets through natural conversation.",
      "Asisten investasi AI yang membantu orang memahami dan mengelola aset lewat percakapan natural.",
    ),
    problem: t(
      "Investors struggled to understand and manage their assets efficiently.",
      "Investor kesulitan memahami dan mengelola aset secara efisien.",
    ),
    solution: t(
      "Built an AI chatbot and asset management dashboard in 14 days.",
      "Membangun chatbot AI dan dashboard manajemen aset dalam 14 hari.",
    ),
    tech: ["Next.js 13", "Azure", "MongoDB 7", "Node.js", "OpenAI"],
    award: t(
      "1st in Indonesia · 2nd in Southeast Asia",
      "Juara 1 Indonesia · Juara 2 Asia Tenggara",
    ),
    result: t(
      "From concept to a working AI product in just 14 days.",
      "Dari konsep ke produk AI yang berfungsi hanya dalam 14 hari.",
    ),
  },
  {
    id: "gmat",
    title: "GMAT Satellite",
    description: t(
      "Real-time ground control for an international satellite competition—telemetry, mapping, and live 3D visualization.",
      "Ground control real-time untuk kompetisi satelit internasional—telemetry, peta, dan visualisasi 3D langsung.",
    ),
    problem: t(
      "Needed real-time monitoring of satellite telemetry.",
      "Butuh monitoring telemetry satelit secara real-time.",
    ),
    solution: t(
      "Telemetry dashboard, mapping, and 3D satellite visualization.",
      "Dashboard telemetry, peta, dan visualisasi 3D satelit.",
    ),
    tech: ["React", "Three.js", "Raspberry Pi", "Arduino", "XBEE"],
    award: t(
      "3rd place · Teknofest Turkey 2022 (international)",
      "Juara 3 · Teknofest Turkey 2022 (internasional)",
    ),
    result: t(
      "Delivered live telemetry under real competition conditions.",
      "Menyajikan telemetry langsung dalam kondisi kompetisi nyata.",
    ),
    image: "/home/portfolio/gmat.png",
    alt: "GMAT Satellite ground control dashboard",
  },
  {
    id: "ppsmb",
    title: "University Onboarding Platform",
    description: t(
      "Onboarding website and staff task-management system for a major university's incoming students.",
      "Website onboarding dan sistem task management panitia untuk mahasiswa baru universitas besar.",
    ),
    problem: t(
      "Committee coordination and information delivery weren't centralized.",
      "Koordinasi panitia dan penyampaian informasi belum terpusat.",
    ),
    solution: t(
      "Information website plus a task management application.",
      "Website informasi + aplikasi task management.",
    ),
    tech: ["Next.js 12", "TailwindCSS", "Strapi"],
    result: t(
      "1.3M visitors in the first month, with 300+ staff coordinated in one place.",
      "1,3 juta pengunjung di bulan pertama, dengan 300+ panitia terkoordinasi di satu tempat.",
    ),
    image: "/home/portfolio/ppsmb.png",
    alt: "University onboarding platform",
  },
  {
    id: "robota-new",
    title: "Robota — AI Hotel Platform",
    description: t(
      "AI hotel-management platform tracking competitor pricing, guest reviews, and property performance.",
      "Platform AI manajemen hotel yang memantau harga kompetitor, ulasan tamu, dan performa properti.",
    ),
    problem: t(
      "The legacy React SPA was limited in performance, SEO, and dashboard loading.",
      "Frontend React SPA lama terbatas dalam performa, SEO, dan loading dashboard.",
    ),
    solution: t(
      "Migrated to Next.js 13 (SSR & SSG) with optimized data visualization.",
      "Migrasi ke Next.js 13 (SSR & SSG) dengan optimasi visualisasi data.",
    ),
    tech: ["Next.js 13", "React", "TypeScript", "TailwindCSS", "TanStack Query"],
    result: t(
      "A faster, SEO-ready rebuild that hotel teams rely on every day.",
      "Rebuild yang lebih cepat dan siap SEO, diandalkan tim hotel setiap hari.",
    ),
    image: "/home/portfolio/robotav2.png",
    alt: "Robota hotel management platform",
  },
  {
    id: "tilikan",
    title: "Tilikan",
    description: t(
      "Interactive analytics and data-visualization dashboards built for client reporting.",
      "Dashboard analitik dan visualisasi data interaktif untuk pelaporan klien.",
    ),
    problem: t(
      "Clients needed easy-to-understand visualizations that integrate with their systems.",
      "Klien butuh visualisasi data yang mudah dipahami & dapat diintegrasikan.",
    ),
    solution: t(
      "Interactive dashboards, geographic maps, and PDF export.",
      "Dashboard interaktif, peta geografis, dan export PDF.",
    ),
    tech: ["Next.js 14", "TanStack", "TailwindCSS", "ECharts", "ChartJS"],
    result: t(
      "Boosted system reliability ~50% and cross-team efficiency ~70%.",
      "Reliability sistem naik ~50% dan efisiensi lintas tim ~70%.",
    ),
    image: "/home/portfolio/tilikan.png",
    alt: "Tilikan analytics dashboard",
  },
  {
    id: "petadata",
    title: "Petadata",
    description: t(
      "A monitoring and analytics platform that brings scattered public data into one place.",
      "Platform monitoring dan analitik yang menyatukan data publik yang tersebar.",
    ),
    problem: t(
      "Data was scattered across many sources, making centralized analysis hard.",
      "Data tersebar di banyak sumber sehingga sulit dianalisis terpusat.",
    ),
    solution: t(
      "Data visualization and aggregation dashboard.",
      "Dashboard visualisasi dan agregasi data.",
    ),
    tech: ["React", "Next.js", "ChartJS", "REST API"],
    result: t(
      "Turns fragmented data into one clear view for faster decisions.",
      "Mengubah data yang terfragmentasi jadi satu tampilan jelas untuk keputusan lebih cepat.",
    ),
    image: "/home/portfolio/petadata.png",
    alt: "Petadata public-data analytics platform",
  },
  {
    id: "atensi",
    title: "Atensi — Sentiment Monitoring",
    description: t(
      "Real-time public sentiment and issue monitoring across social media and news.",
      "Monitoring sentimen dan isu publik real-time dari media sosial dan berita.",
    ),
    problem: t(
      "Hard to know which topics are gaining public attention in real time.",
      "Sulit mengetahui topik yang sedang jadi perhatian publik secara real-time.",
    ),
    solution: t(
      "Visualizes trends, sentiment, and trending topics.",
      "Visualisasi tren, sentimen, dan topik populer.",
    ),
    tech: ["Next.js", "ChartJS", "Elasticsearch"],
    result: t(
      "Spot trending issues in real time—before they escalate.",
      "Deteksi isu yang sedang naik secara real-time—sebelum membesar.",
    ),
    image: "/home/portfolio/atensi.png",
    alt: "Atensi sentiment monitoring",
  },
  {
    id: "ganjar",
    title: "Personal Safety App",
    description: t(
      "An award-winning, location-based personal-safety app with live maps.",
      "Aplikasi keselamatan pribadi berbasis lokasi yang meraih penghargaan, dengan peta langsung.",
    ),
    problem: t(
      "Hard to report and monitor unsafe areas.",
      "Sulit melaporkan dan memonitor area rawan.",
    ),
    solution: t(
      "Mobile app with Google Maps integration.",
      "Aplikasi mobile dengan integrasi Google Maps.",
    ),
    tech: ["Flutter", "Google Maps API"],
    award: t("3rd place · national hackathon", "Juara 3 · hackathon nasional"),
    result: t(
      "Helps people report and avoid unsafe areas, powered by live maps.",
      "Membantu orang melaporkan dan menghindari area tidak aman, didukung peta langsung.",
    ),
    image: "/home/portfolio/ganjar.png",
    alt: "Personal safety mobile app",
  },
  {
    id: "omnisocials",
    title: "Omnisocials",
    description: t(
      "A single dashboard to manage and monitor every social network in one place.",
      "Satu dashboard untuk mengelola dan memantau semua jejaring sosial di satu tempat.",
    ),
    problem: t(
      "Social media managers had to open many platforms to monitor and manage content.",
      "Social media manager harus membuka banyak platform untuk memantau & mengelola konten.",
    ),
    solution: t(
      "A dashboard integrating Instagram, X, TikTok, YouTube, LinkedIn, and more.",
      "Dashboard yang mengintegrasikan API Instagram, X, TikTok, YouTube, LinkedIn, dan lainnya.",
    ),
    tech: ["Next.js 14", "TailwindCSS", "Node.js", "PostgreSQL", "Sequelize"],
    result: t(
      "Manage 11+ social networks from one dashboard—no more tab-switching.",
      "Kelola 11+ jejaring sosial dari satu dashboard—tanpa berpindah tab.",
    ),
  },
  {
    id: "create-carousels",
    title: "Create Carousels",
    description: t(
      "An AI tool that turns articles, ideas, or documents into ready-to-post social carousels.",
      "Alat AI yang mengubah artikel, ide, atau dokumen jadi carousel media sosial siap posting.",
    ),
    problem: t(
      "Making carousels is time-consuming: research, copywriting, and per-slide design.",
      "Pembuatan carousel makan waktu: riset, copywriting, hingga desain tiap slide.",
    ),
    solution: t(
      "Turns text input into post-ready carousels with AI & design templates.",
      "Mengubah input teks jadi carousel siap posting dengan AI & template desain.",
    ),
    tech: ["Next.js", "TypeScript", "OpenAI API", "TailwindCSS", "Supabase"],
    result: t(
      "Turns hours of content design into minutes.",
      "Mengubah berjam-jam desain konten jadi hitungan menit.",
    ),
  },
  {
    id: "festify",
    title: "Festify",
    description: t(
      "A white-label event ticketing platform with built-in QR validation.",
      "Platform ticketing event white-label dengan validasi QR bawaan.",
    ),
    problem: t(
      "Event organizers needed a reusable ticketing system for various events.",
      "Event organizer butuh sistem ticketing yang reusable untuk berbagai acara.",
    ),
    solution: t(
      "Reusable ticketing architecture with QR validation.",
      "Arsitektur ticketing reusable dengan validasi QR.",
    ),
    tech: ["Next.js", "Supabase", "TypeScript"],
    result: t(
      "Reusable ticketing that powers multiple live events—no rebuilds.",
      "Ticketing yang dapat dipakai ulang untuk banyak event langsung—tanpa membangun ulang.",
    ),
    image: "/home/portfolio/festify.png",
    alt: "Festify event ticketing platform",
  },
  {
    id: "nesco",
    title: "Online Competition Platform",
    description: t(
      "Website and dashboards that run an online competition end-to-end.",
      "Website dan dashboard yang menjalankan kompetisi online secara menyeluruh.",
    ),
    problem: t(
      "Needed a responsive competition system and dashboard.",
      "Butuh sistem kompetisi & dashboard yang responsif.",
    ),
    solution: t(
      "Website, authentication, and admin/user dashboards.",
      "Website, autentikasi, dashboard admin dan user.",
    ),
    tech: ["Next.js 12", "TailwindCSS", "REST API", "Node.js"],
    result: t(
      "Ran a full competition for participants and organizers alike.",
      "Menjalankan kompetisi penuh untuk peserta maupun panitia.",
    ),
    image: "/home/portfolio/nesco.png",
    alt: "Online competition platform",
  },
  {
    id: "linkynbio",
    title: "LinkynBio",
    description: t(
      "A bio-link platform (like Linktree) for creators and businesses.",
      "Platform bio-link (seperti Linktree) untuk kreator dan bisnis.",
    ),
    problem: t(
      "Creators & businesses share many different links, making it hard for audiences.",
      "Creator & bisnis harus membagikan banyak link berbeda sehingga audiens kesulitan.",
    ),
    solution: t(
      "Manage multiple links, set priority, and toggle them—all in one URL.",
      "Kelola multiple links, atur prioritas, aktif/nonaktifkan, dalam satu URL.",
    ),
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    result: t(
      "One link that holds a user's entire online presence.",
      "Satu link yang memuat seluruh kehadiran online pengguna.",
    ),
  },
  {
    id: "robota-old",
    title: "Robota — First Generation",
    description: t(
      "The first generation of the Robota platform, built on React and WebSockets.",
      "Generasi pertama platform Robota, dibangun dengan React dan WebSocket.",
    ),
    problem: t(
      "The dashboard handled large data and rendering poorly.",
      "Dashboard kurang optimal menangani data besar dan rendering.",
    ),
    solution: t(
      "React + WebSocket analytics dashboard.",
      "Dashboard analitik berbasis React dan WebSocket.",
    ),
    tech: ["React", "TypeScript", "WebSocket", "ChartJS"],
    result: t(
      "The proven foundation the current product was built on.",
      "Fondasi teruji yang menjadi dasar produk saat ini.",
    ),
    image: "/home/portfolio/robotav1.png",
    alt: "Robota first-generation dashboard",
  },
  {
    id: "blockchain",
    title: "Blockchain Supply Chain",
    description: t(
      "A blockchain app for end-to-end supply-chain traceability.",
      "Aplikasi blockchain untuk ketertelusuran supply chain menyeluruh.",
    ),
    problem: t(
      "Supply-chain oversight from farming through to sale.",
      "Pengawasan supply chain dari pertanian hingga penjualan.",
    ),
    solution: t(
      "Website with smart contracts on Solana.",
      "Website dengan smart contract di Solana.",
    ),
    tech: ["Next.js 13", "Node.js", "Solana"],
    result: t(
      "Traceability from farm to sale, secured on-chain with smart contracts.",
      "Ketertelusuran dari ladang hingga penjualan, diamankan on-chain dengan smart contract.",
    ),
    image: "/home/portfolio/agrichain.png",
    alt: "Blockchain supply chain application",
  },
  {
    id: "kembangkan",
    title: "Kembangkan Software Studio",
    description: t(
      "A project-based software studio supporting small businesses.",
      "Studio software berbasis proyek yang mendukung bisnis kecil.",
    ),
    solution: t(
      "AI services, web development, and UI/UX.",
      "Layanan AI, web development, dan UI/UX.",
    ),
    tech: ["AI", "Web Development", "UI/UX"],
    result: t(
      "Led a team that shipped 8+ products, from websites to ticketing systems.",
      "Memimpin tim yang merilis 8+ produk, dari website hingga sistem ticketing.",
    ),
  },
];

// ----------------------------------------------------------------------------
// Data Engineering — scale metric leads, plain-language value as the result.
// ----------------------------------------------------------------------------
export const dataProjects: Project[] = [
  {
    id: "pipeline",
    title: "Social Media Data Pipeline",
    scale: t("Multi-million records / day", "Multi-juta records / hari"),
    description: t(
      "A unified pipeline behind the Twitter, Instagram, and YouTube scrapers, built for massive volume.",
      "Pipeline terpadu di balik scraper Twitter, Instagram, dan YouTube, dibangun untuk volume masif.",
    ),
    problem: t(
      "Data volume is enormous and must be processed continuously.",
      "Volume data sangat besar dan harus diproses terus-menerus.",
    ),
    solution: t(
      "HPC pipeline with monitoring and a queue system.",
      "Pipeline HPC dengan monitoring dan sistem antrian (queue).",
    ),
    tech: [
      "RabbitMQ",
      "Docker",
      "Elasticsearch",
      "Grafana",
      "Prometheus",
      "Airflow",
    ],
    result: t(
      "Cut processing time ~40% and improved reliability ~25%, monitored 24/7.",
      "Pangkas waktu proses ~40% dan tingkatkan reliability ~25%, dimonitor 24/7.",
    ),
  },
  {
    id: "instagram",
    title: "Instagram Scraping",
    scale: t(
      "100,000+ posts & 2M comments / day",
      "100.000+ post & 2 juta komentar / hari",
    ),
    description: t(
      "Large-scale Instagram data collection for AI sentiment analysis and competitor monitoring.",
      "Pengumpulan data Instagram skala besar untuk analisis sentimen AI dan monitoring kompetitor.",
    ),
    problem: t(
      "Hard to obtain competitor engagement data automatically.",
      "Sulit mendapatkan data engagement kompetitor secara otomatis.",
    ),
    solution: t(
      "Mass scraping of Instagram posts & comments.",
      "Sistem scraping post & komentar Instagram secara massal.",
    ),
    tech: ["Python", "Selenium", "PostgreSQL", "Airflow"],
    result: t(
      "Clean, structured engagement data—delivered daily.",
      "Data engagement yang bersih dan terstruktur—dikirim setiap hari.",
    ),
  },
  {
    id: "twitter",
    title: "Twitter / X Scraping",
    scale: t("150,000+ tweets / day", "150.000+ tweets / hari"),
    description: t(
      "Distributed Twitter/X scraping for AI sentiment analysis and public-conversation monitoring.",
      "Scraping Twitter/X terdistribusi untuk analisis sentimen AI dan monitoring percakapan publik.",
    ),
    problem: t(
      "Client needed real-time monitoring of public conversations.",
      "Klien butuh monitoring percakapan publik secara real-time.",
    ),
    solution: t(
      "A distributed Twitter crawler with a queue system.",
      "Crawler Twitter terdistribusi dengan queue system.",
    ),
    tech: ["Python", "Selenium", "RabbitMQ", "Elasticsearch"],
    result: t(
      "A real-time pulse on public conversation.",
      "Denyut percakapan publik secara real-time.",
    ),
  },
  {
    id: "youtube",
    title: "YouTube Scraping",
    scale: t(
      "10,000+ videos & 1M comments / day",
      "10.000+ video & 1 juta komentar / hari",
    ),
    description: t(
      "YouTube video and comment intelligence with automatic transcription.",
      "Inteligensi video dan komentar YouTube dengan transkripsi otomatis.",
    ),
    problem: t(
      "Needed large-scale analysis of videos and comments.",
      "Membutuhkan analisis video dan komentar YouTube berskala besar.",
    ),
    solution: t(
      "Video & comment crawling pipeline + automated transcript analysis.",
      "Pipeline crawling video & komentar + analisis transkrip otomatis.",
    ),
    tech: ["Python", "Elasticsearch", "RabbitMQ", "YouTube API"],
    result: t(
      "Searchable video insights, transcripts included.",
      "Wawasan video yang dapat dicari, lengkap dengan transkrip.",
    ),
  },
  {
    id: "news",
    title: "News Scraping",
    scale: t("Dozens of sources", "Puluhan sumber"),
    description: t(
      "A unified crawler that turns dozens of news portals into one clean feed.",
      "Crawler terpadu yang mengubah puluhan portal berita jadi satu feed bersih.",
    ),
    problem: t(
      "News comes from many portals with different formats.",
      "Berita berasal dari banyak portal yang berbeda format.",
    ),
    solution: t(
      "Unified news crawling & content-extraction pipeline.",
      "Pipeline unified news crawling & ekstraksi konten.",
    ),
    tech: ["Python", "BeautifulSoup", "Selenium", "newspaper4k"],
    result: t(
      "One clean news feed, ready for AI analysis.",
      "Satu feed berita bersih, siap untuk analisis AI.",
    ),
  },
  {
    id: "leadgen",
    title: "Lead Generation",
    scale: t("Thousands of leads", "Ribuan leads"),
    description: t(
      "Automated B2B and B2C prospecting—email and company data on demand.",
      "Prospek B2B dan B2C otomatis—email dan data perusahaan sesuai kebutuhan.",
    ),
    problem: t(
      "Finding business prospects manually is hard.",
      "Sulit mencari prospek bisnis secara manual.",
    ),
    solution: t(
      "Automated email & company-data discovery.",
      "Otomatisasi pencarian email & data perusahaan.",
    ),
    tech: ["Python", "Automation", "Apollo", "ZoomInfo"],
    result: t(
      "Thousands of qualified prospects, sourced automatically.",
      "Ribuan prospek berkualitas, dikumpulkan secara otomatis.",
    ),
  },
  {
    id: "kick",
    title: "In-Video Word Finder",
    scale: t("Real-time monitoring", "Monitoring real-time"),
    description: t(
      "Finds exact spoken words inside videos by converting speech to searchable text with AI.",
      "Menemukan kata persis yang diucapkan di dalam video dengan mengubah suara jadi teks yang dapat dicari memakai AI.",
    ),
    problem: t(
      "Automated monitoring of creator content on Kick.com.",
      "Monitoring konten kreator Kick.com secara otomatis.",
    ),
    solution: t(
      "Video indexing, video-to-text, and exact-word search inside videos.",
      "Video indexing, video-to-text, dan pencarian kata persis dalam video.",
    ),
    tech: ["Python", "Speech-to-Text AI", "Scraping"],
    result: t(
      "Pinpoint the exact moment a word is spoken—automatically.",
      "Temukan momen persis sebuah kata diucapkan—secara otomatis.",
    ),
  },
  {
    id: "twitter-bot",
    title: "Auto-Engagement Bot",
    scale: t("Hundreds of comments / day", "Ratusan komentar / hari"),
    description: t(
      "Automated, on-topic commenting built on the Twitter/X scraping system.",
      "Komentar otomatis dan relevan yang dibangun di atas sistem scraping Twitter/X.",
    ),
    solution: t(
      "Scheduled automated commenting on relevant conversations.",
      "Automasi komentar terjadwal pada percakapan yang relevan.",
    ),
    tech: ["Python", "Automation"],
    result: t(
      "Hands-free engagement at scale.",
      "Engagement otomatis dalam skala besar.",
    ),
  },
];

// Per-project meta: role, context, status, and key decisions (senior signals).
// Kept in a side map so the project arrays stay readable.
export type ProjectContext = "client" | "owned" | "competition";

export interface ProjectMeta {
  role?: Localized;
  context?: ProjectContext;
  status?: Localized;
  decisions?: Localized[]; // architecture / tech-selection calls (flagship)
}

export const projectMeta: Record<string, ProjectMeta> = {
  // Client work — built from scratch (incl. tech selection), owned by the client.
  omnisocials: {
    role: t("Full Stack Engineer", "Full Stack Engineer"),
    context: "client",
  },
  linkynbio: {
    role: t("Full Stack Engineer", "Full Stack Engineer"),
    context: "client",
  },
  "create-carousels": {
    role: t("Full Stack Engineer", "Full Stack Engineer"),
    context: "client",
  },
  kembangkan: { context: "client" },
  // Client / contract work.
  "robota-new": {
    role: t("Web App Developer · led team", "Web App Developer · pimpin tim"),
    context: "client",
    decisions: [
      t(
        "Migrated the React SPA to Next.js 13 (SSR/SSG) to fix SEO and slow dashboard loads.",
        "Migrasi React SPA ke Next.js 13 (SSR/SSG) untuk memperbaiki SEO dan loading dashboard yang lambat.",
      ),
      t(
        "Adopted TanStack Query for cached, resilient data fetching across heavy dashboards.",
        "Pakai TanStack Query untuk data fetching ber-cache & tangguh di dashboard berat.",
      ),
    ],
  },
  "robota-old": {
    role: t("Web App Developer", "Web App Developer"),
    context: "client",
  },
  tilikan: { role: t("Web App Developer", "Web App Developer"), context: "client" },
  petadata: { context: "client" },
  atensi: { context: "client" },
  festify: {
    role: t("Full Stack Engineer", "Full Stack Engineer"),
    context: "client",
  },
  ppsmb: {
    role: t("IT Team Lead (team of 7)", "IT Team Lead (tim 7 orang)"),
    context: "client",
  },
  nesco: {
    role: t("Frontend Lead (team of 6)", "Frontend Lead (tim 6 orang)"),
    context: "client",
  },
  // Competitions / awards.
  pwc: { role: t("Team Lead", "Team Lead"), context: "competition" },
  gmat: {
    role: t("Technical Lead & Project Manager", "Technical Lead & Project Manager"),
    context: "competition",
  },
  ganjar: { context: "competition" },
  // Data engineering (contract @ Semesta Data Digital).
  pipeline: {
    role: t("Data Engineer", "Data Engineer"),
    context: "client",
    decisions: [
      t(
        "Chose RabbitMQ + Docker workers over Kafka for multi-million-record throughput at lower operational cost.",
        "Pilih RabbitMQ + Docker workers daripada Kafka untuk throughput multi-juta record dengan biaya operasional lebih rendah.",
      ),
      t(
        "Added Grafana + Prometheus alerting on CPU/RAM spikes — improved reliability ~25% and prevented server crashes.",
        "Tambah alerting Grafana + Prometheus untuk lonjakan CPU/RAM — reliability naik ~25% dan mencegah server crash.",
      ),
      t(
        "Tuned resource allocation and pipeline automation — cut processing time ~40%.",
        "Optimasi alokasi resource & automasi pipeline — waktu proses turun ~40%.",
      ),
    ],
  },
  instagram: { role: t("Data Engineer", "Data Engineer"), context: "client" },
  twitter: { role: t("Data Engineer", "Data Engineer"), context: "client" },
  youtube: { role: t("Data Engineer", "Data Engineer"), context: "client" },
  news: { role: t("Data Engineer", "Data Engineer"), context: "client" },
  leadgen: { role: t("Data Engineer", "Data Engineer"), context: "client" },
  kick: { role: t("Data Engineer", "Data Engineer"), context: "client" },
  "twitter-bot": { role: t("Data Engineer", "Data Engineer"), context: "client" },
};

export function getProjectMeta(id: string): ProjectMeta {
  return projectMeta[id] ?? {};
}

// Architecture flow diagrams for data-engineering projects (shown in detail view).
// Roles are kept in English — standard, universal tech terms for US/EU clients.
export interface PipelineStage {
  role: string;
  label: string;
}

export const pipelines: Record<string, PipelineStage[]> = {
  pipeline: [
    { role: "Sources", label: "Scrapers" },
    { role: "Queue", label: "RabbitMQ" },
    { role: "Process", label: "Docker workers" },
    { role: "Store", label: "Elasticsearch" },
    { role: "Monitor", label: "Grafana + Prometheus" },
  ],
  instagram: [
    { role: "Source", label: "Instagram" },
    { role: "Crawl", label: "Selenium" },
    { role: "Orchestrate", label: "Airflow" },
    { role: "Store", label: "PostgreSQL" },
    { role: "Analyze", label: "Sentiment AI" },
  ],
  twitter: [
    { role: "Source", label: "Twitter / X" },
    { role: "Crawl", label: "Selenium" },
    { role: "Queue", label: "RabbitMQ" },
    { role: "Store", label: "Elasticsearch" },
    { role: "Analyze", label: "Sentiment AI" },
  ],
  youtube: [
    { role: "Source", label: "YouTube API" },
    { role: "Crawl", label: "Python" },
    { role: "Queue", label: "RabbitMQ" },
    { role: "Transcribe", label: "Speech-to-Text" },
    { role: "Store", label: "Elasticsearch" },
  ],
  news: [
    { role: "Sources", label: "News portals" },
    { role: "Crawl", label: "BeautifulSoup / newspaper4k" },
    { role: "Extract", label: "Content parser" },
    { role: "Store", label: "Database" },
    { role: "Analyze", label: "NER + Sentiment AI" },
  ],
  leadgen: [
    { role: "Sources", label: "Apollo / ZoomInfo" },
    { role: "Automate", label: "Python" },
    { role: "Enrich", label: "Dedup + verify" },
    { role: "Deliver", label: "CSV / CRM" },
  ],
  kick: [
    { role: "Source", label: "Kick.com" },
    { role: "Extract", label: "Video → Audio" },
    { role: "Transcribe", label: "Speech-to-Text AI" },
    { role: "Index", label: "Searchable text" },
    { role: "Output", label: "Word finder" },
  ],
  "twitter-bot": [
    { role: "Source", label: "Twitter / X" },
    { role: "Filter", label: "Relevance match" },
    { role: "Schedule", label: "Python" },
    { role: "Act", label: "Auto-comment" },
  ],
};

export function getPipeline(id: string): PipelineStage[] {
  return pipelines[id] ?? [];
}

// All projects in one list + lookup by id (used by the /projects/[id] route).
export const allProjects: Project[] = [...softwareProjects, ...dataProjects];

export function getProjectById(id: string): Project | undefined {
  return allProjects.find((project) => project.id === id);
}

/** Resolve the gallery media for a project (falls back to the card cover). */
export function getProjectImages(project: Project): string[] {
  if (project.images && project.images.length > 0) return project.images;
  return project.image ? [project.image] : [];
}

/** True when a media path is a video (rendered as <video> instead of <Image>). */
export function isVideo(src: string): boolean {
  return /\.(webm|mp4|mov|ogg)$/i.test(src);
}

// High-performance computing infrastructure operated as a data engineer.
export const hpcStats: { value: string; label: Localized; detail: Localized }[] =
  [
    {
      value: "8",
      label: t("HPC Servers", "Server HPC"),
      detail: t("4 main + 4 additional", "4 utama + 4 tambahan"),
    },
    {
      value: "64",
      label: t("Cores (max)", "Cores (maks)"),
      detail: t("AMD EPYC 7502P", "AMD EPYC 7502P"),
    },
    {
      value: "200GB+",
      label: t("RAM / node", "RAM / node"),
      detail: t("Ubuntu 22.04 / CentOS", "Ubuntu 22.04 / CentOS"),
    },
    {
      value: "Multi-M",
      label: t("Records / day", "Records / hari"),
      detail: t("Pipeline throughput", "Throughput pipeline"),
    },
  ];
