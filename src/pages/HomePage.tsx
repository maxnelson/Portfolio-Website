import { ProjectsGrid } from "@/components/ProjectsGrid";

export function HomePage({
  projectDescriptionVisible,
  setProjectDescriptionVisible,
}) {
  return (
    <ProjectsGrid
      projectDescriptionVisible={projectDescriptionVisible}
      setProjectDescriptionVisible={setProjectDescriptionVisible}
    />
  );
}
