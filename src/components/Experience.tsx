"use client";

import { getExperience } from "@/data/experience";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import Reveal from "./Reveal";

export default function Experience({ area }: { area?: "se" | "de" }) {
  const { t } = useLanguage();
  const items = getExperience(area);

  if (items.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {t(dict.experience.title)}
          </h2>
          <p className="text-gray-600">{t(dict.experience.subtitle)}</p>
        </div>

        <ol className="relative ml-3 border-l border-gray-200">
          {items.map((item, i) => (
            <li key={item.id} className="mb-8 ml-6 last:mb-0">
              <Reveal delay={i * 60}>
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-900" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.company}
                  </h3>
                  <span className="text-xs font-medium text-gray-600">
                    {t(item.period)}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-gray-800">
                  {t(item.headline)}
                </p>
                <p className="text-xs text-gray-600">
                  {t(item.role)} · {item.location}
                </p>
                {item.note && (
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {t(item.note)}
                  </p>
                )}
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {item.tech.map((techName) => (
                    <li
                      key={techName}
                      className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                    >
                      {techName}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
