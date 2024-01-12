import { Link } from "react-router-dom";

export function DropdownItem({ text, clickHandler, reactRouterURL }) {
  return (
    <>
      {reactRouterURL ? (
        <div className="dropdown_menu_container_item">
          <Link to={reactRouterURL}>{text}</Link>
        </div>
      ) : (
        <div onClick={clickHandler} className="dropdown_menu_container_item">
          <a>{text}</a>
        </div>
      )}
    </>
  );
}
