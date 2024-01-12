import { useEffect, useState, useRef, forwardRef } from "react";
import { DropdownItem } from "@/components/DropdownItem";

export const Dropdown = forwardRef((props, ref) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const button_position_x = parseInt(
      props.buttonRef.current.getBoundingClientRect().x
    );
    const x_offset =
      window.innerWidth -
      (button_position_x + dropdownRef.current.offsetWidth) -
      10;
    const x_offset_arrow_box =
      dropdownRef.current.clientWidth -
      (window.innerWidth - button_position_x) +
      props.buttonRef.current.getBoundingClientRect().width / 3 +
      10;
    if (
      button_position_x + dropdownRef.current.offsetWidth >
      window.innerWidth
    ) {
      dropdownRef.current.style.left = x_offset + "px";
    }
    dropdownRef.current.querySelectorAll(".arrow_box")[0].style.marginLeft =
      x_offset_arrow_box + "px";
  }, [props.buttonRef, dropdownRef]);
  return (
    <div ref={dropdownRef} className="dropdown_menu_container">
      <div className="arrow_box"></div>
      {props.items.map((item, index) => (
        <DropdownItem
          key={index}
          reactRouterURL={item.reactRouterURL}
          text={item.text}
          clickHandler={item.clickHandler}
        />
      ))}
    </div>
  );
});
