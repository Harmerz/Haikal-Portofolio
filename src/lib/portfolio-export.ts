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

/** Canonical AI-friendly representation of the public portfolio. */
export function buildPortfolioMarkdown(): string {
  const experienceMarkdown = experience
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

  const testimonialMarkdown = testimonials
    .map((item) => {
      const attribution = [clean(item.role.en), item.location]
        .filter(Boolean)
        .join("; ");
      return `> "${clean(item.quote.en)}"\n> - ${item.name}, ${attribution}${item.linkedin ? ` ([profile](${item.linkedin}))` : ""}`;
    })
    .join("\n\n");

  return `---
title: Haikal Hilmi - Data and Software Engineer Portfolio
canonical: ${SITE_URL}
language: en
content_type: professional_portfolio
license: public portfolio content; contact the owner for reuse
---

# Haikal Hilmi

Data and Software Engineer specializing in resilient data pipelines, large-scale scraping, cloud systems, HPC infrastructure, and full-stack products. Backend Engineer intern at ByteDance working on systems handling 100,000+ requests per second, a 5.0-star Upwork freelancer, and a multiple international hackathon winner.

This document is optimized for search, retrieval-augmented generation (RAG), and AI knowledge bases. It is generated from the live portfolio data source.

## Contact and profiles

- Website: ${SITE_URL}
- LinkedIn: ${LINKEDIN_URL}
- Upwork: ${UPWORK_URL}
- Project inquiry: https://tally.so/r/81VNPz

## Core capabilities

- Data engineering: scraping, ingestion, ETL, orchestration, queues, search, observability, and production reliability.
- Software engineering: full-stack web products, APIs, microservices, integrations, authentication, and scalable architecture.
- Infrastructure: on-premise HPC, Docker workloads, monitoring, capacity planning, and cloud deployment.
- Applied AI: LLM products, sentiment analysis, speech-to-text, retrieval, automation, and data enrichment.

## Selected scale and infrastructure

${hpcMarkdown}

## Professional experience

${experienceMarkdown}

## Software engineering projects

${softwareProjects.map(projectToMarkdown).join("\n\n")}

## Data engineering projects

${dataProjects.map(projectToMarkdown).join("\n\n")}

## Client testimonials

${testimonialMarkdown}

## Source and freshness

- Canonical portfolio: ${SITE_URL}
- Markdown export: ${SITE_URL}/portfolio.md
- PDF export: ${SITE_URL}/portfolio.pdf
- AI discovery file: ${SITE_URL}/llms.txt
- The export is generated from the same typed project and experience data used by the website.
`;
}
