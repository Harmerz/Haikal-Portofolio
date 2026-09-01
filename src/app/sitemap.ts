import type { MetadataRoute } from "next";
import { allProjects } from "@/data/projects";
import { SITE_URL } from "@/config/site";

const staticRoutes = ["/", "/software-engineer", "/data-engineer"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.9,
  }));

  const projectEntries = allProjects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
