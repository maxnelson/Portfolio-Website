import { useState } from "react";

export function SketchblogSidebarSectionComponent({ name, children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <li
        className=""
        onClick={() => {
          console.log(children);
          setIsVisible(!isVisible);
        }}
      >
        <a className="display-block">
          <span
            className={
              "sidebar_section_container_arrow " +
              (isVisible ? "rotateDown" : "")
            }
          >
            &#9654;
          </span>
          {name}
        </a>
      </li>
      {isVisible && <ul className="margin-left-1rem">{children}</ul>}
    </>
  );
}
