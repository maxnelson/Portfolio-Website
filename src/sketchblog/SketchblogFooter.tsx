import { CopyRightText } from "@src/components/Footer/CopyRightText";

export function SketchblogFooter() {
	return (
		<footer className="sketchblogFooterContainer">
			<hr className="sketchblog_post_hr" />
			<div>
				<p className="_font-size--10pt _color--var_gray-125_">
					<a
						className="_font-size--10pt _cursor--pointer"
						href="/sketchblog">
						Home
					</a>
					{" • "}
					<a
						className="_font-size--10pt _cursor--pointer"
						href="/about">
						About
					</a>
					{" • "}
					<a
						className="_font-size--10pt _cursor--pointer"
						href="/contact">
						Contact
					</a>
					{" • "}
					<CopyRightText />
				</p>
			</div>
		</footer>
	);
}
