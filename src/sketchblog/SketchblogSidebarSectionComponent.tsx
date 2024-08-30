import { useState } from "react";

export function SketchblogSidebarSectionComponent({ name, children }) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <li
        className=""
        onClick={() => {
          console.log(children);
          setIsVisible(!isVisible);
        }}
      >
        <a className="_display--block">
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
      {isVisible && <ul className="_margin-left--1rem">{children}</ul>}
    </>
  );
}
