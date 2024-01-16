import { Link } from "react-router-dom";
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
    fontSize: "12px",
  },
  footer_item: {
    marginRight: "0rem",
    color: "black",
    //fontWeight: "300",
  },
  footer_item_copyright: {
    marginLeft: "1rem",
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
          <Link to={"/"}>Home</Link>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <Link to={"/about"}>About</Link>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <Link to={"/resume"}>Resumé</Link>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <Link to={"/timeline"}>Timeline</Link>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <a href="https://quidbroquo.com" target="_blank">
            Blog
          </a>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <a href="https://www.linkedin.com/in/maxnelson88/" target="_blank">
            LinkedIn
          </a>
        </div>
        <div style={styles.footer_item} className="footer_item">
          <a href="https://twitter.com/modularmoon" target="_blank">
            Twitter
          </a>
        </div>
        <div
          style={styles.footer_item_copyright}
          className="footer_item_copyright"
        >
          <p>© 2024</p>
        </div>
      </div>
    </footer>
  );
};
