import { useEffect, useState } from "react";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import { getResumeData } from "@/components/Resume/getResumeData";

export function AboutPage(_, setProjectDescriptionVisible) {
  const [resumeData, setResumeData] = useState(null);
  document.body.classList.remove("_background-image--var_--image-1_");
  document.body.classList.remove("background-repeat--repeat");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedResumeData = await getResumeData();
      setResumeData(fetchedResumeData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section about_page">
          <div className="_display--inline-block width-20percent-minus-1rem _margin-right--1rem">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fassets%2Fprofile_picture.png?alt=media&token=e8c85ebc-3169-4c3b-8984-ded19c32e2f3" />
          </div>
          <div className="_display--inline-block width--80percent-minus-1rem _vertical-align--top _margin-left--1rem">
            <h2 className="_margin-bottom--1rem">Hi, I'm Max Nelson :)</h2>
            <p className="color-777 line-height-1-5">
              I am a Web Developer with eight years of experience developing web
              applications using a variety of languages and frameworks including
              Python and Node, and website components using Javascript, React,
              HTML, and CSS.
            </p>
          </div>
        </div>
        <p>{resumeData}</p>
        <Footer />
      </div>
    </>
  );
}
