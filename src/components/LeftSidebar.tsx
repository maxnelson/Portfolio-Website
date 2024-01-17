import { Link, NavLink } from "react-router-dom";
const styles = {
  left_sidebar: {
    borderTop: "2px solid black",
    paddingTop: "2rem",
  },
  left_sidebar_ul: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
  },
  left_sidebar_li: {
    fontSize: "12px",
    borderBottom: "1px solid #ccc",
  },
  left_sidebar_image: {
    display: "block",
    maxWidth: "10rem",
    paddingBottom: "1rem",
    //transition: "border-bottom 0.25s ease-in-out",
  },
};

export const LeftSidebar = () => {
  return (
    <div className="left_sidebar" style={styles.left_sidebar}>
      <ul style={styles.left_sidebar_ul}>
        <li
          className="left_sidebar_navigation_link_container_img"
          style={styles.left_sidebar_image_li}
        >
          <NavLink
            className={({ isActive }) =>
              "left_sidebar_navigation_link_image" +
              (isActive ? " active_nav_image" : "")
            }
            end
            to={"/"}
          >
            <img
              style={styles.left_sidebar_image}
              src="/public/images/icons/rocket_hands_logo.jpg"
            />
          </NavLink>
        </li>
        <li
          className="left_sidebar_navigation_link_container"
          style={styles.left_sidebar_li}
        >
          <NavLink
            className={({ isActive }) =>
              "left_sidebar_navigation_link" +
              (isActive ? " active_nav_link" : "")
            }
            end
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li
          className="left_sidebar_navigation_link_container"
          style={styles.left_sidebar_li}
        >
          <NavLink
            className={({ isActive }) =>
              "left_sidebar_navigation_link" +
              (isActive ? " active_nav_link" : "")
            }
            end
            to={"/resume"}
          >
            Resumé
          </NavLink>
        </li>
        <li
          className="left_sidebar_navigation_link_container"
          style={styles.left_sidebar_li}
        >
          <NavLink
            className={({ isActive }) =>
              "left_sidebar_navigation_link" +
              (isActive ? " active_nav_link" : "")
            }
            end
            to={"/timeline"}
          >
            Timeline
          </NavLink>
        </li>
        <li
          className="left_sidebar_navigation_link_container"
          style={styles.left_sidebar_li}
        >
          <a
            className="left_sidebar_navigation_link"
            href="https://www.quidbroquo.com"
            target="_blank"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};
