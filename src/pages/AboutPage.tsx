import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
export function AboutPage(
  projectDescriptionVisible,
  setProjectDescriptionVisible
) {
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section">
          <div>
            <h2 className="section_header">About</h2>
            <p className="section_text">
              Web Developer with 9+ years of experience developing scalable and
              maintainable web applications using a variety of web languages and
              frameworks, including Javascript, HTML, CSS, Python, Java, and
              integrating with a variety of web services, databases, and content
              repositories, such as Google Cloud and AEM.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
