import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeftSidebar } from "@/components/LeftSidebar";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export function AboutPage() {
  return (
    <>
      <Header />
      <div className="left_sidebar_page_container">
        <LeftSidebar />
        <div className="left_sidebar_main_section">
          <div className="section_header">
            <h2>About</h2>
            <hr />
            <p>
              Web Developer with a background in design. 9+ years of experience
              developing maintainable web applications using Javascript, HTML5,
              CSS3, AEM, Python, Java, and Google App Engine, and integrating
              with a variety of web services, databases, and content
              repositories.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
