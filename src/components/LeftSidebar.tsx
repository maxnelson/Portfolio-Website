import { Link } from "react-router-dom";

export const LeftSidebar = () => {
  return (
    <div className="left_sidebar">
      <ul className="left_sidebar_navigation_link_ul">
        <li className="left_sidebar_navigation_link_li">
          <Link to={"/"} className="left_sidebar_navigation_link">
            Projects
          </Link>
        </li>
        <li className="left_sidebar_navigation_link_li">
          <Link to={"/about"} className="left_sidebar_navigation_link">
            About
          </Link>
        </li>
        <li className="left_sidebar_navigation_link_li">
          <Link to={"/resume"} className="left_sidebar_navigation_link">
            Resumé
          </Link>
        </li>
        <li className="left_sidebar_navigation_link_li">
          <Link to={"/timeline"} className="left_sidebar_navigation_link">
            Timeline
          </Link>
        </li>
        <li className="left_sidebar_navigation_link_li">
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
