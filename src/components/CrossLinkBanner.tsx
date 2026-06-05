"use client";

import Link from "next/link";
import type { Localized } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";

interface CrossLinkBannerProps {
  title: Localized;
  description: Localized;
  href: string;
  ctaLabel: Localized;
}

const CrossLinkBanner = ({
  title,
  description,
  href,
  ctaLabel,
}: CrossLinkBannerProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">{t(title)}</h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-600">{t(description)}</p>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white"
        >
          {t(ctaLabel)}
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
      </div>
    </section>
  );
};

export default CrossLinkBanner;
