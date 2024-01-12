import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
      </Routes>
    </>
  );
}
