import { NavLink } from "react-router-dom";
import { SketchblogSidebarSectionComponent } from "@/sketchblog/SketchblogSidebarSectionComponent";
export function SketchblogSidebar(props) {
  return (
    <>
      <div className="display-inline-block  sketchblog_sidebar position-sticky top-100px height-fit-content">
        <hr className="sketchblog_post_hr" />
        <ul>
          <SketchblogSidebarSectionComponent name="Engineering">
            <li>
              <NavLink
                onClick={() => {
                  props.setCategory("css");
                  window.scrollTo(0, 0);
                }}
                className={({ isActive }) =>
                  "font-size-9pt" + (isActive ? " active_nav_link" : "")
                }
                to="/sketchblog/css"
              >
                CSS
              </NavLink>
            </li>
          </SketchblogSidebarSectionComponent>
          <SketchblogSidebarSectionComponent name="Design">
            <li>
              <NavLink
                onClick={() => {
                  props.setCategory("design");
                  window.scrollTo(0, 0);
                }}
                className={({ isActive }) =>
                  "font-size-9pt" + (isActive ? " active_nav_link" : "")
                }
                to="/sketchblog/design"
              >
                design
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  props.setCategory("schoolwork");
                  window.scrollTo(0, 0);
                }}
                className={({ isActive }) =>
                  "font-size-9pt" + (isActive ? " active_nav_link" : "")
                }
                to="/sketchblog/schoolwork"
              >
                schoolwork
              </NavLink>
            </li>
          </SketchblogSidebarSectionComponent>
          <SketchblogSidebarSectionComponent name="Art">
            <li>
              <NavLink
                onClick={() => {
                  props.setCategory("drawings");
                  window.scrollTo(0, 0);
                }}
                className={({ isActive }) =>
                  "font-size-9pt" + (isActive ? " active_nav_link" : "")
                }
                to="/sketchblog/drawings"
              >
                drawings
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  props.setCategory("digital_art");
                  window.scrollTo(0, 0);
                }}
                className={({ isActive }) =>
                  "font-size-9pt" + (isActive ? " active_nav_link" : "")
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
                  "font-size-9pt" + (isActive ? " active_nav_link" : "")
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
                  "font-size-9pt" + (isActive ? " active_nav_link" : "")
                }
                to="/sketchblog/comics"
              >
                comics
              </NavLink>
            </li>
          </SketchblogSidebarSectionComponent>

          <li className="margin-top-3rem">
            <NavLink
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                "font-size-9pt" + (isActive ? " active_nav_link" : "")
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
