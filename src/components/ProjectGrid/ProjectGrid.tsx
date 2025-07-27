import { useState, useEffect, Suspense } from "react";
import { ProjectDescription } from "@src/components/ProjectGrid/ProjectDescription";
import { ProjectGridItem } from "@src/components/ProjectGrid/ProjectGridItem";
import { ProjectGridItemSuspense } from "@src/components/ProjectGrid/ProjectGridItemSuspense";
import { getProjectGridData } from "@src/utility_functions/fetchData/getProjectGridData";
interface projectGridDataInterface {
	timeline: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		clientName: string;
		jobTitle: string;
		location: string;
		startDateYear: string;
		endDateYear: string;
		description: string;
	};
	apple: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		clientName: string;
		jobTitle: string;
		location: string;
		startDateYear: string;
		endDateYear: string;
		description: string;
	};
	rubrik: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		clientName: string;
		jobTitle: string;
		location: string;
		startDateYear: string;
		endDateYear: string;
		description: string;
	};
	cloudera: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		clientName: string;
		jobTitle: string;
		location: string;
		startDateYear: string;
		endDateYear: string;
		description: string;
	};
	gifhov: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		clientName: string;
		jobTitle: string;
		location: string;
		startDateYear: string;
		endDateYear: string;
		description: string;
	};
	blog: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		clientName: string;
		jobTitle: string;
		location: string;
		startDateYear: string;
		endDateYear: string;
		description: string;
	};
}

export const ProjectGrid = ({
	projectDescriptionVisible,
	projectDescriptionContentName,
	setProjectDescriptionVisible
}) => {
	const [projectGridData, setProjectGridData] = useState<projectGridDataInterface | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const fetchedProjectGridData = await getProjectGridData();
			setProjectGridData(fetchedProjectGridData);
		};
		fetchData();
	}, []);

	const sortedProjectGridData =
		projectGridData ?
			Object.values(projectGridData).sort((a, b) => {
				return a.gridSequence - b.gridSequence;
			})
		:	[];

	return (
		<>
			{projectDescriptionVisible ?
				<ProjectDescription
					data_object={projectGridData?.[projectDescriptionContentName]}
					projectDescriptionVisible={projectDescriptionVisible}
					setProjectDescriptionVisible={setProjectDescriptionVisible}
					projectDescriptionContentName={projectDescriptionContentName}
				/>
			:	<div className="project_grid_container">
					{sortedProjectGridData.map((projectData) => {
						return (
							<Suspense
								fallback={<ProjectGridItemSuspense />}
								key={projectData?.clientName}>
								<ProjectGridItem
									image1={projectData?.image1}
									clientName={projectData?.clientName}
									startDateYear={projectData?.startDateYear}
									endDateYear={projectData?.endDateYear}
									projectDescriptionContentName={projectData?.clientName.toLowerCase()}
									key={projectData?.clientName}
								/>
							</Suspense>
						);
					})}
				</div>
			}
		</>
	);
};
