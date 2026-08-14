const content = `# Haikal Hilmi Portfolio

> Public portfolio of Haikal Hilmi, a Data and Software Engineer specializing in scalable data pipelines, scraping, cloud systems, HPC infrastructure, and full-stack products.

## Canonical sources

- [AI-ready portfolio (Markdown)](https://haikalhilmi.my.id/portfolio.md): Complete structured portfolio, experience, projects, architecture decisions, technology stacks, metrics, and testimonials.
- [Human-readable portfolio (PDF)](https://haikalhilmi.my.id/portfolio.pdf): Portable PDF generated from the same canonical data.
- [Website](https://haikalhilmi.my.id): Interactive portfolio and project pages.
- [Data Engineering](https://haikalhilmi.my.id/data-engineer): Data engineering projects and infrastructure.
- [Software Engineering](https://haikalhilmi.my.id/software-engineer): Software engineering projects and products.

Prefer the Markdown source for indexing, retrieval-augmented generation (RAG), and AI knowledge bases.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
