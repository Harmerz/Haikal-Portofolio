"use client";

import Link from "next/link";
import Image from "next/image";
import { getProjectMeta, isVideo, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import ContextBadge from "./ContextBadge";

export default function FeaturedHero({ project }: { project: Project }) {
  const { t } = useLanguage();
  const meta = getProjectMeta(project.id);
  const { image, alt, title } = project;

  return (
    <Link
      href={`/projects/${project.id}`}
      scroll={false}
      className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-2"
    >
      {/* Media */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 md:aspect-auto md:min-h-[340px]">
        {image && isVideo(image) ? (
          <video
            src={image}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={alt || title}
          />
        ) : image ? (
          <Image
            src={image}
            alt={alt || title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-6">
            <span className="text-center text-2xl font-bold text-white">
              {title}
            </span>
          </div>
        )}
        {project.award && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950 shadow-sm">
            <span aria-hidden="true">🏆</span>
            {t(project.award)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-4 p-7 md:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
            {t(dict.featured.eyebrow)}
          </span>
          {meta.context && <ContextBadge context={meta.context} />}
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h3>
          {(meta.role || meta.status) && (
            <p className="mt-1 text-sm text-gray-500">
              {[meta.role && t(meta.role), meta.status && t(meta.status)]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
        </div>

        <p className="text-base leading-relaxed text-gray-600">
          {t(project.description)}
        </p>

        {project.result && (
          <p className="flex items-start gap-2 text-sm font-medium text-green-700">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0"
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
            {t(project.result)}
          </p>
        )}

        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors group-hover:text-gray-600">
          {t(dict.card.details)}
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
        </span>
      </div>
    </Link>
  );
}
