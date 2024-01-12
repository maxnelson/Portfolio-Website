import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeftSidebar } from "@/components/LeftSidebar";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export function HomePage() {
  return (
    <>
      <Header />
      <div className="left_sidebar_page_container">
        <LeftSidebar />
        <div className="left_sidebar_main_section">
          <ProjectsGrid />
        </div>
      </div>
      <Footer />
    </>
  );
}
