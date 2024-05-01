import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
export function ContactPage(_, setProjectDescriptionVisible) {
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section">
          <div>
            <h2 className="section_header">Contact</h2>
            <p className="section_text">
              Please feel free to send me an Email at{" "}
              <a
                className="external_link"
                href="mailto:maxnelson88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                maxnelson88@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
