import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() =>
	import("@src/pages/HomePage").then((module) => ({ default: module.HomePage }))
);
const ProjectDetailPage = lazy(() =>
	import("@src/pages/ProjectDetailPage").then((module) => ({
		default: module.ProjectDetailPage
	}))
);
const AboutPage = lazy(() =>
	import("@src/pages/AboutPage").then((module) => ({
		default: module.AboutPage
	}))
);
const ResumePage = lazy(() =>
	import("@src/pages/ResumePage").then((module) => ({
		default: module.ResumePage
	}))
);
const ContactPage = lazy(() =>
	import("@src/pages/ContactPage").then((module) => ({
		default: module.ContactPage
	}))
);
const SketchblogPage = lazy(() =>
	import("@src/sketchblog/SketchblogPage").then((module) => ({
		default: module.SketchblogPage
	}))
);
const PostDescriptionPage = lazy(() =>
	import("@src/sketchblog/PostDescriptionPage").then((module) => ({
		default: module.PostDescriptionPage
	}))
);
//import { setLogLevel } from "firebase/firestore";
//setLogLevel("debug");

export function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/project/:project" element={<ProjectDetailPage />}></Route>
				<Route path="/about" element={<AboutPage />}></Route>
				<Route path="/resume/:resumetype?" element={<ResumePage />}></Route>

				<Route path="/contact" element={<ContactPage />}></Route>
				<Route path="/sketchblog" element={<SketchblogPage />}>
					<Route index element={<Navigate to="drawings" replace />} />
				</Route>
				<Route path="/sketchblog/:category" element={<SketchblogPage />} />
				<Route
					path="/sketchblog/:category/:postname"
					element={<PostDescriptionPage />}
				/>
			</Routes>
		</>
	);
}
