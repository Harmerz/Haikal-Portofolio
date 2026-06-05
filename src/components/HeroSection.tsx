"use client";

import Image from "next/image";
import type { Localized } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { CTA_URL } from "@/config/site";

const companies = [
  { name: "ByteDance", logo: "/home/company/bytedance.png" },
  // { name: "Create Carousels", logo: "/home/company/createcarousels.png" },
  { name: "DataIns", logo: "/home/company/datains.png" },
  { name: "Gadjah Mada Aerospace", logo: "/home/company/gmat.png" },
  // { name: "Kesatria", logo: "/home/company/kesatria.png" },
  // { name: "LinkyInBio", logo: "/home/company/linkyinbio.png" },
  { name: "PetaData", logo: "/home/company/petadata.png" },
  { name: "PPSMB", logo: "/home/company/ppsmb.png" },
  { name: "Robota", logo: "/home/company/robota.png" },
  {
    name: "Semesta Data Digital",
    logo: "/home/company/semesta-data-digital.jfif",
  },
  { name: "Telkom Indonesia", logo: "/home/company/telkom.png" },
  { name: "Tilikan", logo: "/home/company/tilikan.png" },
  { name: "Tokopedia", logo: "/home/company/tokopedia.webp" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function HeroSection({
  title,
  description,
  eyebrow,
  supportingLine,
  ctaText,
  ctaHref = CTA_URL,
}: {
  title: Localized;
  description: Localized;
  eyebrow?: Localized;
  supportingLine?: Localized;
  ctaText?: Localized;
  ctaHref?: string;
}) {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 overflow-hidden bg-white px-4 py-20">
      <div className="pointer-events-none absolute -top-20 -right-20 z-20 hidden rotate-45 overflow-hidden opacity-20 select-none md:block">
        <Image
          src="/home/honeycomp.jpg"
          alt=""
          aria-hidden="true"
          width={600}
          height={600}
          className="object-cover select-none"
          draggable={false}
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 -left-20 z-20 hidden -rotate-90 opacity-20 select-none md:block">
        <Image
          src="/home/honeycomp.jpg"
          alt=""
          aria-hidden="true"
          width={600}
          height={600}
          className="object-cover select-none"
          draggable={false}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        {/* Photo Profil */}
        <div className="animate-fade-up mb-6 h-[100px] w-[100px] overflow-hidden rounded-full shadow-lg md:h-[120px] md:w-[120px]">
          <Image
            width={140}
            height={140}
            src="/haikal hilmi.JPG"
            alt="Foto profil Haikal Hilmi"
            className="h-full w-full object-cover grayscale filter"
            draggable={false}
            priority
          />
        </div>

        {/* Nama / Eyebrow */}
        {eyebrow && (
          <p
            className="animate-fade-up mb-3 text-[18px] font-bold text-gray-900 md:text-[20px]"
            style={{ animationDelay: "100ms" }}
          >
            {t(eyebrow)}
          </p>
        )}

        {/* Headline */}
        <h1
          className="animate-fade-up mb-6 max-w-[800px] text-[32px] leading-[110%] font-bold text-gray-900 md:text-[56px] md:leading-[120%]"
          style={{ animationDelay: "180ms" }}
        >
          {t(title)}
        </h1>

        {/* Sub-headline */}
        <div
          className="animate-fade-up mb-8 max-w-[600px] text-[16px] leading-[160%] font-normal text-gray-600 md:text-[20px]"
          style={{ animationDelay: "260ms" }}
        >
          {t(description)}
        </div>

        {/* Supporting Line */}
        {supportingLine && (
          <p
            className="animate-fade-up mb-8 text-[14px] font-medium tracking-wide text-gray-500 uppercase md:text-[16px]"
            style={{ animationDelay: "320ms" }}
          >
            {t(supportingLine)}
          </p>
        )}

        {/* Status & CTA */}
        <div
          className="animate-fade-up flex flex-col items-center gap-4"
          style={{ animationDelay: "380ms" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1 text-[13px] font-medium text-green-700 md:text-[14px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            {t(dict.hero.available)}
          </div>

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center rounded-full bg-black px-8 py-3 text-[16px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:scale-95"
          >
            {ctaText ? t(ctaText) : "Discuss Your Project"}
            <svg
              className="h-4 w-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Company Logos */}
        <div className="animate-fade-up mt-16" style={{ animationDelay: "480ms" }}>
          <div className="flex items-center justify-center -space-x-2 sm:-space-x-3">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group relative flex h-10 cursor-default items-center justify-center overflow-hidden rounded-full border-2 border-gray-200 bg-white transition-all duration-600 hover:z-10 hover:w-auto hover:gap-2 hover:px-3 sm:h-10"
              >
                <Image
                  draggable={false}
                  alt={`${company.name} logo`}
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  className="h-8 w-8 object-contain transition-all duration-600 group-hover:h-7 group-hover:w-7"
                  src={company.logo}
                />
                <span className="hidden text-sm font-semibold whitespace-nowrap text-gray-500 transition-all delay-300 duration-400 ease-in-out group-hover:inline-block">
                  {company.name}
                </span>
              </div>
            ))}
            <div className="group relative flex h-10 w-10 cursor-default items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100 transition-all hover:z-10 sm:h-10 sm:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-gray-400 sm:h-5 sm:w-5"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {/* Tooltip */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {t(dict.hero.companyNext)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
