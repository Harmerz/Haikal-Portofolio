import { t, type Localized } from "@/i18n/config";

export interface Testimonial {
  id: string;
  quote: Localized;
  name: string;
  role: Localized;
  /** Client location, e.g. "Aurora, Canada" — shows international reach. */
  location?: string;
  /** Optional avatar image path under /public. */
  avatar?: string;
  /** Optional LinkedIn (or other) profile URL — lets clients verify the review. */
  linkedin?: string;
}

// Real Upwork client reviews (5.0★). Quotes kept in their original English to
// stay authentic — they read the same in both language modes.
export const testimonials: Testimonial[] = [
  {
    id: "widyawan",
    quote: t(
      "As commissioner of Semesta Data Digital and Global Data Inspirasi, I've seen first-hand how Haikal designs data infrastructure, runs large-scale pipelines and scraping with high reliability, and helped shape products like Robota. He was also my teaching assistant for a year—consistent, a fast learner, and highly dependable. He combines genuine technical depth with a strong sense of ownership.",
      "Sebagai komisaris di Semesta Data Digital dan Global Data Inspirasi, saya menyaksikan langsung bagaimana Haikal merancang infrastruktur data, mengelola pipeline dan scraping berskala besar dengan keandalan tinggi, hingga ikut membentuk produk seperti Robota. Sebelumnya ia juga menjadi asisten dosen saya selama setahun—konsisten, cepat belajar, dan sangat dapat diandalkan. Ia memadukan kedalaman teknis dengan rasa tanggung jawab yang menonjol.",
      "Als Kommissar von Semesta Data Digital und Global Data Inspirasi habe ich aus erster Hand miterlebt, wie Haikal Dateninfrastrukturen entwirft, groß angelegte Pipelines und Scraping mit hoher Zuverlässigkeit betreibt und dabei geholfen hat, Produkte wie Robota mitzugestalten. Er war außerdem ein Jahr lang mein Tutor—beständig, ein schneller Lerner und äußerst verlässlich. Er verbindet echte fachliche Tiefe mit einem ausgeprägten Verantwortungsbewusstsein.",
      "En tant que commissaire de Semesta Data Digital et Global Data Inspirasi, j'ai constaté de mes propres yeux comment Haikal conçoit des infrastructures de données, exploite des pipelines et du scraping à grande échelle avec une grande fiabilité, et a contribué à façonner des produits comme Robota. Il a également été mon assistant d'enseignement pendant un an—constant, apprenant vite et extrêmement fiable. Il allie une véritable profondeur technique à un fort sens des responsabilités.",
      "Como comisionado de Semesta Data Digital y Global Data Inspirasi, he visto de primera mano cómo Haikal diseña infraestructuras de datos, opera pipelines y scraping a gran escala con alta fiabilidad, y ayudó a dar forma a productos como Robota. También fue mi asistente de docencia durante un año—constante, de aprendizaje rápido y muy confiable. Combina una profundidad técnica genuina con un fuerte sentido de responsabilidad.",
      "In qualità di commissario di Semesta Data Digital e Global Data Inspirasi, ho visto in prima persona come Haikal progetti infrastrutture dati, gestisca pipeline e scraping su larga scala con alta affidabilità, e abbia contribuito a plasmare prodotti come Robota. È stato anche mio assistente didattico per un anno—costante, di apprendimento rapido e molto affidabile. Unisce una reale profondità tecnica a un forte senso di responsabilità.",
    ),
    name: "Widyawan, S.T., M.Sc., Ph.D.",
    role: t(
      "Commissioner, Semesta Data Digital & Global Data Inspirasi",
      "Komisaris, Semesta Data Digital & Global Data Inspirasi",
      "Kommissar, Semesta Data Digital & Global Data Inspirasi",
      "Commissaire, Semesta Data Digital & Global Data Inspirasi",
      "Comisionado, Semesta Data Digital & Global Data Inspirasi",
      "Commissario, Semesta Data Digital & Global Data Inspirasi",
    ),
    location: "Yogyakarta, ID",
    avatar: "/home/review/widyawan.jpg",
    linkedin: "https://www.linkedin.com/in/widyawan/",
  },
  {
    id: "alamsyah-pangestu",
    quote: t(
      "As Director of PT Aksarakan Bhumi Indonesia, I deeply appreciate his work—he not only built the company's website and digital infrastructure, but also drafted our IT security SOPs and actively took part in negotiations with strategic clients, showing a remarkable combination of technical skill, leadership, and business sense.",
      "Sebagai Direktur PT Aksarakan Bhumi Indonesia, saya sangat mengapresiasi kinerja beliau yang tidak hanya berhasil mengembangkan website dan infrastruktur digital perusahaan, tetapi juga menyusun SOP keamanan IT serta berperan aktif dalam negosiasi dengan klien-klien strategis, menunjukkan kombinasi kemampuan teknis, kepemimpinan, dan pemahaman bisnis yang luar biasa.",
      "Als Direktor von PT Aksarakan Bhumi Indonesia schätze ich seine Arbeit sehr—er hat nicht nur die Website und digitale Infrastruktur des Unternehmens aufgebaut, sondern auch unsere IT-Sicherheits-SOPs entworfen und aktiv an Verhandlungen mit strategischen Kunden teilgenommen, was eine bemerkenswerte Kombination aus technischem Können, Führungsstärke und Geschäftssinn zeigt.",
      "En tant que directeur de PT Aksarakan Bhumi Indonesia, j'apprécie profondément son travail—il n'a pas seulement construit le site web et l'infrastructure numérique de l'entreprise, mais a également rédigé nos procédures de sécurité informatique et pris une part active aux négociations avec des clients stratégiques, démontrant une remarquable combinaison de compétence technique, de leadership et de sens des affaires.",
      "Como director de PT Aksarakan Bhumi Indonesia, aprecio profundamente su trabajo—no solo construyó el sitio web y la infraestructura digital de la empresa, sino que también redactó nuestros procedimientos de seguridad informática y participó activamente en negociaciones con clientes estratégicos, mostrando una notable combinación de habilidad técnica, liderazgo y sentido de los negocios.",
      "In qualità di direttore di PT Aksarakan Bhumi Indonesia, apprezzo profondamente il suo lavoro—non solo ha costruito il sito web e l'infrastruttura digitale dell'azienda, ma ha anche redatto le nostre procedure di sicurezza informatica e partecipato attivamente alle trattative con clienti strategici, dimostrando una notevole combinazione di competenza tecnica, leadership e senso degli affari.",
    ),
    name: "Alamsyah Pangestu",
    role: t(
      "Director, PT Aksarakan Bhumi Indonesia",
      "Direktur, PT Aksarakan Bhumi Indonesia",
      "Direktor, PT Aksarakan Bhumi Indonesia",
      "Directeur, PT Aksarakan Bhumi Indonesia",
      "Director, PT Aksarakan Bhumi Indonesia",
      "Direttore, PT Aksarakan Bhumi Indonesia",
    ),
    location: "Yogyakarta, ID",
    avatar: "/home/review/alamsyah-pangestu.jpg",
    linkedin: "https://www.linkedin.com/in/alamsyah-pangestu/",
  },
  {
    id: "jeesun-kim",
    quote: t(
      "I had the pleasure of working with Haikal on a scraping project, and he exceeded my expectations in every aspect. Professional, responsive, and highly skilled, delivering high-quality work on time. I highly recommend Haikal—he's a fantastic contractor.",
      "I had the pleasure of working with Haikal on a scraping project, and he exceeded my expectations in every aspect. Professional, responsive, and highly skilled, delivering high-quality work on time. I highly recommend Haikal—he's a fantastic contractor.",
      "Ich hatte das Vergnügen, mit Haikal an einem Scraping-Projekt zu arbeiten, und er hat meine Erwartungen in jeder Hinsicht übertroffen. Professionell, reaktionsschnell und äußerst kompetent, lieferte er qualitativ hochwertige Arbeit pünktlich ab. Ich empfehle Haikal sehr—er ist ein fantastischer Auftragnehmer.",
      "J'ai eu le plaisir de travailler avec Haikal sur un projet de scraping, et il a dépassé mes attentes à tous points de vue. Professionnel, réactif et très compétent, il a livré un travail de haute qualité dans les délais. Je recommande vivement Haikal—c'est un contractant fantastique.",
      "Tuve el placer de trabajar con Haikal en un proyecto de scraping, y superó mis expectativas en todos los aspectos. Profesional, receptivo y muy capacitado, entregó trabajo de alta calidad a tiempo. Recomiendo encarecidamente a Haikal—es un contratista fantástico.",
      "Ho avuto il piacere di lavorare con Haikal su un progetto di scraping, e ha superato le mie aspettative sotto ogni aspetto. Professionale, reattivo e altamente competente, ha consegnato un lavoro di alta qualità nei tempi previsti. Consiglio vivamente Haikal—è un collaboratore fantastico.",
    ),
    name: "Jeesun Kim",
    role: t(
      "Upwork client · Twitter/X Scraper",
      "Klien Upwork · Twitter/X Scraper",
      "Upwork-Kunde · Twitter/X-Scraper",
      "Client Upwork · Scraper Twitter/X",
      "Cliente de Upwork · Scraper de Twitter/X",
      "Cliente Upwork · Scraper Twitter/X",
    ),
    location: "Aurora, Canada",
  },
  {
    id: "claire-bartolozzi",
    quote: t(
      "Haikal is very smart, creative and good at what he does. He is a great communicator and very efficient.",
      "Haikal is very smart, creative and good at what he does. He is a great communicator and very efficient.",
      "Haikal ist sehr klug, kreativ und gut in dem, was er tut. Er ist ein hervorragender Kommunikator und sehr effizient.",
      "Haikal est très intelligent, créatif et doué dans ce qu'il fait. C'est un excellent communicant et il est très efficace.",
      "Haikal es muy inteligente, creativo y bueno en lo que hace. Es un gran comunicador y muy eficiente.",
      "Haikal è molto intelligente, creativo e bravo in quello che fa. È un ottimo comunicatore e molto efficiente.",
    ),
    name: "Claire Bartolozzi",
    role: t(
      "Upwork client · Tweet Collector",
      "Klien Upwork · Tweet Collector",
      "Upwork-Kunde · Tweet Collector",
      "Client Upwork · Collecteur de tweets",
      "Cliente de Upwork · Recolector de tweets",
      "Cliente Upwork · Collettore di tweet",
    ),
    location: "South Yarra, Australia",
  },
  {
    id: "cristian-buda",
    quote: t(
      "Haikal was very quick to respond and professional in his work. He even suggested some improvements to the deliverables, which I found useful. I would definitely work with him again.",
      "Haikal was very quick to respond and professional in his work. He even suggested some improvements to the deliverables, which I found useful. I would definitely work with him again.",
      "Haikal antwortete sehr schnell und war professionell in seiner Arbeit. Er schlug sogar einige Verbesserungen an den Ergebnissen vor, die ich nützlich fand. Ich würde definitiv wieder mit ihm zusammenarbeiten.",
      "Haikal a répondu très rapidement et a fait preuve de professionnalisme dans son travail. Il a même suggéré des améliorations aux livrables, ce que j'ai trouvé utile. Je travaillerais certainement à nouveau avec lui.",
      "Haikal respondió muy rápido y fue profesional en su trabajo. Incluso sugirió algunas mejoras a los entregables, lo cual me pareció útil. Definitivamente volvería a trabajar con él.",
      "Haikal ha risposto molto rapidamente ed è stato professionale nel suo lavoro. Ha persino suggerito alcuni miglioramenti ai deliverable, cosa che ho trovato utile. Lavorerei sicuramente di nuovo con lui.",
    ),
    name: "Cristian Buda",
    role: t(
      "Upwork client · PDF→JSON Extraction",
      "Klien Upwork · Ekstraksi PDF→JSON",
      "Upwork-Kunde · PDF→JSON-Extraktion",
      "Client Upwork · Extraction PDF→JSON",
      "Cliente de Upwork · Extracción de PDF→JSON",
      "Cliente Upwork · Estrazione PDF→JSON",
    ),
    location: "Cluj-Napoca, Romania",
  },
];
