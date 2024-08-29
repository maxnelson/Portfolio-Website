export function SketchblogFooter() {
  return (
    <div className="width-100-percent margin-top-5rem margin-bottom-5rem">
      <hr className="sketchblog_post_hr" />
      <div>
        <p className="font-size-10pt color-aaa">
          <a className="font-size-10pt cursor-pointer" href="/sketchblog">
            Home
          </a>
          {" • "}
          <a className="font-size-10pt cursor-pointer" href="/about">
            About
          </a>
          {" • "}
          <a className="font-size-10pt cursor-pointer testthis" href="/contact">
            Contact
          </a>
          {" • "}
          Max Nelson © 2024
        </p>
      </div>
    </div>
  );
}
