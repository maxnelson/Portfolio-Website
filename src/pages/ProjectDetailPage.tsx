import { useParams } from "react-router";
import { LeftSidebar } from "@src/components/LeftSidebar";
import { Footer } from "@src/components/Footer/Footer";
import { Suspense } from "react";
import { getProjectDescriptionData } from "@src/utility_functions/fetchData/getProjectGridData";
import { ProjectDescription } from "@src/components/ProjectGrid/ProjectDescription";

export function ProjectDetailPage() {
	const URLParams = useParams();
	const projectDataQuery = getProjectDescriptionData(URLParams.project);
	const projectData = projectDataQuery.data;
	return (
		<>
			<div className="page_container">
				<div className="inner_page_container" style={{ display: "flex" }}>
					<div className="sidebar">
						<LeftSidebar />
					</div>
					<main className="main_section">
						<ProjectDescription projectData={projectData} />
					</main>
				</div>
				<Suspense fallback={null}>
					<Footer />
				</Suspense>
			</div>
		</>
	);
}
