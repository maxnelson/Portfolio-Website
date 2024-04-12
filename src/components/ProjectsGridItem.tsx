export const ProjectGridItem = ({ data_object, clickHandler }) => {
  return (
    <div className="project_grid_item" onClick={clickHandler}>
      <img src={data_object.image_0}></img>
      <div className="project_grid_item_overlay">
        <div className="project_grid_item_overlay_text project_grid_item_overlay_text_top">
          <h3>
            {data_object.client_name}
            {/*<>
            data_object.popoverDescription || data_object.description1
            <br />
            data_object.startDateYear &&
              data_object.startDateYear + " - " + data_object.endDateYear
  </>*/}
          </h3>
        </div>
        <div className="project_grid_item_overlay_text project_grid_item_overlay_text_bottom">
          {data_object.startDateYear &&
            data_object.startDateYear + " - " + data_object.endDateYear}
        </div>
      </div>
    </div>
  );
};
