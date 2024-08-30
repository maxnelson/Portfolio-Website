export function SketchblogFooter() {
  return (
    <div className="_width--100percent _margin-top--5rem _margin-bottom--5rem">
      <hr className="sketchblog_post_hr" />
      <div>
        <p className="_font-size--10pt color-aaa">
          <a className="_font-size--10pt _cursor--pointer" href="/sketchblog">
            Home
          </a>
          {" • "}
          <a className="_font-size--10pt _cursor--pointer" href="/about">
            About
          </a>
          {" • "}
          <a
            className="_font-size--10pt _cursor--pointer testthisoutagain3333"
            href="/contact"
          >
            Contact
          </a>
          {" • "}
          Max Nelson © 2024
        </p>
      </div>
    </div>
  );
}
