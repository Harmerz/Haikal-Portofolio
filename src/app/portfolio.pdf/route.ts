import { PDFDocument, StandardFonts, rgb, type PDFFont } from "pdf-lib";
import {
  buildPortfolioMarkdown,
  getPortfolioExportMeta,
  parsePortfolioScope,
} from "@/lib/portfolio-export";

export const runtime = "nodejs";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_X = 52;
const MARGIN_TOP = 56;
const MARGIN_BOTTOM = 52;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

type TextStyle = {
  font: PDFFont;
  size: number;
  color: ReturnType<typeof rgb>;
  indent?: number;
  gapBefore?: number;
  gapAfter?: number;
};

const pdfSafe = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2026/g, "...")
    .replace(/\u00d7/g, "x")
    .replace(/\u2192/g, "->")
    .replace(/[^\x20-\x7E]/g, "");

const plainMarkdown = (value: string) =>
  pdfSafe(value)
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/[`*_]/g, "")
    .trim();

function wrapText(
  text: string,
  font: PDFFont,
  size: number,
  maxWidth: number
): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [""];

  const lines: string[] = [];
  let current = words[0];
  for (const word of words.slice(1)) {
    const candidate = `${current} ${word}`;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  }
  lines.push(current);
  return lines;
}

export async function GET(request: Request) {
  const scope = parsePortfolioScope(
    new URL(request.url).searchParams.get("scope")
  );
  const meta = getPortfolioExportMeta(scope);
  const document = await PDFDocument.create();
  document.setTitle(meta.title);
  document.setAuthor("Haikal Hilmi");
  document.setSubject(`${meta.title} - AI-ready professional portfolio export`);
  document.setKeywords([
    "data engineer",
    "software engineer",
    "portfolio",
    "data pipeline",
    "AI",
  ]);

  const regular = await document.embedFont(StandardFonts.Helvetica);
  const bold = await document.embedFont(StandardFonts.HelveticaBold);
  let page = document.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN_TOP;

  const addPage = () => {
    page = document.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    y = PAGE_HEIGHT - MARGIN_TOP;
  };

  const ensureSpace = (height: number) => {
    if (y - height < MARGIN_BOTTOM) addPage();
  };

  const draw = (text: string, style: TextStyle) => {
    const indent = style.indent ?? 0;
    const lineHeight = style.size * 1.38;
    const lines = wrapText(
      plainMarkdown(text),
      style.font,
      style.size,
      CONTENT_WIDTH - indent
    );
    const blockHeight =
      (style.gapBefore ?? 0) +
      lines.length * lineHeight +
      (style.gapAfter ?? 0);
    ensureSpace(blockHeight);
    y -= style.gapBefore ?? 0;
    for (const line of lines) {
      page.drawText(line, {
        x: MARGIN_X + indent,
        y: y - style.size,
        size: style.size,
        font: style.font,
        color: style.color,
      });
      y -= lineHeight;
    }
    y -= style.gapAfter ?? 0;
  };

  const markdownLines = buildPortfolioMarkdown(scope).split("\n");
  let inFrontmatter = false;
  let frontmatterSeen = false;

  for (const rawLine of markdownLines) {
    const trimmed = rawLine.trim();
    if (trimmed === "---" && !frontmatterSeen) {
      inFrontmatter = !inFrontmatter;
      if (!inFrontmatter) frontmatterSeen = true;
      continue;
    }
    if (inFrontmatter || !trimmed) {
      if (!inFrontmatter) y -= 3;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      draw(trimmed.slice(2), {
        font: bold,
        size: 25,
        color: rgb(0.06, 0.09, 0.16),
        gapAfter: 10,
      });
    } else if (trimmed.startsWith("## ")) {
      draw(trimmed.slice(3), {
        font: bold,
        size: 16,
        color: rgb(0.04, 0.34, 0.31),
        gapBefore: 13,
        gapAfter: 5,
      });
    } else if (trimmed.startsWith("### ")) {
      draw(trimmed.slice(4), {
        font: bold,
        size: 11.5,
        color: rgb(0.08, 0.12, 0.2),
        gapBefore: 8,
        gapAfter: 2,
      });
    } else if (trimmed.startsWith("> ")) {
      draw(trimmed.slice(2), {
        font: regular,
        size: 9,
        color: rgb(0.27, 0.33, 0.4),
        indent: 12,
        gapAfter: 2,
      });
    } else if (/^-\s/.test(trimmed)) {
      draw(`- ${trimmed.slice(2)}`, {
        font: regular,
        size: 9.25,
        color: rgb(0.16, 0.2, 0.27),
        indent: 8,
        gapAfter: 2,
      });
    } else {
      draw(trimmed, {
        font: regular,
        size: 9.5,
        color: rgb(0.16, 0.2, 0.27),
        gapAfter: 4,
      });
    }
  }

  const pages = document.getPages();
  pages.forEach((currentPage, index) => {
    const footer = `${meta.heading} | haikalhilmi.my.id | ${index + 1} / ${pages.length}`;
    const footerSize = 8;
    currentPage.drawLine({
      start: { x: MARGIN_X, y: 35 },
      end: { x: PAGE_WIDTH - MARGIN_X, y: 35 },
      thickness: 0.5,
      color: rgb(0.82, 0.84, 0.87),
    });
    currentPage.drawText(footer, {
      x: (PAGE_WIDTH - regular.widthOfTextAtSize(footer, footerSize)) / 2,
      y: 21,
      size: footerSize,
      font: regular,
      color: rgb(0.4, 0.44, 0.5),
    });
  });

  const bytes = await document.save();
  return new Response(Buffer.from(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${meta.filename}.pdf"`,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex, follow",
      Link: `<${meta.canonical}>; rel="canonical"`,
    },
  });
}
