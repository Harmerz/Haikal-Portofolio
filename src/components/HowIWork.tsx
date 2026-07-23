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
      "Clear Collaboration",
      "Kolaborasi Jelas",
      "Klare Zusammenarbeit",
      "Collaboration claire",
      "Colaboracion clara",
      "Collaborazione chiara",
    ),
    desc: loc(
      "Clear, responsive updates about progress, risks, and blockers, so there are no surprises.",
      "Update yang jelas dan responsif tentang progres, risiko, dan blocker, sehingga tidak ada kejutan.",
      "Klare, schnelle Updates zu Fortschritt, Risiken und Blockern, damit es keine Ueberraschungen gibt.",
      "Des mises a jour claires et reactives sur les progres, risques et blocages, pour eviter les surprises.",
      "Actualizaciones claras y rapidas sobre progreso, riesgos y bloqueos, para evitar sorpresas.",
      "Aggiornamenti chiari e rapidi su progressi, rischi e blocchi, senza sorprese.",
    ),
    icon: icon(
      "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 21l1.8-4A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    ),
  },
  {
    title: loc(
      "Practical Technical Decisions",
      "Keputusan Teknis Praktis",
      "Praktische technische Entscheidungen",
      "Decisions techniques pratiques",
      "Decisiones tecnicas practicas",
      "Decisioni tecniche pratiche",
    ),
    desc: loc(
      "I understand the business goal and technical constraints before recommending a reliable, scalable, and cost-effective approach.",
      "Saya memahami tujuan bisnis dan batasan teknis sebelum merekomendasikan pendekatan yang andal, scalable, dan hemat biaya.",
      "Ich verstehe das Geschaeftsziel und die technischen Grenzen, bevor ich einen zuverlaessigen, skalierbaren und kosteneffizienten Ansatz empfehle.",
      "Je comprends l'objectif business et les contraintes techniques avant de recommander une approche fiable, scalable et rentable.",
      "Entiendo el objetivo de negocio y las restricciones tecnicas antes de recomendar un enfoque fiable, escalable y rentable.",
      "Comprendo l'obiettivo di business e i vincoli tecnici prima di consigliare un approccio affidabile, scalabile e conveniente.",
    ),
    icon: icon("M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"),
  },
  {
    title: loc(
      "Clean Delivery",
      "Delivery Rapi",
      "Saubere Lieferung",
      "Livraison propre",
      "Entrega limpia",
      "Consegna pulita",
    ),
    desc: loc(
      "I write maintainable code with clear structure, error handling, documentation, and future development in mind.",
      "Saya menulis kode yang maintainable dengan struktur jelas, error handling, dokumentasi, dan perhatian pada pengembangan berikutnya.",
      "Ich schreibe wartbaren Code mit klarer Struktur, Fehlerbehandlung, Dokumentation und Blick auf kuenftige Entwicklung.",
      "J'ecris du code maintenable avec une structure claire, une gestion d'erreurs, de la documentation et les evolutions futures en tete.",
      "Escribo codigo mantenible con estructura clara, manejo de errores, documentacion y desarrollo futuro en mente.",
      "Scrivo codice mantenibile con struttura chiara, gestione degli errori, documentazione e sviluppo futuro in mente.",
    ),
    icon: icon("M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"),
  },
  {
    title: loc(
      "End-to-End Ownership",
      "Ownership End-to-End",
      "End-to-End-Verantwortung",
      "Prise en charge end-to-end",
      "Responsabilidad end-to-end",
      "Ownership end-to-end",
    ),
    desc: loc(
      "I can take a project from planning and architecture through development, deployment, monitoring, and production maintenance.",
      "Saya bisa membawa proyek dari planning dan arsitektur hingga development, deployment, monitoring, dan maintenance produksi.",
      "Ich kann ein Projekt von Planung und Architektur ueber Entwicklung, Deployment und Monitoring bis zur Produktionswartung fuehren.",
      "Je peux mener un projet de la planification et l'architecture au developpement, deploiement, monitoring et maintien en production.",
      "Puedo llevar un proyecto desde planificacion y arquitectura hasta desarrollo, despliegue, monitoreo y mantenimiento en produccion.",
      "Posso portare un progetto da pianificazione e architettura a sviluppo, deploy, monitoraggio e manutenzione in produzione.",
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
