import { LINKEDIN_URL, UPWORK_URL } from "@/config/site";
import { experience } from "@/data/experience";
import {
  dataProjects,
  getPipeline,
  getProjectMeta,
  hpcStats,
  softwareProjects,
  type Project,
} from "@/data/projects";
import { testimonials } from "@/data/testimonials";

const SITE_URL = "https://haikalhilmi.my.id";

export type PortfolioScope = "general" | "se" | "de";

const scopeConfig = {
  general: {
    title: "Haikal Hilmi - Data and Software Engineer Portfolio",
    heading: "Haikal Hilmi",
    canonical: SITE_URL,
    filename: "haikal-hilmi-portfolio",
    summary:
      "Data and Software Engineer specializing in resilient data pipelines, large-scale scraping, cloud systems, HPC infrastructure, and full-stack products. Backend Engineer intern at ByteDance working on systems handling 100,000+ requests per second, a 5.0-star Upwork freelancer, and a multiple international hackathon winner.",
    capabilities: [
      "Data engineering: scraping, ingestion, ETL, orchestration, queues, search, observability, and production reliability.",
      "Software engineering: full-stack web products, APIs, microservices, integrations, authentication, and scalable architecture.",
      "Infrastructure: on-premise HPC, Docker workloads, monitoring, capacity planning, and cloud deployment.",
      "Applied AI: LLM products, sentiment analysis, speech-to-text, retrieval, automation, and data enrichment.",
    ],
  },
  se: {
    title: "Haikal Hilmi - Software Engineer Portfolio",
    heading: "Haikal Hilmi - Software Engineer",
    canonical: `${SITE_URL}/software-engineer`,
    filename: "haikal-hilmi-software-engineer-portfolio",
    summary:
      "Software Engineer building production-ready full-stack products, scalable APIs, microservices, integrations, and AI-powered applications. Experienced with high-throughput backend systems, client products, and award-winning platforms.",
    capabilities: [
      "Full-stack products: responsive interfaces, APIs, databases, authentication, and production deployment.",
      "Backend engineering: microservices, event-driven systems, high-throughput services, and third-party integrations.",
      "Product engineering: architecture decisions, rapid delivery, maintainability, security, and observability.",
      "Applied AI: LLM assistants, automation, recommendation systems, and AI-enabled SaaS products.",
    ],
  },
  de: {
    title: "Haikal Hilmi - Data Engineer Portfolio",
    heading: "Haikal Hilmi - Data Engineer",
    canonical: `${SITE_URL}/data-engineer`,
    filename: "haikal-hilmi-data-engineer-portfolio",
    summary:
      "Data Engineer specializing in large-scale scraping, resilient data pipelines, ETL, search infrastructure, observability, and on-premise HPC. Experienced processing high-volume social, news, video, and business data in production.",
    capabilities: [
      "Data pipelines: ingestion, ETL, orchestration, queues, search, monitoring, and failure recovery.",
      "Web scraping: high-volume collection, anti-fragile workers, scheduling, enrichment, and structured delivery.",
      "Infrastructure: on-premise HPC, Docker workloads, Elasticsearch, PostgreSQL, Grafana, and Prometheus.",
      "Applied AI: sentiment analysis, speech-to-text, entity extraction, retrieval, and data enrichment.",
    ],
  },
} satisfies Record<
  PortfolioScope,
  {
    title: string;
    heading: string;
    canonical: string;
    filename: string;
    summary: string;
    capabilities: string[];
  }
>;

export function parsePortfolioScope(value: string | null): PortfolioScope {
  return value === "se" || value === "de" ? value : "general";
}

export function getPortfolioExportMeta(scope: PortfolioScope) {
  const config = scopeConfig[scope];
  const query = scope === "general" ? "" : `?scope=${scope}`;
  return {
    ...config,
    markdownUrl: `${SITE_URL}/portfolio.md${query}`,
    pdfUrl: `${SITE_URL}/portfolio.pdf${query}`,
  };
}

const clean = (value: string) => value.replace(/\s+/g, " ").trim();

