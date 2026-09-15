import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";

const HUSTLER_URL = "https://hustler.haikalhilmi.my.id";
const MAIN_URL = "https://haikalhilmi.my.id";

export const metadata: Metadata = {
  title: "Haikal Hilmi — Product Builder, Engineer & Entrepreneur",
  description:
    "A private, comprehensive portfolio spanning product, business, engineering, and entrepreneurship.",
  alternates: { canonical: HUSTLER_URL },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Haikal Hilmi — Product Builder, Engineer & Entrepreneur",
    description:
      "Selected products, ventures, engineering work, leadership, and the thinking behind them.",
    url: HUSTLER_URL,
    type: "profile",
    images: [
      {
        url: `${HUSTLER_URL}/hustler/portrait-cover.jpeg`,
        width: 1200,
        height: 900,
        alt: "Haikal Hilmi",
      },
    ],
  },
};

const selectedWork = [
  {
    number: "01",
    title: "Kembangkan",
    type: "Founder · Product & Delivery",
    image: "/hustler/projects/event-platform.png",
    description:
      "A software studio built around a simple promise: understand the client's real operational problem, then ship the smallest reliable product that solves it.",
    result: "2,800+ participants · zero downtime · QR check-in under 2 seconds",
    href: `${MAIN_URL}/projects/kembangkan`,
  },
  {
    number: "02",
    title: "Scanvas",
    type: "Founder · Product Experiment",
    image: "/hustler/scanvas.png",
    description:
      "An exploration of how a physical coloring activity can continue as a playful digital experience—tested through prototypes, pricing, and direct user feedback.",
    result: "From idea to testable physical–digital prototype",
  },
  {
    number: "03",
    title: "PwC Securing AI",
    type: "Product & Engineering",
    image: "/Porto/lensight_ori_pwc.png",
    description:
      "An AI financial assistant that matches users with relevant credit products based on their income and spending behavior.",
    result: "Built in 14 days · 1st Indonesia · 2nd Southeast Asia",
    href: `${MAIN_URL}/projects/pwc`,
  },
  {
    number: "04",
    title: "PIONIR UGM",
    type: "IT Team Lead",
    image: "/home/portfolio/ppsmb.png",
    description:
      "A public onboarding platform and internal task system that aligned a seven-person technology team with a 300+ person organizing committee.",
    result: "1.3M views in one month · 300+ committee members",
    href: `${MAIN_URL}/projects/ppsmb`,
  },
  {
    number: "05",
    title: "Robota",
    type: "Software & Data Product",
    image: "/home/portfolio/robotav2.png",
    description:
      "A B2B hotel intelligence platform that tracks rapidly changing OTA prices and turns competitor data into useful decisions.",
    result: "Legacy SPA rebuilt into a faster, SEO-ready platform",
    href: `${MAIN_URL}/projects/robota-new`,
  },
  {
    number: "06",
    title: "GMAT Satellite",
    type: "Engineering Project Manager",
    image: "/home/portfolio/gmat.png",
    description:
      "A real-time ground-control system combining telemetry, mapping, and live 3D visualization for an international satellite competition.",
    result: "3rd place · Teknofest Turkey · live telemetry in competition",
    href: `${MAIN_URL}/projects/gmat`,
  },
] as const;

const experience = [
  {
    period: "2026 — Present",
    role: "Founder / Product Experiment",
    company: "Scanvas",
    body: "Prototyping a physical-to-digital creative experience while testing user behavior, pricing, and product viability.",
  },
  {
    period: "2026 — Present",
    role: "Co-Founder / CTO",
    company: "Arthavera",
    body: "Building a personal-finance product around transaction tracking and useful insights; shaping priorities, prototypes, and the venture direction.",
  },
  {
    period: "2025 — 2026",
    role: "Founder",
    company: "Kembangkan Software Studio",
    body: "Led discovery, scoping, pricing, product decisions, and delivery for client software—including a reusable event platform.",
  },
  {
    period: "Feb — Jun 2025",
    role: "Backend Engineer Intern",
    company: "ByteDance",
    body: "Worked on backend services supporting Tokopedia–TikTok Shop integration and a Go microservice handling more than 100,000 requests per second.",
  },
  {
    period: "Jan — Mar 2024",
    role: "Product Development Intern",
    company: "Telkom Indonesia",
    body: "Translated operational and business needs into analysis and reporting using Python, Tableau, and Excel.",
  },
] as const;

