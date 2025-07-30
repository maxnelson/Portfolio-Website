import { ResumePickerButton } from "@src/components/Resume/ResumePicker/ResumePickerButton";
export const ResumePicker = (props) => {
	return (
		<>
			<div className="resumeSelectorContainer">
				<ResumePickerButton
					type="single"
					text="Single Page (Abridged)"
					active={props.resumeType === "single"}
					setResumeType={props.setResumeType}
				/>
			</div>
		</>
	);
};
