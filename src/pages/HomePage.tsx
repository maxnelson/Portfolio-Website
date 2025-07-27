import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { ProjectGrid } from "@src/components/ProjectGrid/ProjectGrid";
import { LeftSidebar } from "@src/components/LeftSidebar";
const Footer = lazy(() =>
	import("@src/components/Footer/Footer").then((module) => ({
		default: module.Footer || module.default
	}))
);

export function HomePage({ projectDescriptionVisible, setProjectDescriptionVisible }) {
	const params = useParams();
	return (
		<>
			<link
				rel="canonical"
				href="https://maxnelsonwebsite.com"
			/>
			<div className="page_container">
				<div
					className="inner_page_container"
					style={{ display: "flex" }}>
					<div className="sidebar">
						<LeftSidebar setProjectDescriptionVisible={setProjectDescriptionVisible} />
					</div>
					<main className="main_section">
						<ProjectGrid
							projectDescriptionVisible={projectDescriptionVisible}
							setProjectDescriptionVisible={setProjectDescriptionVisible}
							projectDescriptionContentName={params.project}
						/>
					</main>
				</div>
				<Suspense fallback={null}>
					<Footer />
				</Suspense>
			</div>
		</>
	);
}
