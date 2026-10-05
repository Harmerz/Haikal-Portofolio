"use client";

import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { INTRO_VIDEO } from "@/config/site";

const IntroVideo = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            title={{
              en: "45-Second Intro",
              id: "Perkenalan 45 Detik",
              de: "45-Sekunden-Vorstellung",
              fr: "Présentation en 45 secondes",
              es: "Presentación en 45 segundos",
              it: "Presentazione in 45 secondi",
            }}
            subtitle={{
              en: "What I build, the pipelines behind it, and how I can help your team",
              id: "Apa yang saya bangun, pipeline di baliknya, dan bagaimana saya bisa membantu tim Anda",
              de: "Was ich baue, die Pipelines dahinter und wie ich Ihrem Team helfen kann",
              fr: "Ce que je construis, les pipelines derrière, et comment je peux aider votre équipe",
              es: "Lo que construyo, los pipelines detrás y cómo puedo ayudar a tu equipo",
              it: "Cosa costruisco, le pipeline dietro e come posso aiutare il tuo team",
            }}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-sm">
            <video
              className="aspect-video w-full"
              src={INTRO_VIDEO.src}
              poster={INTRO_VIDEO.poster}
              controls
              playsInline
              preload="none"
              aria-label={t({
                en: "Haikal Hilmi introduces his data engineering work",
                id: "Haikal Hilmi memperkenalkan pekerjaan data engineering-nya",
                de: "Haikal Hilmi stellt seine Data-Engineering-Arbeit vor",
                fr: "Haikal Hilmi présente son travail en data engineering",
                es: "Haikal Hilmi presenta su trabajo de data engineering",
                it: "Haikal Hilmi presenta il suo lavoro di data engineering",
              })}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default IntroVideo;
