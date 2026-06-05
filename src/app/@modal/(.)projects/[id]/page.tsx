import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import Modal from "@/components/Modal";
import ProjectDetail from "@/components/ProjectDetail";

export default async function ProjectModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <Modal>
      <ProjectDetail project={project} />
    </Modal>
  );
}
