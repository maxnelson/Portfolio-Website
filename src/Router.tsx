import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { AboutPage } from "@/pages/AboutPage";
import { TimelinePage } from "@/pages/TimelinePage";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
        <Route path="/timeline" element={<TimelinePage />}></Route>
      </Routes>
    </>
  );
}