const projectToMarkdown = (project: Project): string => {
  const meta = getProjectMeta(project.id);
  const pipeline = getPipeline(project.id);
  const lines = [
    `### ${project.title}`,
    "",
    `- ID: \`${project.id}\``,
    `- Category: ${dataProjects.includes(project) ? "Data Engineering" : "Software Engineering"}`,
    meta.context ? `- Context: ${meta.context}` : "",
    meta.role ? `- Role: ${clean(meta.role.en)}` : "",
    meta.status ? `- Status: ${clean(meta.status.en)}` : "",
    project.scale ? `- Scale: ${clean(project.scale.en)}` : "",
    project.award ? `- Award: ${clean(project.award.en)}` : "",
    `- Summary: ${clean(project.description.en)}`,
    project.problem ? `- Problem: ${clean(project.problem.en)}` : "",
    project.solution ? `- Solution: ${clean(project.solution.en)}` : "",
    project.result ? `- Result: ${clean(project.result.en)}` : "",
    `- Technologies: ${project.tech.join(", ")}`,
    project.link ? `- Live URL: ${project.link}` : "",
    project.source ? `- Source & evidence: ${project.source}` : "",
    project.image ? `- Cover image: ${SITE_URL}${project.image}` : "",
  ].filter(Boolean);

  if (pipeline.length > 0) {
    lines.push(
      `- Pipeline: ${pipeline.map((stage) => `${stage.role}: ${stage.label}`).join(" -> ")}`
    );
  }

  if (meta.decisions && meta.decisions.length > 0) {
    lines.push("- Key decisions:");
    lines.push(
      ...meta.decisions.map((decision) => `  - ${clean(decision.en)}`)
    );
  }

  lines.push(`- Portfolio detail: ${SITE_URL}/projects/${project.id}`);
  return lines.join("\n");
};

/** Canonical AI-friendly representation of a public portfolio scope. */
export function buildPortfolioMarkdown(
  scope: PortfolioScope = "general"
): string {
  const config = getPortfolioExportMeta(scope);
  const scopedExperience =
    scope === "general"
      ? experience
      : experience.filter((item) => item.area.includes(scope));
  const experienceMarkdown = scopedExperience
    .map((item) => {
      const lines = [
        `### ${item.company}`,
        "",
        `- Role: ${clean(item.role.en)}`,
        `- Period: ${clean(item.period.en)}`,
        `- Location: ${item.location}`,
        `- Impact: ${clean(item.headline.en)}`,
        item.note ? `- Context: ${clean(item.note.en)}` : "",
        `- Technologies: ${item.tech.join(", ")}`,
        "- Highlights:",
        ...item.bullets.map((bullet) => `  - ${clean(bullet.en)}`),
      ].filter(Boolean);
      return lines.join("\n");
    })
    .join("\n\n");

  const hpcMarkdown = hpcStats
    .map(
      (stat) =>
        `- ${stat.value} ${clean(stat.label.en)} - ${clean(stat.detail.en)}`
    )
    .join("\n");

  const testimonialIds =
    scope === "se"
      ? new Set(["robert-ligthart", "alamsyah-pangestu"])
      : scope === "de"
        ? new Set([
            "widyawan",
            "jeesun-kim",
            "sam-white",
            "claire-bartolozzi",
            "cristian-buda",
          ])
        : null;
  const scopedTestimonials = testimonialIds
    ? testimonials.filter((item) => testimonialIds.has(item.id))
    : testimonials;
  const testimonialMarkdown = scopedTestimonials
    .map((item) => {
      const attribution = [clean(item.role.en), item.location]
        .filter(Boolean)
        .join("; ");
      return `> "${clean(item.quote.en)}"\n> - ${item.name}, ${attribution}${item.linkedin ? ` ([profile](${item.linkedin}))` : ""}`;
    })
    .join("\n\n");

  const projectSections = [
    scope !== "de"
      ? `## Software engineering projects\n\n${softwareProjects.map(projectToMarkdown).join("\n\n")}`
      : "",
    scope !== "se"
      ? `## Data engineering projects\n\n${dataProjects.map(projectToMarkdown).join("\n\n")}`
      : "",
  ].filter(Boolean);

  const infrastructureSection =
    scope === "se"
      ? ""
      : `## Selected scale and infrastructure\n\n${hpcMarkdown}`;

  return `---
title: ${config.title}
canonical: ${config.canonical}
language: en
content_type: professional_portfolio
portfolio_scope: ${scope}
license: public portfolio content; contact the owner for reuse
---

# ${config.heading}

${config.summary}

This document is optimized for search, retrieval-augmented generation (RAG), and AI knowledge bases. It is generated from the live portfolio data source.

## Contact and profiles

- Website: ${SITE_URL}
- LinkedIn: ${LINKEDIN_URL}
- Upwork: ${UPWORK_URL}
- Project inquiry: https://tally.so/r/81VNPz

## Core capabilities

${config.capabilities.map((capability) => `- ${capability}`).join("\n")}

${infrastructureSection}

## Professional experience

${experienceMarkdown}

${projectSections.join("\n\n")}

## Client testimonials

${testimonialMarkdown}

## Source and freshness

- Canonical portfolio: ${config.canonical}
- Portfolio scope: ${scope}
- Markdown export: ${config.markdownUrl}
- PDF export: ${config.pdfUrl}
- AI discovery file: ${SITE_URL}/llms.txt
- The export is generated from the same typed project and experience data used by the website.
`;
}
