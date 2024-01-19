export const ProjectGridItem = ({ data_object, clickHandler }) => {
  return (
    <div className="project_grid_item" onClick={clickHandler}>
      <img src={data_object.image_1}></img>
      <div className="project_grid_item_overlay">
        <div className="project_grid_item_overlay_text project_grid_item_overlay_text_top">
          <h3>{data_object.client_name}</h3>
        </div>
        <div className="project_grid_item_overlay_text project_grid_item_overlay_text_bottom">
          <p>{data_object.yearDuration}</p>
        </div>
      </div>
    </div>
  );
};
