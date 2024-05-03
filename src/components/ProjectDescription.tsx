export const ProjectDescription = ({ data_object, clickHandler }) => {
  return (
    <div className="project_description_container">
      <div className="project_description_container_images">
        <img src={data_object.image_1}></img>
        <img src={data_object.image_2}></img>
        <img src={data_object.image_3}></img>
        <img src={data_object.image_4}></img>
        <img src={data_object.image_5}></img>
        <img src={data_object.image_6}></img>
        <img src={data_object.image_7}></img>
        <img src={data_object.image_8}></img>
      </div>
      <div className="project_description_text_container word-wrap-break-word">
        {data_object.client_name_detail && (
          <div className="margin-bottom-1rem">
            <h2>{data_object.jobTitle}</h2>
            <h3>{data_object.client_name_detail}</h3>
            <span>
              {data_object.startDateYear + " - " + data_object.endDateYear}
            </span>
          </div>
        )}
        <div>{data_object.descriptionFormatted}</div>
        <div className="back-button" onClick={clickHandler}>
          <i className="fa-solid fa-chevron-left"></i>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
    </div>
  );
};
