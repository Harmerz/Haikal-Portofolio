"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { hpcStats } from "@/data/projects";
import type { Localized } from "@/i18n/config";

const TITLE: Localized = {
  en: "Infrastructure I've Operated",
  id: "Infrastruktur yang Saya Kelola",
};
const SUBTITLE: Localized = {
  en: "High-performance computing clusters for large-scale data processing.",
  id: "Cluster komputasi performa tinggi untuk pemrosesan data berskala besar.",
};

export default function HpcStats() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-900 py-14 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">{t(TITLE)}</h2>
          <p className="text-gray-400">{t(SUBTITLE)}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {hpcStats.map((stat) => (
            <div key={stat.label.en} className="text-center">
              <p className="text-3xl font-bold tracking-tight md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-200">
                {t(stat.label)}
              </p>
              <p className="text-xs text-gray-500">{t(stat.detail)}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          2× AMD EPYC 7502P (64-core) · 2× AMD EPYC 7252 (32-core) · 4× 16-core ·
          Ubuntu 22.04 &amp; CentOS
        </p>
      </div>
    </section>
  );
}
