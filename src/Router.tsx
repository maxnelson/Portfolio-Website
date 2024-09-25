import { useState } from "react";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { AboutPage } from "@/pages/AboutPage";
import { TimelinePage } from "@/pages/TimelinePage";
import { ContactPage } from "@/pages/ContactPage";
import { SketchblogPage } from "@/sketchblog/SketchblogPage";
import { PostDescriptionPage } from "@/sketchblog/PostDescriptionPage";
export function Router() {
  const [
    projectDescriptionVisible,
    setProjectDescriptionVisible,
  ] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              projectDescriptionVisible={
                projectDescriptionVisible
              }
              setProjectDescriptionVisible={
                setProjectDescriptionVisible
              }
            />
          }
        ></Route>
        <Route
          path="/project/:project"
          element={
            <HomePage
              projectDescriptionVisible={
                true
              }
              setProjectDescriptionVisible={
                setProjectDescriptionVisible
              }
            />
          }
        ></Route>
        <Route
          path="/about"
          element={
            <AboutPage
              projectDescriptionVisible={
                projectDescriptionVisible
              }
              setProjectDescriptionVisible={
                setProjectDescriptionVisible
              }
            />
          }
        ></Route>
        <Route
          path="/resume"
          element={
            <ResumePage
              projectDescriptionVisible={
                projectDescriptionVisible
              }
              setProjectDescriptionVisible={
                setProjectDescriptionVisible
              }
            />
          }
        ></Route>
        <Route
          path="/timeline"
          element={<TimelinePage />}
        ></Route>
        <Route
          path="/contact"
          element={
            <ContactPage
              projectDescriptionVisible={
                projectDescriptionVisible
              }
              setProjectDescriptionVisible={
                setProjectDescriptionVisible
              }
            />
          }
        ></Route>
        <Route
          path="/sketchblog"
          element={<SketchblogPage />}
        >
          <Route
            index
            element={
              <Navigate
                to="drawings"
                replace
              />
            }
          />
        </Route>
        <Route
          path="/sketchblog/:category"
          element={<SketchblogPage />}
        />
        <Route
          path="/sketchblog/:category/:postname"
          element={
            <PostDescriptionPage />
          }
        />
      </Routes>
    </>
  );
}
