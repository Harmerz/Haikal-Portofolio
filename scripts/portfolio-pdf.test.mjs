import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { PDFDocument, PDFName } from "pdf-lib";

// Resolve the same source alias as Next.js when running this check in Node.
registerHooks({
  resolve(specifier, context, nextResolve) {
    return nextResolve(specifier.startsWith("@/")
      ? pathToFileURL(path.resolve("src", `${specifier.slice(2)}.ts`)).href
      : specifier, context);
  },
});

const { GET } = await import("../src/app/portfolio.pdf/route.ts");
const { softwareProjects, dataProjects, isVideo } = await import("../src/data/projects.ts");
for (const scope of ["se", "de", "general"]) {
  const response = await GET(new Request(`https://se.haikalhilmi.my.id/portfolio.pdf?scope=${scope}`));
  assert.equal(response.headers.get("Content-Type"), "application/pdf");
  const bytes = new Uint8Array(await response.arrayBuffer());
  const pdf = await PDFDocument.load(bytes);
  let imageCount = 0;
  const imagePages = pdf.getPages().filter((page) => {
    const objects = page.node.Resources()?.lookup(PDFName.of("XObject"));
    const images = objects?.entries().filter(([, ref]) =>
      pdf.context.lookup(ref).dict.get(PDFName.of("Subtype"))?.toString() === "/Image");
    imageCount += images?.length ?? 0;
    return images?.length;
  });
  const projects = scope === "se" ? softwareProjects : scope === "de" ? dataProjects : [...softwareProjects, ...dataProjects];
  const expectedImages = projects.flatMap((project) =>
    [...new Set([project.image, ...(project.images ?? [])])].filter(Boolean)
      .map((source) => isVideo(source) ? source.replace(/\.[^.]+$/, "-poster.jpg") : source)
      .filter((source) => /\.(png|jpe?g)$/i.test(source) && existsSync(path.join("public", source)))
  );
  assert.equal(imageCount, expectedImages.length, "Every available cover, gallery image and video still must be embedded");
  if (scope !== "de") assert.ok(imagePages.length >= softwareProjects.length);
  if (scope === "se") {
    assert.match(pdf.getTitle(), /Software Engineer/);
    await mkdir("output/pdf", { recursive: true });
    await writeFile("output/pdf/haikal-hilmi-software-engineer-portfolio.pdf", bytes);
  }
  console.log(`${scope}: ${pdf.getPageCount()} pages, ${imagePages.length} pages with embedded images`);
}
