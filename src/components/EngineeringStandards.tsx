"use client";

import { t as loc, type Localized } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

// Practices Haikal actually follows (confirmed) — safe to claim.
const STANDARDS: Localized[] = [
  loc("Respect ToS & robots.txt", "Hormati ToS & robots.txt"),
  loc("Rate-limiting + rotating proxies", "Rate-limiting + rotating proxy"),
  loc("Schema validation & dedup", "Validasi schema & dedup"),
  loc("Retry & dead-letter queues", "Retry & dead-letter queue"),
  loc("PII anonymization", "Anonimisasi PII"),
  loc("Data-freshness monitoring", "Monitoring data freshness"),
];

export default function EngineeringStandards() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            {t(dict.standards.title)}
          </h2>
          <p className="text-gray-600">{t(dict.standards.subtitle)}</p>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STANDARDS.map((item) => (
            <li
              key={item.en}
              className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700"
            >
              <svg
                className="h-4 w-4 shrink-0 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {t(item)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
