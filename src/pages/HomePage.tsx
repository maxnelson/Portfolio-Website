import { ProjectsGrid } from "@/components/ProjectsGrid";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";

export function HomePage({
  projectDescriptionVisible,
  setProjectDescriptionVisible,
}) {
  document.body.classList.remove("_background-image--var_--image-1_");
  document.body.classList.remove("background-repeat--repeat");
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section">
          <ProjectsGrid
            projectDescriptionVisible={projectDescriptionVisible}
            setProjectDescriptionVisible={setProjectDescriptionVisible}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
