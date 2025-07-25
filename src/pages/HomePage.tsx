import { ProjectsGrid } from "@/components/ProjectsGrid";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
export function HomePage({ projectDescriptionVisible, setProjectDescriptionVisible }) {
	document.body.classList.remove("_background-image--var_--image-1_");
	document.body.classList.remove("_background-repeat--repeat");
	const params = useParams();
	return (
		<>
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
