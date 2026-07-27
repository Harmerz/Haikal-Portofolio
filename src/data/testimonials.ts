import { t, type Localized } from "@/i18n/config";

export interface Testimonial {
  id: string;
  quote: Localized;
  name: string;
  role: Localized;
  /** Client location, e.g. "Aurora, Canada" - shows international reach. */
  location?: string;
  /** Optional avatar image path under /public. */
  avatar?: string;
  /** Optional LinkedIn (or other) profile URL - lets clients verify the review. */
  linkedin?: string;
}

const same = (value: string) => t(value, value, value, value, value, value);

// Real client reviews. Upwork quotes are kept in their original English.
export const testimonials: Testimonial[] = [
  {
    id: "robert-ligthart",
    quote: same(
      "Haikal supported me for nearly two years on multiple digital products. He quickly understood the business goals, proposed practical solutions, and worked independently across software development, integrations, databases, and data processing. I would gladly work with him again.",
    ),
    name: "Robert Ligthart",
    role: same("Founder of OmniSocials - Long-term SaaS Client"),
    location: "Amsterdam, Netherlands",
    avatar: "/home/review/robert-ligthart.jpg",
    linkedin: "https://www.linkedin.com/in/robert-ligthart/",
  },
  {
    id: "widyawan",
    quote: t(
      "As commissioner of Semesta Data Digital and Global Data Inspirasi, I've seen first-hand how Haikal designs data infrastructure, runs large-scale pipelines and scraping with high reliability, and helped shape products like Robota. He was also my teaching assistant for a year - consistent, a fast learner, and highly dependable. He combines genuine technical depth with a strong sense of ownership.",
      "Sebagai komisaris di Semesta Data Digital dan Global Data Inspirasi, saya menyaksikan langsung bagaimana Haikal merancang infrastruktur data, mengelola pipeline dan scraping berskala besar dengan keandalan tinggi, hingga ikut membentuk produk seperti Robota. Sebelumnya ia juga menjadi asisten dosen saya selama setahun - konsisten, cepat belajar, dan sangat dapat diandalkan. Ia memadukan kedalaman teknis dengan rasa tanggung jawab yang menonjol.",
      "As commissioner of Semesta Data Digital and Global Data Inspirasi, I've seen first-hand how Haikal designs data infrastructure, runs large-scale pipelines and scraping with high reliability, and helped shape products like Robota. He was also my teaching assistant for a year - consistent, a fast learner, and highly dependable. He combines genuine technical depth with a strong sense of ownership.",
      "As commissioner of Semesta Data Digital and Global Data Inspirasi, I've seen first-hand how Haikal designs data infrastructure, runs large-scale pipelines and scraping with high reliability, and helped shape products like Robota. He was also my teaching assistant for a year - consistent, a fast learner, and highly dependable. He combines genuine technical depth with a strong sense of ownership.",
      "As commissioner of Semesta Data Digital and Global Data Inspirasi, I've seen first-hand how Haikal designs data infrastructure, runs large-scale pipelines and scraping with high reliability, and helped shape products like Robota. He was also my teaching assistant for a year - consistent, a fast learner, and highly dependable. He combines genuine technical depth with a strong sense of ownership.",
      "As commissioner of Semesta Data Digital and Global Data Inspirasi, I've seen first-hand how Haikal designs data infrastructure, runs large-scale pipelines and scraping with high reliability, and helped shape products like Robota. He was also my teaching assistant for a year - consistent, a fast learner, and highly dependable. He combines genuine technical depth with a strong sense of ownership.",
    ),
    name: "Widyawan, S.T., M.Sc., Ph.D.",
    role: t(
      "Commissioner, Semesta Data Digital & Global Data Inspirasi",
      "Komisaris, Semesta Data Digital & Global Data Inspirasi",
      "Commissioner, Semesta Data Digital & Global Data Inspirasi",
      "Commissioner, Semesta Data Digital & Global Data Inspirasi",
      "Commissioner, Semesta Data Digital & Global Data Inspirasi",
      "Commissioner, Semesta Data Digital & Global Data Inspirasi",
    ),
    location: "Yogyakarta, ID",
    avatar: "/home/review/widyawan.jpg",
    linkedin: "https://www.linkedin.com/in/widyawan/",
  },
  {
    id: "alamsyah-pangestu",
    quote: t(
      "As Director of PT Aksarakan Bhumi Indonesia, I deeply appreciate his work - he not only built the company's website and digital infrastructure, but also drafted our IT security SOPs and actively took part in negotiations with strategic clients, showing a remarkable combination of technical skill, leadership, and business sense.",
      "Sebagai Direktur PT Aksarakan Bhumi Indonesia, saya sangat mengapresiasi kinerja beliau yang tidak hanya berhasil mengembangkan website dan infrastruktur digital perusahaan, tetapi juga menyusun SOP keamanan IT serta berperan aktif dalam negosiasi dengan klien-klien strategis, menunjukkan kombinasi kemampuan teknis, kepemimpinan, dan pemahaman bisnis yang luar biasa.",
      "As Director of PT Aksarakan Bhumi Indonesia, I deeply appreciate his work - he not only built the company's website and digital infrastructure, but also drafted our IT security SOPs and actively took part in negotiations with strategic clients, showing a remarkable combination of technical skill, leadership, and business sense.",
      "As Director of PT Aksarakan Bhumi Indonesia, I deeply appreciate his work - he not only built the company's website and digital infrastructure, but also drafted our IT security SOPs and actively took part in negotiations with strategic clients, showing a remarkable combination of technical skill, leadership, and business sense.",
      "As Director of PT Aksarakan Bhumi Indonesia, I deeply appreciate his work - he not only built the company's website and digital infrastructure, but also drafted our IT security SOPs and actively took part in negotiations with strategic clients, showing a remarkable combination of technical skill, leadership, and business sense.",
      "As Director of PT Aksarakan Bhumi Indonesia, I deeply appreciate his work - he not only built the company's website and digital infrastructure, but also drafted our IT security SOPs and actively took part in negotiations with strategic clients, showing a remarkable combination of technical skill, leadership, and business sense.",
    ),
    name: "Alamsyah Pangestu",
    role: t(
      "Director, PT Aksarakan Bhumi Indonesia",
      "Direktur, PT Aksarakan Bhumi Indonesia",
      "Director, PT Aksarakan Bhumi Indonesia",
      "Director, PT Aksarakan Bhumi Indonesia",
      "Director, PT Aksarakan Bhumi Indonesia",
      "Director, PT Aksarakan Bhumi Indonesia",
    ),
    location: "Yogyakarta, ID",
    avatar: "/home/review/alamsyah-pangestu.jpg",
    linkedin: "https://www.linkedin.com/in/alamsyah-pangestu/",
  },
  {
    id: "jeesun-kim",
    quote: same(
      "I had the pleasure of working with Haikal on a scraping project, and he exceeded my expectations in every aspect. Professional, responsive, and highly skilled, delivering high-quality work on time. I highly recommend Haikal - he's a fantastic contractor.",
    ),
    name: "Jeesun Kim",
    role: same("Upwork client - Twitter/X Scraper"),
    location: "Aurora, Canada",
  },
  {
    id: "sam-white",
    quote: same(
      "Excellent service, quick responsiveness, and great technical skills. Haikal developed an effective and high-performing URL scraper, offered a 3-month warranty, and I would highly recommend him to others.",
    ),
    name: "Sam White",
    role: same("Upwork client - URL Scraper - 5.0 review"),
    location: "United States",
  },
  {
    id: "claire-bartolozzi",
    quote: same(
      "Haikal is very smart, creative and good at what he does. He is a great communicator and very efficient.",
    ),
    name: "Claire Bartolozzi",
    role: same("Upwork client - Tweet Collector"),
    location: "South Yarra, Australia",
  },
  {
    id: "cristian-buda",
    quote: same(
      "Haikal was very quick to respond and professional in his work. He even suggested some improvements to the deliverables, which I found useful. I would definitely work with him again.",
    ),
    name: "Cristian Buda",
    role: same("Upwork client - PDF to JSON Extraction"),
    location: "Cluj-Napoca, Romania",
  },
];