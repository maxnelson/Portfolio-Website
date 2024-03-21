import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
export function AboutPage(_, setProjectDescriptionVisible) {
  document.body.classList.remove("sketchblog_background");
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
              Front-End Web Developer with 8 years of experience developing
              scalable and maintainable websites and applications using a
              variety of languages and frameworks, including Javascript, HTML,
              CSS, and Python. And integrating with a variety of web services,
              databases and content repositories, such as Google Cloud and AEM.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
