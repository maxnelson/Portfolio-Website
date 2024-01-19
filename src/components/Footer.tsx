import { NavLink } from "react-router-dom";
const styles = {
  footer: {
    marginTop: "1rem",
    marginLeft: "15rem",
    marginRight: "15rem",
    marginBottom: "2rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    fontSize: "14px",
  },
  footer_item: {
    marginRight: "0rem",
    color: "black",
    //fontWeight: "300",
  },
  footer_item_copyright: {
    marginLeft: "1rem",
    flexGrow: "1",
    color: "#aaa",
    textAlign: "right",
  },

  footer_items_container: {
    display: "flex",
    paddingLeft: "1rem",
  },
};

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div
        style={styles.footer_items_container}
        className="footer_items_container"
      >
        <div style={styles.footer_item} className="footer_item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "internal_link active_nav_link" : "internal_link"
            }
            end
            to={"/"}
          >
            Home
          </NavLink>
        </div>
        <div style={styles.footer_item} className="footer_item">
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
        <div style={styles.footer_item} className="footer_item">
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
        <div style={styles.footer_item} className="footer_item ">
          <a className={"internal_link disabled"}>Timeline</a>
        </div>
        <div style={styles.footer_item} className="footer_item">
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
        <div style={styles.footer_item} className="footer_item">
          <a
            className="external_link"
            href="https://www.linkedin.com/in/maxnelson88/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <a
            className="external_link"
            href="https://twitter.com/modularmoon"
            target="_blank"
          >
            Twitter
          </a>
        </div>
        <div
          style={styles.footer_item_copyright}
          className="footer_item_copyright"
        >
          <p>Max Nelson © 2024</p>
        </div>
      </div>
    </footer>
  );
};
