import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
export function AboutPage(_, setProjectDescriptionVisible) {
  document.body.classList.remove("background-image-image-1");
  document.body.classList.remove("background-repeat-repeat");
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section about_page">
          <div className="display-inline-block width-20-percent-minus-1rem margin-right-1rem">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fassets%2Fprofile_picture.png?alt=media&token=e8c85ebc-3169-4c3b-8984-ded19c32e2f3" />
          </div>
          <div className="display-inline-block width-80-percent-minus-1rem vertical-align-top margin-left-1rem">
            <h2 className="margin-bottom-1rem">Hi, I'm Max Nelson :)</h2>
            <p className="color-777 line-height-1-5">
              I am a Web Developer with eight years of experience developing
              maintainable website applications and components using a variety
              of web languages, including Javascript, Python, HTML and CSS, and
              implementing integrations with a variety of APIs, databases, and
              content repositories.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
