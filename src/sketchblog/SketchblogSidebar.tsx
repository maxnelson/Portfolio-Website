import { NavLink } from "react-router-dom";
export function SketchblogSidebar(props) {
  return (
    <>
      <div className="sketchblog_sidebar">
        <hr className="sketchblog_post_hr" />
        <ul>
          <li>
            <NavLink
              onClick={() => {
                props.setCategory("drawings");
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              to="/sketchblog/drawings"
            >
              drawings
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setCategory("design");
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              to="/sketchblog/design"
            >
              design
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setCategory("digital_art");
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              to="/sketchblog/digital_art"
            >
              digital art
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setCategory("mixed_media");
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              to="/sketchblog/mixed_media"
            >
              mixed media
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setCategory("comics");
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              to="/sketchblog/comics"
            >
              comics
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setCategory("schoolwork");
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              to="/sketchblog/schoolwork"
            >
              schoolwork
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              end
              to="/"
            >
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-left"></i> Back to Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
