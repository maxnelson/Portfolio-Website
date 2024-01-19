import { useRef, useState } from "react";
import { HeaderButton } from "@/components/HeaderButton";
import { Dropdown } from "@/components/Dropdown";

export const Header = () => {
  const utilityButtonRef = useRef(null);
  const utilityDropDownRef = useRef(null);
  const [utilityDropdownOpen, setUtilityDropdownOpen] = useState(false);
  const utilityDropdownItems = [
    {
      text: "Home",
      clickHandler: () => {
        console.log("hello world");
      },
    },
    {
      text: "About",
      clickHandler: () => console.log("Item 2 clicked"),
    },
    { text: "Resumé", clickHandler: () => console.log("Item 3 clicked") },
  ];

  const handleClickUtilityButton = () => {
    setUtilityDropdownOpen(!utilityDropdownOpen);
  };
  return (
    <header>
      <div className="header_content_container">
        <h1>
          <a href="/" className="color-white">
            Max Nelson
          </a>
        </h1>
        <div>
          <div className="header_button_container">
            <HeaderButton
              ref={utilityButtonRef}
              className="header_button_icon"
              icon="+"
              handleClick={handleClickUtilityButton}
            />
            {utilityDropdownOpen ? (
              <Dropdown
                items={utilityDropdownItems}
                buttonRef={utilityButtonRef}
                ref={utilityDropDownRef}
              />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};
