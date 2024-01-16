import { Link } from "react-router-dom";
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
    color: "black",
  },
  left_sidebar_image_li: {
    marginBottom: "1rem",
  },
  left_sidebar_image: {
    width: "10rem",
    maxWidth: "10rem",
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
          <Link to={"/"}>
            <img
              style={styles.left_sidebar_image}
              src="/public/images/icons/rocket_hands_logo.jpg"
            />
          </Link>
        </li>
        <li
          className="left_sidebar_navigation_link_container"
          style={styles.left_sidebar_li}
        >
          <Link to={"/about"} className="left_sidebar_navigation_link">
            About
          </Link>
        </li>
        <li
          className="left_sidebar_navigation_link_container"
          style={styles.left_sidebar_li}
        >
          <Link to={"/resume"} className="left_sidebar_navigation_link">
            Resumé
          </Link>
        </li>
        <li
          className="left_sidebar_navigation_link_container"
          style={styles.left_sidebar_li}
        >
          <Link to={"/timeline"} className="left_sidebar_navigation_link">
            Timeline
          </Link>
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
