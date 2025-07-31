import { NavLink } from "react-router-dom";
import { SketchblogSidebarSectionComponent } from "@src/sketchblog/SketchblogSidebarSectionComponent";
import { ChevronLeftIcon } from "@src/components/icons/ChevronLeftIcon";

export function SketchblogSidebar(props) {
	return (
		<>
			<div className="sketchblog_sidebar">
				<hr className="sketchblog_post_hr" />
				<aside>
					<SketchblogSidebarSectionComponent name="Engineering">
						<section>
							<NavLink
								onClick={() => {
									props.setCategory("css");
									window.scrollTo(0, 0);
								}}
								className={({ isActive }) =>
									"_font-size--9pt" + (isActive ? " active_nav_link" : "")
								}
								to="/sketchblog/css">
								CSS
							</NavLink>
						</section>
					</SketchblogSidebarSectionComponent>
					<SketchblogSidebarSectionComponent name="Design">
						<section>
							<NavLink
								onClick={() => {
									props.setCategory("design");
									window.scrollTo(0, 0);
								}}
								className={({ isActive }) =>
									"_font-size--9pt" + (isActive ? " active_nav_link" : "")
								}
								to="/sketchblog/design">
								design
							</NavLink>
						</section>
						<section>
							<NavLink
								onClick={() => {
									props.setCategory("schoolwork");
									window.scrollTo(0, 0);
								}}
								className={({ isActive }) =>
									"_font-size--9pt" + (isActive ? " active_nav_link" : "")
								}
								to="/sketchblog/schoolwork">
								schoolwork
							</NavLink>
						</section>
					</SketchblogSidebarSectionComponent>
					<SketchblogSidebarSectionComponent name="Art">
						<section>
							<NavLink
								onClick={() => {
									props.setCategory("drawings");
									window.scrollTo(0, 0);
								}}
								className={({ isActive }) =>
									"_font-size--9pt" + (isActive ? " active_nav_link" : "")
								}
								to="/sketchblog/drawings">
								drawings
							</NavLink>
						</section>
						<section>
							<NavLink
								onClick={() => {
									props.setCategory("digital_art");
									window.scrollTo(0, 0);
								}}
								className={({ isActive }) =>
									"_font-size--9pt" + (isActive ? " active_nav_link" : "")
								}
								to="/sketchblog/digital_art">
								digital art
							</NavLink>
						</section>
						<section>
							<NavLink
								onClick={() => {
									props.setCategory("mixed_media");
									window.scrollTo(0, 0);
								}}
								className={({ isActive }) =>
									"_font-size--9pt" + (isActive ? " active_nav_link" : "")
								}
								to="/sketchblog/mixed_media">
								mixed media
							</NavLink>
						</section>
						<section>
							<NavLink
								onClick={() => {
									props.setCategory("comics");
									window.scrollTo(0, 0);
								}}
								className={({ isActive }) =>
									"_font-size--9pt" + (isActive ? " active_nav_link" : "")
								}
								to="/sketchblog/comics">
								comics
							</NavLink>
						</section>
					</SketchblogSidebarSectionComponent>

					<section className="_margin-top--3rem">
						<NavLink
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className={({ isActive }) =>
								"_font-size--9pt" + (isActive ? " active_nav_link" : "")
							}
							end
							to="/">
							<div
								style={{
									display: "inline-block",
									verticalAlign: "sub",
									marginRight: "6px"
								}}>
								<ChevronLeftIcon size="8px" />
								<ChevronLeftIcon size="8px" />
							</div>
							Back to Portfolio
						</NavLink>
					</section>
				</aside>
			</div>
		</>
	);
}
