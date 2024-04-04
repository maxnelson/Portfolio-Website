import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_items_container">
        <div className="display-inline-block">
          <div className="footer_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "internal_link active_nav_link" : "internal_link"
              }
              end
              to={"/"}
            >
              Projects
            </NavLink>
          </div>
          <div className="footer_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "internal_link active_nav_link" : "internal_link"
              }
              end
              to={"/about"}
            >
              About
            </NavLink>
          </div>
          <div className="footer_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "internal_link active_nav_link" : "internal_link"
              }
              end
              to={"/resume"}
            >
              Resumé
            </NavLink>
          </div>
          <div className="footer_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "internal_link active_nav_link" : "internal_link"
              }
              end
              to={"/contact"}
            >
              Contact
            </NavLink>
          </div>
          <div className="footer_item">
            <a
              className="external_link"
              href="https://www.linkedin.com/in/maxnelson88/"
              target="_blank"
            >
              LinkedIn<i className="fas fa-external-link"></i>
            </a>
          </div>
          <div className="footer_item">
            <a
              className="external_link"
              href="https://twitter.com/modularmoon"
              target="_blank"
            >
              Twitter<i className="fas fa-external-link"></i>
            </a>
          </div>
        </div>
        <div className="footer_item_copyright">
          <p>Max Nelson © 2024</p>
        </div>
      </div>
    </footer>
  );
};
