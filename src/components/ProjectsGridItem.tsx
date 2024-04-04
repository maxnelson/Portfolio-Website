export const ProjectGridItem = ({ data_object, clickHandler }) => {
  return (
    <div className="project_grid_item" onClick={clickHandler}>
      <img src={data_object.image_0}></img>
      <div className="project_grid_item_overlay">
        <div className="project_grid_item_overlay_text project_grid_item_overlay_text_top">
          <p>
            {data_object.popoverDescription || data_object.description1}
            <br />
            {data_object.startDateYear &&
              data_object.startDateYear + " - " + data_object.endDateYear}
          </p>
        </div>
      </div>
    </div>
  );
};