const supportingWork = [
  {
    title: "Tilikan",
    label: "Analytics",
    image: "/home/portfolio/tilikan.png",
    result: "~50% reliability and ~70% cross-team efficiency gains",
    href: `${MAIN_URL}/projects/tilikan`,
  },
  {
    title: "Petadata",
    label: "Data Platform",
    image: "/home/portfolio/petadata.png",
    result: "Scattered public data unified for monitoring and analysis",
    href: `${MAIN_URL}/projects/petadata`,
  },
  {
    title: "FoodCycle",
    label: "Venture Prototype",
    image: "/hustler/foodcycle.png",
    result: "1st Place · Hackbiz 180DC UGM 2022",
    href: `${MAIN_URL}/projects/foodcycle`,
  },
] as const;

const principles = [
  [
    "Start with context",
    "Listen for the operational reality behind the brief.",
  ],
  [
    "Choose the real constraint",
    "Separate urgent requests from the problem that matters.",
  ],
  [
    "Make trade-offs visible",
    "Balance user value, business viability, and engineering cost.",
  ],
  [
    "Ship to learn",
    "Use working products and honest feedback to improve the next decision.",
  ],
] as const;

function Section({
  id,
  label,
  title,
  intro,
  children,
  dark = false,
}: {
  id?: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={
        dark
          ? "bg-[#18204a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
          : "px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      }
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="hustler-section-heading grid gap-6 border-t border-current/20 pt-6 lg:grid-cols-[0.7fr_2fr]">
          <p className="text-xs font-bold tracking-[0.18em] uppercase">
            {label}
          </p>
          <div className="max-w-4xl">
            <h2 className="text-4xl leading-[0.98] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {title}
            </h2>
            {intro ? (
              <p
                className={
                  dark
                    ? "mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
                    : "mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
                }
              >
                {intro}
              </p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export default async function HustlerPage() {
  const requestHeaders = await headers();
  const site = requestHeaders.get("x-portfolio-site");
  const host = requestHeaders.get("host") ?? "";

  if (site !== "hustler" && !host.startsWith("localhost")) {
    notFound();
  }

  return (
    <main className="hustler-page min-h-screen overflow-x-clip bg-[#f8f8f5] text-[#202a59]">
      <div className="hustler-progress" aria-hidden="true" />

      <section className="relative flex min-h-[94svh] flex-col px-5 pt-5 pb-12 sm:px-8 sm:pt-8 lg:px-12">
        <nav className="hustler-hero-nav relative z-20 flex items-center justify-between border-b border-[#202a59]/20 pb-5">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Haikal Hilmi
          </a>
          <div className="flex gap-5 text-xs font-semibold sm:gap-8 sm:text-sm">
            <a className="transition-opacity hover:opacity-55" href="#work">
              Work
            </a>
            <a
              className="transition-opacity hover:opacity-55"
              href="#experience"
            >
              Experience
            </a>
            <a className="transition-opacity hover:opacity-55" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div
          id="top"
          className="mx-auto grid w-full max-w-[1440px] flex-1 items-end gap-10 pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16"
        >
          <div className="relative z-10">
            <p className="hustler-hero-kicker mb-6 text-xs font-bold tracking-[0.18em] uppercase sm:text-sm">
              Product · Business · Engineering
            </p>
            <h1 className="hustler-hero-title max-w-5xl text-[clamp(3.7rem,9vw,6rem)] leading-[0.87] font-semibold tracking-[-0.04em]">
              I turn messy problems into products people can use.
            </h1>
            <p className="hustler-hero-copy mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
              I’m Haikal—an Information Engineering graduate, product builder,
              and entrepreneur moving between user conversations, business
              decisions, and reliable execution.
            </p>
          </div>

          <div className="hustler-hero-portrait relative ml-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-2xl bg-[#d9dae0]">
            <Image
              src="/hustler/portrait-cover.jpeg"
              alt="Portrait of Haikal Hilmi"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 34vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#11183d]/80 to-transparent p-6 pt-20 text-white">
              <p className="text-sm font-semibold">Jakarta, Indonesia</p>
              <p className="mt-1 text-xs text-white/70">
                Open to thoughtful collaborations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#202a59]/15 bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
          {[
            ["100K+", "requests / second"],
            ["1.3M", "platform views"],
            ["2,800+", "event participants"],
            ["SEA #2", "PwC Hack A Day"],
          ].map(([value, label], index) => (
            <div
              className="hustler-metric border-l border-[#202a59]/20 pl-4"
              style={{ "--metric-index": index } as CSSProperties}
              key={label}
            >
              <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        id="work"
        label="Selected work"
        title="Products built across different kinds of complexity."
        intro="The medium changes—client software, startup experiments, AI, data, or infrastructure. The recurring work is understanding what matters and organizing people and technology around it."
      >
        <div className="mt-16 space-y-8 sm:mt-24">
          {selectedWork.map((project, index) => (
            <article
              key={project.title}
              className="hustler-project grid overflow-hidden rounded-2xl border border-[#202a59]/15 bg-white lg:grid-cols-2"
            >
              <div
                className={`hustler-project-image relative min-h-[300px] overflow-hidden sm:min-h-[420px] ${
                  index % 2 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
                />
              </div>
              <div className="flex min-h-[360px] flex-col p-6 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-bold tracking-[0.16em] uppercase">
                    {project.type}
                  </p>
                  <p className="text-xs text-slate-400">{project.number}</p>
                </div>
                <h3 className="mt-14 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-xl leading-7 text-slate-600">
                  {project.description}
                </p>
                <div className="mt-auto pt-10">
                  <p className="border-t border-[#202a59]/15 pt-5 text-sm font-semibold">
                    {project.result}
                  </p>
                  {"href" in project ? (
                    <a
                      href={project.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
                    >
                      View full case study <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        label="Experience"
        title="Learning the whole path from idea to operation."
        dark
      >
        <div className="mt-16 border-t border-white/20 sm:mt-24">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="hustler-experience grid gap-5 border-b border-white/20 py-8 sm:py-10 lg:grid-cols-[0.7fr_1fr_1.5fr]"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-white/50 uppercase">
                {item.period}
              </p>
              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm text-white/55">{item.company}</p>
              </div>
              <p className="max-w-2xl leading-7 text-white/70">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        label="Product thinking"
        title="Engineering is one tool. The decision comes first."
        intro="My technical background helps me understand feasibility. Building ventures taught me to pair it with customer context, pricing, positioning, and the discipline to say no."
      >
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#202a59]/15 bg-[#202a59]/15 sm:mt-24 md:grid-cols-2">
          {principles.map(([title, body], index) => (
            <article
              key={title}
              className="hustler-principle min-h-60 bg-white p-7 sm:p-10"
            >
              <p className="text-xs text-slate-400">0{index + 1}</p>
              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em]">
                {title}
              </h3>
              <p className="mt-4 max-w-md leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="overflow-hidden bg-[#dfe7ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="hustler-quote">
            <p className="text-xs font-bold tracking-[0.18em] uppercase">
              Current direction
            </p>
            <blockquote className="mt-8 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Moving from implementation to problem understanding—and from
              feasibility to product value.
            </blockquote>
          </div>
          <div className="hustler-quote-aside border-t border-[#202a59]/25 pt-6">
            <p className="max-w-xl text-lg leading-8">
              I’m most useful where disciplines meet: clarifying a fuzzy
              problem, aligning people, shaping a product, and staying close
              enough to execution to make it real.
            </p>
          </div>
        </div>
      </section>

      <Section
        label="More work"
        title="A wider field of experiments and delivery."
      >
        <div className="mt-16 grid gap-6 sm:mt-24 lg:grid-cols-3">
          {supportingWork.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="hustler-support group overflow-hidden rounded-2xl border border-[#202a59]/15 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-[0.15em] uppercase">
                  {project.label}
                </p>
                <div className="mt-7 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {project.result}
                    </p>
                  </div>
                  <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <section
        id="contact"
        className="bg-[#202a59] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="hustler-contact-label text-xs font-bold tracking-[0.18em] uppercase">
            Let’s talk
          </p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
            <h2 className="hustler-contact-title max-w-5xl text-5xl leading-[0.9] font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Have a difficult problem worth building for?
            </h2>
            <div className="hustler-contact-links space-y-3 text-base">
              <a
                className="block border-b border-white/25 py-3 transition-opacity hover:opacity-60"
                href="mailto:haikal.hilmi02@gmail.com"
              >
                Email me <span className="float-right">↗</span>
              </a>
              <a
                className="block border-b border-white/25 py-3 transition-opacity hover:opacity-60"
                href="https://www.linkedin.com/in/haikalhilmi"
              >
                LinkedIn <span className="float-right">↗</span>
              </a>
              <a
                className="block border-b border-white/25 py-3 transition-opacity hover:opacity-60"
                href={MAIN_URL}
              >
                Full archive <span className="float-right">↗</span>
              </a>
            </div>
          </div>
          <div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-5 text-xs text-white/50">
            <p>Haikal Hilmi · Jakarta, Indonesia</p>
            <p>Product · Business · Engineering · Entrepreneurship</p>
          </div>
        </div>
      </section>
    </main>
  );
}
