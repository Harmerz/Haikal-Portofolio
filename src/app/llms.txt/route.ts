import { SITE_URL } from "@/config/site";

const content = `# Haikal Hilmi Portfolio

> Public portfolio of Haikal Hilmi, a Data and Software Engineer specializing in scalable data pipelines, scraping, cloud systems, HPC infrastructure, and full-stack products.

## Canonical sources

- [AI-ready portfolio (Markdown)](${SITE_URL}/portfolio.md): Complete structured portfolio, experience, projects, architecture decisions, technology stacks, metrics, and testimonials.
- [Human-readable portfolio (PDF)](${SITE_URL}/portfolio.pdf): Portable PDF generated from the same canonical data.
- [Software Engineer portfolio (Markdown)](${SITE_URL}/portfolio.md?scope=se): Software engineering experience, projects, decisions, technologies, and relevant testimonials.
- [Software Engineer portfolio (PDF)](${SITE_URL}/portfolio.pdf?scope=se): Portable software engineering portfolio.
- [Data Engineer portfolio (Markdown)](${SITE_URL}/portfolio.md?scope=de): Data engineering experience, projects, pipelines, infrastructure, and relevant testimonials.
- [Data Engineer portfolio (PDF)](${SITE_URL}/portfolio.pdf?scope=de): Portable data engineering portfolio.
- [Website](${SITE_URL}): Interactive portfolio and project pages.
- [Data Engineering](${SITE_URL}/data-engineer): Data engineering projects and infrastructure.
- [Software Engineering](${SITE_URL}/software-engineer): Software engineering projects and products.

Prefer the Markdown source for indexing, retrieval-augmented generation (RAG), and AI knowledge bases.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
