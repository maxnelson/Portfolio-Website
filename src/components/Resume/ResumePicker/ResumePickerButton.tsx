export const ResumePickerButton = (props) => {
  const clickHandler = () => {
    props.setResumeType(props.type);
  };
  console.log(props);
  return (
    <>
      <button
        className={
          "resumeSelectorButton " + (props.active ? "resumeTypeActive" : "")
        }
        onClick={clickHandler}
      >
        {props.text}
      </button>
    </>
  );
};
