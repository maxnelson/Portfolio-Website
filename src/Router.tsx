import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { AboutPage } from "@/pages/AboutPage";
import { TimelinePage } from "@/pages/TimelinePage";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
const styles = {
  left_sidebar_page_container: {
    display: "flex",
    marginTop: "5rem",
    marginBottom: "2rem",
    marginLeft: "15rem",
    marginRight: "15rem",
  },
  footer: {
    margin: "1rem 15rem",
  },
};

export function Router() {
  return (
    <>
      <div style={styles.left_sidebar_page_container}>
        <LeftSidebar />
        <div className="left_sidebar_main_section">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/resume" element={<ResumePage />}></Route>
            <Route path="/timeline" element={<TimelinePage />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
