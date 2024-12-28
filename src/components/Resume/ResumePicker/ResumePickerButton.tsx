import { NavLink } from "react-router-dom";

export const ResumePickerButton = (props) => {
  const clickHandler = () => {
    props.setResumeType(props.type);
  };
  console.log("ResumePickerButton");
  console.log(props);
  return (
    <>
      <NavLink to={"/resume/" + props.type}>
        <button className={"resumeSelectorButton " + (props.active ? "resumeTypeActive" : "")} onClick={clickHandler}>
          {props.text}
        </button>
      </NavLink>
    </>
  );
};
