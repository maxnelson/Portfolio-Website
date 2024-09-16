import { NavLink } from "react-router-dom";

export const ProjectGridItem = (props) => {
  return (
    <>
      <NavLink to={"/project/" + props.projectDescriptionContentName}>
        <div
          className="project_grid_item aspect-ratio-1-1 _position--relative"
          onClick={props.clickHandler}
        >
          <img src={props.image1}></img>
          <div className="project_grid_item_overlay">
            <div className="project_grid_item_overlay_text project_grid_item_overlay_text_top">
              <h3>{props.clientName}</h3>
            </div>
            <div className="project_grid_item_overlay_text project_grid_item_overlay_text_bottom">
              {props.startDateYear && props.endDateYear
                ? props.startDateYear + " - " + props.endDateYear
                : props.startDateYear}
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
