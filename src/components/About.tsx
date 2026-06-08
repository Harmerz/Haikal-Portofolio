"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          {t(dict.about.title)}
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          {t(dict.about.body)}
        </p>
      </div>
    </section>
  );
}
