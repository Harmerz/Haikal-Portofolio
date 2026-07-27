import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, getProjectById } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";

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
  return {
    title: `${project.title} — Haikal Hilmi`,
    description: project.description.en,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const requestHeaders = await headers();
  const mode =
    requestHeaders.get("x-portfolio-mode") === "upwork"
      ? "upwork"
      : "general";
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-10">
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
      <Footer mode={mode} />
    </>
  );
}
