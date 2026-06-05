"use client";

import Link from "next/link";
import Image from "next/image";
import { isVideo, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

interface ProjectCardProps extends Project {
  /** Show the image/gradient cover on top. Off for data-engineering cards. */
  showCover?: boolean;
}

const ProjectCard = ({
  id,
  title,
  description,
  result,
  award,
  scale,
  image,
  alt,
  showCover = true,
}: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <Link
      href={`/projects/${id}`}
      scroll={false}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      {showCover && (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4">
              <span className="text-center text-lg font-semibold text-white">
                {title}
              </span>
            </div>
          )}
          {award && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-xs font-bold text-amber-950 shadow-sm">
              <span aria-hidden="true">🏆</span>
              {t(award)}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        {scale && (
          <p className="text-2xl font-bold tracking-tight text-gray-900">
            {t(scale)}
          </p>
        )}
        {!showCover && award && (
          <span className="inline-flex w-fit items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
            <span aria-hidden="true">🏆</span>
            {t(award)}
          </span>
        )}

        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="text-sm text-gray-600">{t(description)}</p>

        {result && (
          <p className="flex items-start gap-1.5 text-sm font-medium text-green-700">
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
            {t(result)}
          </p>
        )}

        <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-semibold text-gray-500 transition-colors group-hover:text-gray-900">
          {t(dict.card.details)}
          <svg
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
};

export default ProjectCard;
