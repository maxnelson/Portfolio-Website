import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { ProjectGridItem } from "@src/components/ProjectGrid/ProjectGridItem";
import { LeftSidebar } from "@src/components/LeftSidebar";
import { Footer } from "@src/components/Footer/Footer";
/*
const Footer = lazy(() =>
	import("@src/components/Footer/Footer").then((module) => ({
		default: module.Footer || module.default
	}))
);
*/

export function HomePage() {
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
						<LeftSidebar />
					</div>
					<main className="main_section">
						<div className="project_grid_container">
							<ProjectGridItem name="timeline" />
							<ProjectGridItem name="apple" />
							<ProjectGridItem name="rubrik" />
							<ProjectGridItem name="cloudera" />
							<ProjectGridItem name="gifhov" />
							<ProjectGridItem name="blog" />
						</div>
					</main>
				</div>
				<Suspense fallback={null}>
					<Footer />
				</Suspense>
			</div>
		</>
	);
}
