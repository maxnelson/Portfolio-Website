import { NavLink } from "react-router-dom";

export const LeftSidebar = ({ setProjectDescriptionVisible }) => {
	return (
		<>
			<aside>
				<section className="sidebar_navigation_link_container_img cursor_pointer">
					<NavLink
						onClick={() => setProjectDescriptionVisible(false)}
						className={({ isActive }) =>
							"sidebar_navigation_link_image" + (isActive ? " active_nav_image" : "")
						}
						end
						to={"/"}>
						<img
							className="rocketHandsLogo"
							alt="Rocket Hands Logo"
							src="/images/logos/rocket_hands_logo.jpg"
						/>
					</NavLink>
				</section>
				<section className="sidebar_navigation_link_container cursor_pointer">
					<NavLink
						className={({ isActive }) =>
							"sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
						}
						end
						to={"/about"}>
						About
					</NavLink>
				</section>
				<section className="sidebar_navigation_link_container cursor_pointer">
					<NavLink
						className={({ isActive }) =>
							"sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
						}
						end
						to={"/resume"}>
						Resumé
					</NavLink>
				</section>
				<section className="sidebar_navigation_link_container cursor_pointer">
					<NavLink
						className={({ isActive }) =>
							"sidebar_navigation_link" + (isActive ? " active_nav_link" : "")
						}
						end
						to={"/sketchblog/css"}>
						Blog
					</NavLink>
				</section>
			</aside>
		</>
	);
};
