import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeftSidebar } from "@/components/LeftSidebar";
import { jsPDF } from "jspdf";
import { useRef } from "react";

export function ResumePage() {
  const resumePageRef = useRef();
  const demoFromHTML = () => {
    console.log("this is firing");
    const doc = new jsPDF("p", "pt", "letter");

    doc.html(document.getElementById("resume_page"), {
      callback: function (doc) {
        //doc.save();
      },
      x: 10,
      y: 10,
    });
  };
  return (
    <>
      <Header />
      <div className="left_sidebar_page_container">
        <LeftSidebar />
        <div className="left_sidebar_main_section">
          <div ref={resumePageRef} id="resume_page" onClick={demoFromHTML}>
            <div className="resume_header_section display-flex justify-content-space-between">
              <h1>MAX NELSON</h1>
              <div className="contact_info">
                <p className="contact_info_title">EMAIL</p>
                <p className="contact_info_content">MAXNELSON88@GMAIL.COM</p>
                <hr />
                <p className="contact_info_title">Phone</p>
                <div className="phone_number"></div>
                <hr />
                <p className="contact_info_title">Website</p>
                <p className="contact_info_content">MAXNELSONDESIGN.COM</p>
                <hr />
              </div>
            </div>
            <div className="resume_body">
              <div className="section_header">
                <p>Summary</p>
                <hr />
                <p>
                  Web Developer with 9+ years of experience developing
                  maintainable web applications using Javascript, HTML5, CSS3,
                  Python, Java, and integrating with a variety of web services,
                  databases, and content repositories, such as Google App Engine
                  and AEM.
                </p>
              </div>
              <div className="section_header">
                <p>Experience</p>
                <hr />
                <div className="job_info_container">
                  <div className="current_dates">
                    <p>2020 – 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
