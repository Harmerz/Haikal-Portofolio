import {
  buildPortfolioMarkdown,
  getPortfolioExportMeta,
  parsePortfolioScope,
} from "@/lib/portfolio-export";

export function GET(request: Request) {
  const scope = parsePortfolioScope(
    new URL(request.url).searchParams.get("scope")
  );
  const meta = getPortfolioExportMeta(scope);

  return new Response(buildPortfolioMarkdown(scope), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${meta.filename}.md"`,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
