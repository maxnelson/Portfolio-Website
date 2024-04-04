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
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fassets%2Fprofile_picture_3.png?alt=media&token=da062237-240f-4d64-ac7b-188fdbeb4c14" />
          </div>
          <div className="display-inline-block width-80pc vertical-align-top margin-left-1">
            <h2 className="section_header">Hi, I'm Max Nelson</h2>
            <p className="section_text">
              I am a Frontend Web Developer with 8 years of experience
              developing scalable and maintainable websites and applications
              using a variety of languages and frameworks, including Javascript,
              HTML, CSS, and Python. And integrating with a variety of web
              services, databases and content repositories, such as Google Cloud
              and AEM.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
