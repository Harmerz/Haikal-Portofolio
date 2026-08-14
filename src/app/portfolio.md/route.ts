import { buildPortfolioMarkdown } from "@/lib/portfolio-export";

export function GET() {
  return new Response(buildPortfolioMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="haikal-hilmi-portfolio.md"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
