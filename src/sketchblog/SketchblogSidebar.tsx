import { NavLink } from "react-router-dom";
export function SketchblogSidebar(props) {
  return (
    <>
      <div className="sketchblog_sidebar">
        <hr className="sketchblog_post_hr" />
        <ul>
          <li>
            <NavLink
              onClick={() => props.setCategory("drawings")}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              end
              to="/sketchblog/drawings"
            >
              drawings
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => props.setCategory("design")}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              end
              to="/sketchblog/design"
            >
              design
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => console.log("clicked")}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              end
              to="/sketchblog/digtal_art"
            >
              digital art
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => console.log("clicked")}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              end
              to="/sketchblog/comics"
            >
              comics
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => console.log("clicked")}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              end
              to="/sketchblog/schoolwork"
            >
              schoolwork
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              onClick={() => console.log("clicked")}
              className={({ isActive }) =>
                "sketchblog_sidebar_link" + (isActive ? " active_nav_link" : "")
              }
              end
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
