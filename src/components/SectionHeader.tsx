"use client";

import Link from "next/link";
import type { Localized } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";

interface SectionHeaderProps {
  title: Localized;
  subtitle: Localized;
  href?: string;
  linkLabel?: Localized;
}

const DEFAULT_LABEL: Localized = {
  en: "Explore More Projects",
  id: "Lihat Proyek Lainnya",
  de: "Weitere Projekte entdecken",
  fr: "Découvrir plus de projets",
  es: "Explorar más proyectos",
  it: "Esplora altri progetti",
};

const SectionHeader = ({
  title,
  subtitle,
  href,
  linkLabel = DEFAULT_LABEL,
}: SectionHeaderProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex w-full flex-row justify-between">
      <div className="text-start">
        <h2 className="text-3xl font-bold text-gray-900">{t(title)}</h2>
        <p className="max-w-2xl text-lg text-gray-600">{t(subtitle)}</p>
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-3 font-medium text-gray-700 transition-all hover:text-gray-900"
          aria-label={`${t(linkLabel)} — ${t(title)}`}
        >
          {t(linkLabel)}
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
