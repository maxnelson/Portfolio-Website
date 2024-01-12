export const ProjectDescription = ({ ...props }) => {
  const clickHandler = () => {
    console.log("back button");
  };
  return (
    <div className="project_description_container">
      <img src={props.image}></img>
      <div className="project_description_text_container">
        <div className="position-relative">
          <h2 className="display-inline-block">
            {props.client_name} – {props.title}
          </h2>
          <span className="display-inline-block margin-left-1">
            ({props.duration_text})
          </span>
          <div className="back-button" onClick={props.set_description_false}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <hr />
        </div>
        <div className="project_description_text">{props.description}</div>
      </div>
    </div>
  );
};
