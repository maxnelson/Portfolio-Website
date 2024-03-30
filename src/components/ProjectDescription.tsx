export const ProjectDescription = ({ data_object, clickHandler }) => {
  return (
    <div className="project_description_container">
      <div className="project_description_container_images">
        <img src={data_object.image_1}></img>
        <img src={data_object.image_2}></img>
        <img src={data_object.image_3}></img>
      </div>
      <div className="project_description_text_container">
        {data_object.client_name_detail && (
          <div>
            <h2>
              {data_object.client_name_detail}
              {data_object.jobTitle && " – " + data_object.jobTitle}
            </h2>
            <span>{data_object.yearDuration}</span>
          </div>
        )}
        <div className={data_object.client_name_detail && "padding-top-1"}>
          {data_object.descriptionFormatted}
        </div>
        <div className="back-button" onClick={clickHandler}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
    </div>
  );
};
