import { NavLink } from "react-router";
import { ExternalLinkIcon } from "@src/components/icons/ExternalLinkIcon";
import { CopyRightText } from "@src/components/Footer/CopyRightText";

export const Footer = () => {
	return (
		<footer>
			<div className="footer_navigation_items_container">
				<div className="footer_item">
					<NavLink
						className={({ isActive }) =>
							isActive ? "internal_link active_nav_link" : "internal_link"
						}
						end
						to={"/"}
					>
						Projects
					</NavLink>
				</div>
				<div className="footer_item">
					<NavLink
						className={({ isActive }) =>
							isActive ? "internal_link active_nav_link" : "internal_link"
						}
						end
						to={"/about"}
					>
						About
					</NavLink>
				</div>
				<div className="footer_item">
					<NavLink
						className={({ isActive }) =>
							isActive ? "internal_link active_nav_link" : "internal_link"
						}
						end
						to={"/resume"}
					>
						Resumé
					</NavLink>
				</div>
				<div className="footer_item">
					<NavLink
						className={({ isActive }) =>
							isActive ? "internal_link active_nav_link" : "internal_link"
						}
						end
						to={"/contact"}
					>
						Contact
					</NavLink>
				</div>
				<div className="footer_item">
					<a
						className="external_link"
						href="https://www.linkedin.com/in/maxnelson88/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn&nbsp;
						<ExternalLinkIcon />
					</a>
				</div>
				<div className="footer_item">
					<a
						className="external_link"
						href="https://twitter.com/modularmoon"
						target="_blank"
						rel="noreferrer"
					>
						Twitter&nbsp;
						<ExternalLinkIcon />
					</a>
				</div>
			</div>
			<div className="footer_item_copyright">
				<CopyRightText />
			</div>
		</footer>
	);
};
