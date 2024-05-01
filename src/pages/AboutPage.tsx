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
        <div className="main_section about_page">
          <div className="display-inline-block width-20pc margin-right-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fassets%2Fprofile_picture.png?alt=media&token=e8c85ebc-3169-4c3b-8984-ded19c32e2f3" />
          </div>
          <div className="display-inline-block width-80pc vertical-align-top margin-left-1">
            <h2 className="section_header">Hi, I'm Max Nelson :)</h2>
            <p className="section_text">
              I am a Web Developer with 8 years of experience developing
              maintainable website applications and components using Python,
              Javascript, HTML, and CSS, and integrating with a variety of APIs,
              databases, and content repositories.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
