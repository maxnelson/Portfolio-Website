import { useState, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() =>
	import("@src/pages/HomePage").then((module) => ({ default: module.HomePage }))
);
const AboutPage = lazy(() =>
	import("@src/pages/AboutPage").then((module) => ({ default: module.AboutPage }))
);
const ResumePage = lazy(() =>
	import("@src/pages/ResumePage").then((module) => ({ default: module.ResumePage }))
);
const ContactPage = lazy(() =>
	import("@src/pages/ContactPage").then((module) => ({ default: module.ContactPage }))
);
const SketchblogPage = lazy(() =>
	import("@src/sketchblog/SketchblogPage").then((module) => ({ default: module.SketchblogPage }))
);
const PostDescriptionPage = lazy(() =>
	import("@src/sketchblog/PostDescriptionPage").then((module) => ({
		default: module.PostDescriptionPage
	}))
);
//import { setLogLevel } from "firebase/firestore";
//setLogLevel("debug");

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
