"use client";

import Image from "next/image";
import {
  getPipeline,
  getProjectImages,
  isVideo,
  type Project,
} from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import PipelineDiagram from "./PipelineDiagram";

export default function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage();
  const images = getProjectImages(project);
  const pipeline = getPipeline(project.id);

  return (
    <article className="flex flex-col">
      {/* Gallery — supports images and videos (.webm/.mp4) */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2">
          {images.map((src, index) => {
            const span = images.length === 1 ? "sm:col-span-2" : "";
            return isVideo(src) ? (
              <video
                key={src}
                src={src}
                className={`aspect-video w-full rounded-lg border border-gray-100 object-cover ${span}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${project.alt || project.title} — ${index + 1}`}
              />
            ) : (
              <Image
                key={src}
                src={src}
                alt={`${project.alt || project.title} — ${index + 1}`}
                width={1200}
                height={750}
                className={`h-auto w-full rounded-lg border border-gray-100 object-cover ${span}`}
              />
            );
          })}
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.award && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
              <span aria-hidden="true">🏆</span>
              {t(project.award)}
            </span>
          )}
          {project.scale && (
            <span className="rounded-full bg-gray-900 px-2.5 py-1 text-xs font-bold text-white">
              {t(project.scale)}
            </span>
          )}
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {project.title}
        </h1>

        <p className="text-base text-gray-600">{t(project.description)}</p>

        {project.result && (
          <p className="flex items-start gap-2 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-800">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0"
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

        {pipeline.length > 0 && (
          <div>
            <h2 className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              {t(dict.card.architecture)}
            </h2>
            <PipelineDiagram stages={pipeline} />
          </div>
        )}

        {(project.problem || project.solution) && (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.problem && (
              <div>
                <h2 className="mb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  {t(dict.card.problem)}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t(project.problem)}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="mb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  {t(dict.card.solution)}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t(project.solution)}
                </p>
              </div>
            )}
          </div>
        )}

        <div>
          <h2 className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            {t(dict.card.stack)}
          </h2>
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((techName) => (
              <li
                key={techName}
                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
              >
                {techName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
