import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { AboutPage } from "@/pages/AboutPage";
import { TimelinePage } from "@/pages/TimelinePage";
import { ContactPage } from "@/pages/ContactPage";
import { SketchblogPage } from "@/sketchblog/SketchblogPage";

export function Router() {
  const [projectDescriptionVisible, setProjectDescriptionVisible] =
    useState(false);
  return (
    <>
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
        <Route
          path="/about"
          element={
            <AboutPage
              projectDescriptionVisible={projectDescriptionVisible}
              setProjectDescriptionVisible={setProjectDescriptionVisible}
            />
          }
        ></Route>
        <Route
          path="/resume"
          element={
            <ResumePage
              projectDescriptionVisible={projectDescriptionVisible}
              setProjectDescriptionVisible={setProjectDescriptionVisible}
            />
          }
        ></Route>
        <Route
          path="/timeline"
          element={
            <TimelinePage
              projectDescriptionVisible={projectDescriptionVisible}
              setProjectDescriptionVisible={setProjectDescriptionVisible}
            />
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <ContactPage
              projectDescriptionVisible={projectDescriptionVisible}
              setProjectDescriptionVisible={setProjectDescriptionVisible}
            />
          }
        ></Route>
        <Route path="/sketchblog" element={<SketchblogPage />}></Route>
      </Routes>
    </>
  );
}
