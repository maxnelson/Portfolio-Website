import { ResumeControlMarginBetweenExperiences } from "@src/components/Resume/ResumeControls/ResumeControlMarginBetweenExperiences";

export const ResumeControls = (props) => {
	return (
		<>
			<div
				style={{
					border: "1px solid black",
					borderRadius: "4px",
					marginTop: "3rem"
				}}>
				<div
					style={{
						borderBottom: "1px solid black",
						padding: "1rem",
						backgroundColor: "#efefef",
						borderTopRightRadius: "4px",
						borderTopLeftRadius: "4px"
					}}>
					<p>Customize Resume</p>
				</div>
				<ResumeControlMarginBetweenExperiences
					setMarginBetweenExperiences={props.setMarginBetweenExperiences}
				/>
			</div>
		</>
	);
};
