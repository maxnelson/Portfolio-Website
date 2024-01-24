import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { AboutPage } from "@/pages/AboutPage";
import { TimelinePage } from "@/pages/TimelinePage";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import { ContactPage } from "./pages/ContactPage";

const styles = {
  sidebar_page_container: {
    //display: "flex",
    //marginTop: "5rem",
    // marginBottom: "2rem",
    // marginLeft: "15rem",
    //marginRight: "15rem",
  },
  footer: {
    // margin: "1rem 15rem",
  },
};

export function Router() {
  const [projectDescriptionVisible, setProjectDescriptionVisible] =
    useState(false);
  return (
    <>
      <div className="page_container" style={styles.sidebar_page_container}>
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  projectDescriptionVisible={projectDescriptionVisible}
                  setProjectDescriptionVisible={setProjectDescriptionVisible}
                />
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/resume" element={<ResumePage />}></Route>
            <Route path="/timeline" element={<TimelinePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
