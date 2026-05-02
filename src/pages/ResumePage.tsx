import { LeftSidebar } from "@src/components/LeftSidebar";
import { Footer } from "@src/components/Footer/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResumeData } from "@src/utility_functions/fetchData/getResumeData";
import { ResumePDF } from "@src/components/Resume/PDF/ResumePDF";
import { ResumeControls } from "@src/components/Resume/ResumeControls/ResumeControls";

interface resumeDataInterface {
	name: string;
	title: string;
	contactInfo: {
		email: string;
		phone: string;
		website: string;
	};
	summary1: string;
	section1: {
		title: string;
		apple: {
			clientName: string;
			jobTitle: string;
			startDateMonth: string;
			startDateYear: string;
			endDateMonth: string;
			endDateYear: string;
			location: string;
			description1: string;
			description2: string;
			description3: string;
			description4: string;
			description5: string;
			technologies_used: string;
		};
		rubrik: {
			clientName: string;
			jobTitle: string;
			location: string;
			startDateMonth: string;
			startDateYear: string;
			endDateMonth: string;
			endDateYear: string;
			description1: string;
			description3: string;
			description2: string;
			description4: string;
			technologies_used: string;
		};
		cloudera: {
			clientName: string;
			jobTitle: string;
			location: string;
			startDateMonth: string;
			startDateYear: string;
			endDateMonth: string;
			endDateYear: string;
			description1: string;
			description2: string;
			description3: string;
			description4: string;
			technologies_used: string;
		};
	};
	section2: {
		education: {
			title: string;
			degree: string;
			school: string;
			startDateYear: string;
			endDateYear: string;
			description: string;
		};
		skills: {
			title: string;
			skill1: {
				title: string;
				description: string;
			};
			skill2: {
				title: string;
				description: string;
			};
			skill3: {
				title: string;
				description: string;
			};
			skill4: {
				title: string;
				description: string;
			};
			skill5: {
				title: string;
				description: string;
			};
			skill6: {
				title: string;
				description: string;
			};
			skill7: {
				title: string;
				description: string;
			};
		};
	};
}

export const ResumePage = () => {
	const { resumetype } = useParams();
	const [resumeData, setResumeData] = useState<resumeDataInterface | null>(
		null
	);
	const defaultResumeType = resumetype ? resumetype : "single";
	const [resumeType] = useState(defaultResumeType);
	const defaultMarginBetweenExperiences = 5;
	const [marginBetweenExperiences, setMarginBetweenExperiences] = useState(
		defaultMarginBetweenExperiences
	);
	const [titleFontSize, setTitleFontSize] = useState(0);

	const [visibleExperiences, setVisibleExperiences] = useState<string[]>([
		"adobe",
		"apple",
		"rubrik",
		"cloudera",
		"timeline"
	]);

	useEffect(() => {
		const fetchData = async () => {
			const fetchedResumeData = await getResumeData();
			setResumeData(fetchedResumeData);
		};
		fetchData();
	}, []);
	return (
		<>
			<div className="page_container">
				<div className="inner_page_container" style={{ display: "flex" }}>
					<div className="sidebar">
						<LeftSidebar />
						<ResumeControls
							marginBetweenExperiences={marginBetweenExperiences}
							setMarginBetweenExperiences={setMarginBetweenExperiences}
							titleFontSize={titleFontSize}
							setTitleFontSize={setTitleFontSize}
							visibleExperiences={visibleExperiences}
							setVisibleExperiences={setVisibleExperiences}
						/>
					</div>
					<main className="main_section">
						{resumeData && (
							<ResumePDF
								resumeType={resumeType}
								resumeData={resumeData}
								defaultMarginBetweenExperiences={
									defaultMarginBetweenExperiences
								}
								marginBetweenExperiences={marginBetweenExperiences}
								titleFontSize={titleFontSize}
								visibleExperiences={visibleExperiences}
							/>
						)}
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
};
