"use client";

import type { ReactNode } from "react";
import { t as loc, type Localized } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

interface Step {
  title: Localized;
  desc: Localized;
  icon: ReactNode;
}

const icon = (d: string) => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
  </svg>
);

const STEPS: Step[] = [
  {
    title: loc(
      "Engagement",
      "Model Kerja",
      "Zusammenarbeit",
      "Collaboration",
      "Modalidad de trabajo",
      "Modalità di collaborazione",
    ),
    desc: loc(
      "Fixed-price or hourly—whatever fits the project. Open to long-term collaboration.",
      "Fixed-price atau hourly—mana yang cocok untuk proyeknya. Terbuka untuk kerja sama jangka panjang.",
      "Festpreis oder Stundensatz—je nachdem, was zum Projekt passt. Offen für langfristige Zusammenarbeit.",
      "Forfait ou taux horaire—selon ce qui convient le mieux au projet. Ouvert à une collaboration à long terme.",
      "Precio fijo o por horas, lo que mejor se adapte al proyecto. Abierto a colaboraciones a largo plazo.",
      "Prezzo fisso o a ore, in base a ciò che si adatta meglio al progetto. Aperto a collaborazioni a lungo termine.",
    ),
    icon: icon(
      "M9 5a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-9 0h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z",
    ),
  },
  {
    title: loc(
      "Communication",
      "Komunikasi",
      "Kommunikation",
      "Communication",
      "Comunicación",
      "Comunicazione",
    ),
    desc: loc(
      "Clear, responsive updates throughout the project—no surprises.",
      "Update yang jelas dan responsif sepanjang proyek—tanpa kejutan.",
      "Klare, zeitnahe Updates während des gesamten Projekts—keine Überraschungen.",
      "Des mises à jour claires et réactives tout au long du projet—sans surprises.",
      "Actualizaciones claras y receptivas durante todo el proyecto, sin sorpresas.",
      "Aggiornamenti chiari e tempestivi durante tutto il progetto, senza sorprese.",
    ),
    icon: icon(
      "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 21l1.8-4A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    ),
  },
  {
    title: loc(
      "Process",
      "Proses",
      "Prozess",
      "Processus",
      "Proceso",
      "Processo",
    ),
    desc: loc(
      "Understand the goal, propose the approach, then build and iterate to delivery.",
      "Pahami tujuan, ajukan pendekatan, lalu bangun dan iterasi hingga selesai.",
      "Ziel verstehen, Vorgehen vorschlagen, dann bauen und bis zur Auslieferung iterieren.",
      "Comprendre l'objectif, proposer une approche, puis construire et itérer jusqu'à la livraison.",
      "Entender el objetivo, proponer el enfoque y luego construir e iterar hasta la entrega.",
      "Comprendere l'obiettivo, proporre l'approccio, quindi sviluppare e iterare fino alla consegna.",
    ),
    icon: icon("M9 5l7 7-7 7M4 5l7 7-7 7"),
  },
  {
    title: loc(
      "Ownership",
      "Kepemilikan",
      "Verantwortung",
      "Prise en charge",
      "Responsabilidad total",
      "Titolarità del progetto",
    ),
    desc: loc(
      "I can own a system end-to-end—from tech selection to production.",
      "Saya bisa memiliki sistem end-to-end—dari pemilihan teknologi hingga produksi.",
      "Ich kann ein System end-to-end verantworten—von der Technologieauswahl bis zur Produktion.",
      "Je peux prendre en charge un système de bout en bout—du choix des technologies à la mise en production.",
      "Puedo hacerme cargo de un sistema de extremo a extremo, desde la selección de tecnología hasta producción.",
      "Posso gestire un sistema end-to-end, dalla scelta delle tecnologie fino alla produzione.",
    ),
    icon: icon(
      "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    ),
  },
];

export default function HowIWork() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {t(dict.howIWork.title)}
          </h2>
          <p className="text-gray-600">{t(dict.howIWork.subtitle)}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.title.en}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                {step.icon}
              </div>
              <h3 className="mb-1 text-base font-semibold text-gray-900">
                {t(step.title)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t(step.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
