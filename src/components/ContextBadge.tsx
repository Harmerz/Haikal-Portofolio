"use client";

import type { ProjectContext } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

const STYLES: Record<ProjectContext, string> = {
  client: "border-blue-200 bg-blue-50 text-blue-700",
  owned: "border-indigo-200 bg-indigo-50 text-indigo-700",
  competition: "border-amber-200 bg-amber-50 text-amber-700",
};

export default function ContextBadge({ context }: { context: ProjectContext }) {
  const { t } = useLanguage();
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${STYLES[context]}`}
    >
      {t(dict.context[context])}
    </span>
  );
}
