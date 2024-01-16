import { ProjectsGrid } from "@/components/ProjectsGrid";

const styles = {
  left_sidebar_page_container: {
    display: "flex",
    marginTop: "5rem",
    marginBottom: "2rem",
    marginLeft: "15rem",
    marginRight: "15rem",
  },
  footer: {
    margin: "1rem 15rem",
  },
};
export function HomePage() {
  return <ProjectsGrid />;
}
