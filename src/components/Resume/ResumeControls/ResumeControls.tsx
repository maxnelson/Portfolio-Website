import { ResumeControlMarginBetweenExperiences } from "@src/components/Resume/ResumeControls/ResumeControlMarginBetweenExperiences";
import { ResumeControlTitleFontSize } from "@src/components/Resume/ResumeControls/ResumeControlTitleFontSize";
import { ResumeControlExperiences } from "@src/components/Resume/ResumeControls/ResumeControlExperiences";

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
				<div style={{ padding: "1rem" }}>
					<div style={{}}>
						<ResumeControlMarginBetweenExperiences
							defaultMarginBetweenExperiences={props.defaultMarginBetweenExperiences}
							setMarginBetweenExperiences={props.setMarginBetweenExperiences}
						/>
						<ResumeControlTitleFontSize setTitleFontSize={props.setTitleFontSize} />
					</div>
					{
						<ResumeControlExperiences
							visibleExperiences={props.visibleExperiences}
							setVisibleExperiences={props.setVisibleExperiences}
						/>
					}
				</div>
			</div>
		</>
	);
};
