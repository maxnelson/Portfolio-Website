import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "@src/pages/HomePage";
import { ResumePage } from "@src/pages/ResumePage";
import { AboutPage } from "@src/pages/AboutPage";
import { TimelinePage } from "@src/pages/TimelinePage";
import { ContactPage } from "@src/pages/ContactPage";
import { SketchblogPage } from "@src/sketchblog/SketchblogPage";
import { PostDescriptionPage } from "@src/sketchblog/PostDescriptionPage";
export function Router() {
	const [projectDescriptionVisible, setProjectDescriptionVisible] = useState(false);

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
					}></Route>
				<Route
					path="/project/:project"
					element={
						<HomePage
							projectDescriptionVisible={true}
							setProjectDescriptionVisible={setProjectDescriptionVisible}
						/>
					}></Route>
				<Route
					path="/about"
					element={
						<AboutPage setProjectDescriptionVisible={setProjectDescriptionVisible} />
					}></Route>
				<Route
					path="/resume/:resumetype?"
					element={
						<ResumePage
							projectDescriptionVisible={projectDescriptionVisible}
							setProjectDescriptionVisible={setProjectDescriptionVisible}
						/>
					}></Route>
				<Route
					path="/timeline"
					element={<TimelinePage />}></Route>
				<Route
					path="/contact"
					element={
						<ContactPage
							projectDescriptionVisible={projectDescriptionVisible}
							setProjectDescriptionVisible={setProjectDescriptionVisible}
						/>
					}></Route>
				<Route
					path="/sketchblog"
					element={<SketchblogPage />}>
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
					element={<PostDescriptionPage />}
				/>
			</Routes>
		</>
	);
}
