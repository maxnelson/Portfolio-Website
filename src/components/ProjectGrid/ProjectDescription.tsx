import { useState, useEffect } from "react";
import { getProjectData } from "@src/utility_functions/fetchData/getProjectGridData.js";
import { projectDataModel } from "@src/types/models.ts";
import { ChevronLeftIcon } from "@src/components/icons/ChevronLeftIcon";

export const ProjectDescription = (props) => {
	const [projectData, setProjectData] = useState<projectDataModel | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const fetchedProjectData = await getProjectData(props.projectDescriptionContentName);
			setProjectData(fetchedProjectData);
		};
		fetchData();
	}, []);
	const policy = window.trustedTypes.defaultPolicy;
	const html = policy?.createHTML(projectData?.description);

	return (
		<div className="project_description_container">
			<div className="project_description_container_images">
				{projectData?.image1 ?
					<img
						loading="lazy"
						alt="Project detail image"
						src={projectData?.image1}></img>
				:	null}
				{projectData?.image2 ?
					<img
						loading="lazy"
						alt="Project detail image"
						src={projectData?.image2}></img>
				:	null}
				{projectData?.image3 ?
					<img
						loading="lazy"
						alt="Project detail image"
						src={projectData?.image3}></img>
				:	null}
				{projectData?.image4 ?
					<img
						loading="lazy"
						alt="Project detail image"
						src={projectData?.image4}></img>
				:	null}
			</div>
			<div className="project_description_text_container _word-wrap--break-word">
				{projectData?.clientName && (
					<div className="_margin-bottom--1rem">
						<h3>{projectData?.clientName}</h3>
						<p
							style={{
								fontSize: "12pt",
								marginTop: "0",
								marginBottom: "0"
							}}>
							{projectData?.jobTitle}
						</p>
						<span>
							{projectData?.startDateMonth && projectData?.startDateMonth}
							{projectData?.startDateYear && " " + projectData?.startDateYear}
							{projectData?.endDateYear && " - "}
							{projectData?.endDateMonth && projectData?.endDateMonth}
							{projectData?.endDateYear && " " + projectData?.endDateYear}
						</span>
					</div>
				)}
				<div
					dangerouslySetInnerHTML={{
						__html: html
					}}></div>

				<div className="back-button">
					<a href="/">
						<ChevronLeftIcon size="10px" />
						<ChevronLeftIcon size="10px" />
					</a>
				</div>
			</div>
		</div>
	);
};
