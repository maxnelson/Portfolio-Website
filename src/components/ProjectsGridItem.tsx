export const ProjectGridItem = ({ ...props }) => {
  return (
    <div className="project_grid_item" onClick={props.clickHandler}>
      <img src={props.image}></img>
      <div className="project_grid_item_overlay">
        <div className="project_grid_item_overlay_text project_grid_item_overlay_text_top">
          <h3>{props.client_name}</h3>
        </div>
        <div className="project_grid_item_overlay_text project_grid_item_overlay_text_bottom">
          <p>{props.duration_text}</p>
        </div>
      </div>
    </div>
  );
};
