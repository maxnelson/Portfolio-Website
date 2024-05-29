import { NavLink } from "react-router-dom";

export const LeftSidebar = ({ setProjectDescriptionVisible }) => {
  return (
    <div className="sidebar display-inline-block">
      <ul>
        <li className="sidebar_navigation_link_container_img cursor_pointer">
          <NavLink
            onClick={() => setProjectDescriptionVisible(false)}
            className={({ isActive }) =>
              "sidebar_navigation_link_image" +
              (isActive ? " active_nav_image" : "")
            }
            end
            to={"/"}
          >
            <img src="/images/icons/rocket_hands_logo.jpg" />
          </NavLink>
        </li>

        <li className="sidebar_navigation_link_container cursor_pointer">
          <NavLink
            className={({ isActive }) =>
              "sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
            }
            end
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li className="sidebar_navigation_link_container cursor_pointer">
          <NavLink
            className={({ isActive }) =>
              "sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
            }
            end
            to={"/resume"}
          >
            Resumé
          </NavLink>
        </li>
        <li className="sidebar_navigation_link_container cursor_pointer">
          <NavLink
            className={({ isActive }) =>
              "sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
            }
            end
            to={"/sketchblog/design"}
          >
            Design Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
