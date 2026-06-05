"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { testimonials } from "@/data/testimonials";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { t } = useLanguage();

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {t(dict.testimonials.title)}
          </h2>
          <p className="text-gray-600">{t(dict.testimonials.subtitle)}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} delay={i * 80} className="h-full">
              <figure
                className="flex h-full flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
              <svg
                className="h-7 w-7 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 017.17 9.5V6zm9 0A5.17 5.17 0 0011 11.17V18h6.83v-6.83H14.5A1.67 1.67 0 0116.17 9.5V6z" />
              </svg>
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-700">
                “{t(item.quote)}”
              </blockquote>
              <figcaption className="border-t border-gray-200 pt-3">
                <p className="text-sm font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">{t(item.role)}</p>
              </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
