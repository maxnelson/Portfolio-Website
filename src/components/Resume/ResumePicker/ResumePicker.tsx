import { ResumePickerButton } from "#src/components/Resume/ResumePicker/ResumePickerButton";
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
        <p className="resumeSelectorButtonSeparator">|</p>
        <ResumePickerButton
          type="full"
          text="Multi Page (Full)"
          active={props.resumeType === "full"}
          setResumeType={props.setResumeType}
        />
      </div>
    </>
  );
};
