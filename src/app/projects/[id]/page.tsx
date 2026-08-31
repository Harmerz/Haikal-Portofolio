import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allProjects,
  dataProjects,
  getProjectById,
  getProjectImages,
} from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allProjects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.description.en,
    path: `/projects/${project.id}`,
    image: getProjectImages(project)[0],
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const requestHeaders = await headers();
  const mode =
    requestHeaders.get("x-portfolio-mode") === "upwork" ? "upwork" : "general";
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();
  const exportScope = dataProjects.some((item) => item.id === project.id)
    ? "de"
    : "se";
  const projectUrl = `${SITE_URL}/projects/${project.id}`;
  const projectImage = getProjectImages(project).find(
    (image) => !/\.(?:mp4|webm|mov|ogg)$/i.test(image)
  );

  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-10">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "@id": `${projectUrl}#project`,
              url: projectUrl,
              name: project.title,
              description: project.description.en,
              image: projectImage ? `${SITE_URL}${projectImage}` : undefined,
              creator: { "@id": `${SITE_URL}/#person` },
              keywords: project.tech,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Portfolio",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: project.title,
                  item: projectUrl,
                },
              ],
            },
          ]}
        />
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <ProjectDetail project={project} />
        </div>
      </main>
      <Footer mode={mode} exportScope={exportScope} />
    </>
  );
}
