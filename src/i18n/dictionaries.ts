import { t, type Localized } from "./config";

// Shared UI chrome strings (nav, footer, badges, contact, testimonials).
// Page-specific copy (hero, section headers) lives in the page files as
// Localized literals so each page stays self-contained.

export const dict = {
  nav: {
    home: t("Home", "Beranda", "Startseite", "Accueil", "Inicio", "Home"),
    software: t("Software", "Software", "Software", "Logiciel", "Software", "Software"),
    data: t("Data", "Data", "Daten", "Données", "Datos", "Dati"),
    contact: t("Contact", "Kontak", "Kontakt", "Contact", "Contacto", "Contatto"),
  },
  hero: {
    available: t(
      "Available for work (Remote/Onsite)",
      "Tersedia untuk bekerja (Remote/Onsite)",
      "Verfügbar für Aufträge (Remote/Vor Ort)",
      "Disponible pour travailler (Télétravail/Sur site)",
      "Disponible para trabajar (Remoto/Presencial)",
      "Disponibile per lavorare (Remoto/In sede)",
    ),
    companyNext: t(
      "Your company next?",
      "Perusahaan Anda berikutnya?",
      "Ihr Unternehmen als Nächstes?",
      "Votre entreprise ensuite ?",
      "¿Su empresa a continuación?",
      "La tua azienda, la prossima?",
    ),
  },
  testimonials: {
    title: t(
      "What clients say",
      "Kata klien",
      "Was Kunden sagen",
      "Ce que disent les clients",
      "Lo que dicen los clientes",
      "Cosa dicono i clienti",
    ),
    subtitle: t(
      "Trusted by teams and organizations to deliver.",
      "Dipercaya tim dan organisasi untuk memberikan hasil.",
      "Das Vertrauen von Teams und Organisationen, um Ergebnisse zu liefern.",
      "La confiance d'équipes et d'organisations pour livrer des résultats.",
      "La confianza de equipos y organizaciones para lograr resultados.",
      "La fiducia di team e organizzazioni per ottenere risultati.",
    ),
  },
  card: {
    details: t("View details", "Lihat detail", "Details ansehen", "Voir les détails", "Ver detalles", "Vedi dettagli"),
    close: t("Close", "Tutup", "Schließen", "Fermer", "Cerrar", "Chiudi"),
    problem: t("Problem", "Masalah", "Problem", "Problème", "Problema", "Problema"),
    solution: t("Solution", "Solusi", "Lösung", "Solution", "Solución", "Soluzione"),
    stack: t("Tech stack", "Tech stack", "Tech-Stack", "Stack technique", "Stack tecnológico", "Stack tecnologico"),
    architecture: t("How it works", "Cara kerja", "So funktioniert es", "Comment ça marche", "Cómo funciona", "Come funziona"),
    decisions: t("Key decisions", "Keputusan kunci", "Wichtige Entscheidungen", "Décisions clés", "Decisiones clave", "Decisioni chiave"),
    role: t("Role", "Peran", "Rolle", "Rôle", "Rol", "Ruolo"),
    visit: t("Visit live site", "Kunjungi situs live", "Live-Website besuchen", "Visiter le site en ligne", "Visitar sitio en vivo", "Visita il sito live"),
  },
  context: {
    client: t("Client work", "Proyek klien", "Kundenprojekt", "Travail client", "Trabajo para clientes", "Lavoro per clienti"),
    owned: t("Owned product", "Produk sendiri", "Eigenes Produkt", "Produit personnel", "Producto propio", "Prodotto proprio"),
    competition: t("Competition", "Kompetisi", "Wettbewerb", "Compétition", "Competición", "Competizione"),
  },
  experience: {
    title: t(
      "Experience",
      "Pengalaman",
      "Erfahrung",
      "Expérience",
      "Experiencia",
      "Esperienza",
    ),
    subtitle: t(
      "Roles where I've owned systems, led teams, and shipped at scale.",
      "Peran di mana saya memiliki sistem, memimpin tim, dan merilis dalam skala besar.",
      "Rollen, in denen ich Systeme verantwortet, Teams geleitet und im großen Maßstab ausgeliefert habe.",
      "Des rôles où j'ai piloté des systèmes, dirigé des équipes et livré à grande échelle.",
      "Roles en los que he gestionado sistemas, liderado equipos y entregado resultados a gran escala.",
      "Ruoli in cui ho gestito sistemi, guidato team e distribuito soluzioni su larga scala.",
    ),
  },
  standards: {
    title: t(
      "Engineering Standards",
      "Standar Engineering",
      "Engineering-Standards",
      "Normes d'ingénierie",
      "Estándares de ingeniería",
      "Standard di ingegneria",
    ),
    subtitle: t(
      "How I keep large-scale data work reliable, clean, and responsible.",
      "Cara saya menjaga pekerjaan data skala besar tetap andal, bersih, dan bertanggung jawab.",
      "So halte ich groß angelegte Datenarbeit zuverlässig, sauber und verantwortungsvoll.",
      "Comment je garde le travail de données à grande échelle fiable, propre et responsable.",
      "Cómo mantengo el trabajo de datos a gran escala confiable, limpio y responsable.",
      "Come mantengo il lavoro sui dati su larga scala affidabile, pulito e responsabile.",
    ),
  },
  featured: {
    eyebrow: t("Featured", "Unggulan", "Ausgewählt", "En vedette", "Destacado", "In evidenza"),
  },
  howIWork: {
    title: t(
      "How I Work",
      "Cara Saya Bekerja",
      "Wie ich arbeite",
      "Comment je travaille",
      "Cómo trabajo",
      "Come lavoro",
    ),
    subtitle: t(
      "Straightforward collaboration, built for results.",
      "Kolaborasi yang lugas, dirancang untuk hasil.",
      "Unkomplizierte Zusammenarbeit, ausgerichtet auf Ergebnisse.",
      "Une collaboration simple et directe, pensée pour les résultats.",
      "Colaboración directa, diseñada para obtener resultados.",
      "Collaborazione diretta, pensata per ottenere risultati.",
    ),
  },
  about: {
    title: t("About", "Tentang", "Über mich", "À propos", "Acerca de", "Chi sono"),
    body: t(
      "I'm Haikal Hilmi, a freelance data & software engineer. I build large-scale scraping systems and data pipelines, ship full-stack products for clients, and operate HPC infrastructure. Backend Engineer intern at ByteDance (100k+ RPS), 5.0★ on Upwork, and multiple international hackathon wins. I do my best work on long-term engagements where I can own systems end to end.",
      "Saya Haikal Hilmi, data & software engineer freelance. Saya membangun sistem scraping skala besar dan data pipeline, merilis produk full-stack untuk klien, serta mengoperasikan infrastruktur HPC. Backend Engineer intern di ByteDance (100k+ RPS), 5.0★ di Upwork, dan beberapa juara hackathon internasional. Saya bekerja paling optimal pada kerja sama jangka panjang di mana saya bisa memiliki sistem secara end-to-end.",
      "Ich bin Haikal Hilmi, freiberuflicher Data & Software Engineer. Ich baue groß angelegte Scraping-Systeme und Datenpipelines, liefere Full-Stack-Produkte für Kunden und betreibe HPC-Infrastruktur. Backend-Engineer-Praktikant bei ByteDance (100k+ RPS), 5,0★ auf Upwork und mehrere internationale Hackathon-Siege. Ich leiste meine beste Arbeit bei langfristigen Engagements, bei denen ich Systeme end-to-end verantworten kann.",
      "Je suis Haikal Hilmi, ingénieur data & logiciel freelance. Je conçois des systèmes de scraping à grande échelle et des pipelines de données, je livre des produits full-stack pour des clients et j'exploite des infrastructures HPC. Stagiaire Backend Engineer chez ByteDance (100k+ RPS), 5,0★ sur Upwork, et plusieurs victoires en hackathons internationaux. Je donne le meilleur de moi-même sur des missions de longue durée où je peux gérer des systèmes de bout en bout.",
      "Soy Haikal Hilmi, ingeniero de datos y software freelance. Construyo sistemas de scraping a gran escala y pipelines de datos, entrego productos full-stack para clientes y opero infraestructura HPC. Pasante de Backend Engineer en ByteDance (100k+ RPS), 5.0★ en Upwork, y varios premios en hackathones internacionales. Doy lo mejor de mí en colaboraciones a largo plazo donde puedo hacerme cargo de los sistemas de principio a fin.",
      "Sono Haikal Hilmi, data & software engineer freelance. Costruisco sistemi di scraping su larga scala e pipeline di dati, realizzo prodotti full-stack per i clienti e gestisco infrastrutture HPC. Stagista Backend Engineer presso ByteDance (100k+ RPS), 5.0★ su Upwork, e diverse vittorie in hackathon internazionali. Do il meglio di me in collaborazioni a lungo termine dove posso gestire i sistemi end-to-end.",
    ),
  },
  footer: {
    tagline: t(
      "Building the future with data and code.",
      "Membangun masa depan dengan data dan kode.",
      "Die Zukunft mit Daten und Code gestalten.",
      "Construire l'avenir avec la donnée et le code.",
      "Construyendo el futuro con datos y código.",
      "Costruire il futuro con dati e codice.",
    ),
  },
  languageSuggest: {
    message: t(
      "We've set the site to your browser language.",
      "Kami mengatur situs ini ke bahasa browser Anda.",
      "Wir haben die Seite auf Ihre Browsersprache eingestellt.",
      "Nous avons réglé le site sur la langue de votre navigateur.",
      "Hemos configurado el sitio en el idioma de tu navegador.",
      "Abbiamo impostato il sito nella lingua del tuo browser.",
    ),
    action: t(
      "Switch to English",
      "Ganti ke Bahasa Inggris",
      "Auf Englisch umstellen",
      "Passer en anglais",
      "Cambiar a inglés",
      "Passa all'inglese",
    ),
  },
} satisfies Record<string, Record<string, Localized>>;
