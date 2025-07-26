import { ProjectsGrid } from "@/components/ProjectsGrid";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
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
				<div className="sidebar _display--inline-block">
					<LeftSidebar setProjectDescriptionVisible={setProjectDescriptionVisible} />
				</div>
				<div className="main_section">
					<ProjectsGrid
						projectDescriptionVisible={projectDescriptionVisible}
						setProjectDescriptionVisible={setProjectDescriptionVisible}
						projectDescriptionContentName={params.project}
					/>
				</div>
				<Footer />
			</div>
		</>
	);
}
