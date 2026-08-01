import { Suspense } from "react";
import { NavLink } from "react-router";
import { ProjectGridItemSuspense } from "@src/components/ProjectGrid/ProjectGridItemSuspense";
import { getProjectData } from "@src/utility_functions/fetchData/getProjectGridData";

export const ProjectGridItem = (props) => {
	const projectDataQuery = getProjectData(props.name);
	const projectData = projectDataQuery.data;
	return (
		<>
			<Suspense fallback={<ProjectGridItemSuspense />}>
				<NavLink to={"/project/" + props.name}>
					<div className="project_grid_item aspect-ratio-1-1">
						<img
							alt="Project Image"
							fetchPriority="high"
							src={projectData.image1}
						></img>
						<div className="project_grid_item_overlay">
							<div className="project_grid_item_overlay_text project_grid_item_overlay_text_top">
								<h3>{projectData.clientName}</h3>
							</div>
							<div className="project_grid_item_overlay_text project_grid_item_overlay_text_bottom">
								{projectData.startDateYear && projectData.startDateYear}
								{projectData.endDateYear && " - " + projectData.endDateYear}
							</div>
						</div>
					</div>
				</NavLink>
			</Suspense>
		</>
	);
};
