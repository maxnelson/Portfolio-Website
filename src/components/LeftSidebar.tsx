import { NavLink } from "react-router-dom";
import { RocketHandsLogo } from "@src/components/icons/RocketHandsLogo";

export const LeftSidebar = () => {
	return (
		<>
			<aside>
				<section className="sidebar_navigation_link_container_img cursor_pointer">
					<NavLink
						className={({ isActive }) =>
							"sidebar_navigation_link_image" +
							(isActive ? " active_nav_image" : "")
						}
						end
						to={"/"}
					>
						<RocketHandsLogo customClassName="rocketHandsLogo" />
						<span className="screenReaderText">Home</span>
					</NavLink>
				</section>
				<section className="sidebar_navigation_link_container cursor_pointer">
					<NavLink
						className={({ isActive }) =>
							"sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
						}
						end
						to={"/about"}
					>
						About
					</NavLink>
				</section>
				<section className="sidebar_navigation_link_container cursor_pointer">
					<NavLink
						className={({ isActive }) =>
							"sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
						}
						end
						to={"/resume"}
					>
						Resumé
					</NavLink>
				</section>
				<section className="sidebar_navigation_link_container cursor_pointer">
					<NavLink
						className={({ isActive }) =>
							"sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
						}
						end
						to={"/sketchblog/css"}
					>
						Blog
					</NavLink>
				</section>
			</aside>
		</>
	);
};
