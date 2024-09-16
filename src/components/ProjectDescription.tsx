export const ProjectDescription = (props) => {
  return (
    <div className="project_description_container">
      <div className="project_description_container_images">
        {props.data_object.image1 ? (
          <img src={props.data_object.image1}></img>
        ) : null}
        {props.data_object.image2 ? (
          <img src={props.data_object.image2}></img>
        ) : null}
        {props.data_object.image3 ? (
          <img src={props.data_object.image3}></img>
        ) : null}
        {props.data_object.image4 ? (
          <img src={props.data_object.image4}></img>
        ) : null}
      </div>
      <div className="project_description_text_container _word-wrap--break-word">
        {props.data_object.clientName && (
          <div className="_margin-bottom--1rem">
            <h3>{props.data_object.clientName}</h3>
            <p style={{ fontSize: "12pt", marginTop: "0", marginBottom: "0" }}>
              {props.data_object.jobTitle}
            </p>
            <span>
              {(props.data_object.startDateYear
                ? props.data_object.startDateMonth +
                  " " +
                  props.data_object.startDateYear
                : "") +
                (props.data_object.endDateYear
                  ? " - " +
                    props.data_object.endDateMonth +
                    " " +
                    props.data_object.endDateYear
                  : "")}
            </span>
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: props.data_object.description }}
        ></div>

        <div
          className="back-button"
          onClick={() => {
            props.setProjectDescriptionVisible(false);
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
    </div>
  );
};
