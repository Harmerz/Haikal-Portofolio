"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  if (testimonials.length === 0) return null;

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const gap = 20; // matches gap-5
    const amount = card ? card.offsetWidth + gap : track.clientWidth;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              {t(dict.testimonials.title)}
            </h2>
            <p className="text-gray-600">{t(dict.testimonials.subtitle)}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scrollByCard(dir)}
                aria-label={dir === -1 ? "Previous" : "Next"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gray-900 hover:text-gray-900"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={dir === -1 ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto pb-2"
        >
          {testimonials.map((item) => (
            <figure
              key={item.id}
              data-card
              className="flex h-auto w-[85%] shrink-0 snap-start flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
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
              <figcaption className="flex items-center gap-3 border-t border-gray-200 pt-4">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                    {item.name}
                    {item.linkedin && (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.name} on LinkedIn`}
                        className="text-gray-400 transition-colors hover:text-[#0a66c2]"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V9.99H6V17h2.34zM7.17 8.96a1.36 1.36 0 100-2.71 1.36 1.36 0 000 2.71zM18 17v-3.84c0-2.05-1.1-3-2.56-3-1.18 0-1.71.65-2 1.1V9.99H11.1c.03.66 0 7.01 0 7.01h2.34v-3.91c0-.21.02-.42.08-.57.16-.42.55-.86 1.19-.86.84 0 1.18.64 1.18 1.57V17H18z" />
                        </svg>
                      </a>
                    )}
                  </p>
                  <p className="truncate text-xs text-gray-500">{t(item.role)}</p>
                  {item.location && (
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-400">
                      <svg
                        className="h-3 w-3 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.location}
                    </p>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
