"use client";

import type { Localized } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";

// Compact, static credibility strip — no filter. Tech names aren't translated.

const defaultTech: string[] = [
  // Frontend
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Vue.js",
  // Backend
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
  "Java",
  "REST API",
  // Database
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Prisma",
  "Supabase",
  // DevOps & Tools
  "Docker",
  "AWS",
  "Vercel",
  "GitHub Actions",
  "Git",
  "Linux",
];

const DEFAULT_TITLE: Localized = { en: "Tech Stack", id: "Tech Stack" };
const DEFAULT_DESC: Localized = {
  en: "Tools I reach for to ship scalable, production-ready applications.",
  id: "Alat yang saya gunakan untuk membangun aplikasi yang scalable dan siap produksi.",
};

interface TechStackProps {
  title?: Localized;
  description?: Localized;
  items?: string[];
}

export default function TechStack({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  items = defaultTech,
}: TechStackProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">{t(title)}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">{t(description)}</p>

        <ul className="flex flex-wrap justify-center gap-2">
          {items.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-700"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
