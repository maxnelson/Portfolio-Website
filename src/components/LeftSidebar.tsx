import { NavLink } from "react-router-dom";

export const LeftSidebar = ({ setProjectDescriptionVisible }) => {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar_navigation_link_container_img">
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

        <li className="sidebar_navigation_link_container">
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
        <li className="sidebar_navigation_link_container">
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
        <li className="sidebar_navigation_link_container">
          <NavLink
            className={({ isActive }) =>
              "sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
            }
            end
            to={"/sketchblog/design"}
          >
            Sketchblog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
