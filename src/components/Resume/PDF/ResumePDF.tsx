import { SinglePageResume } from "@src/components/Resume/PDF/SinglePageResume";
import { MultiPageResume } from "@src/components/Resume/PDF/MultiPageResume";

export const ResumePDF = (props) => {
	return (
		<>
			{props.resumeType === "single" ? (
				<SinglePageResume
					resumeData={props.resumeData}
					marginBetweenExperiences={props.marginBetweenExperiences}
					titleFontSize={props.titleFontSize}
					visibleExperiences={props.visibleExperiences}
				/>
			) : (
				<MultiPageResume resumeData={props.resumeData} />
			)}
		</>
	);
};
