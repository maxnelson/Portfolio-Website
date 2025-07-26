import { ProjectsGrid } from "@src/components/ProjectsGrid";
import { LeftSidebar } from "@src/components/LeftSidebar";
import { Footer } from "@src/components/Footer";
import { useParams } from "react-router-dom";
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
						<ProjectsGrid
							projectDescriptionVisible={projectDescriptionVisible}
							setProjectDescriptionVisible={setProjectDescriptionVisible}
							projectDescriptionContentName={params.project}
						/>
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}
