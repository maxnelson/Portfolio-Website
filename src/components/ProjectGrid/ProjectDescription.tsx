import { ChevronLeftIcon } from "@src/components/icons/ChevronLeftIcon";

export const ProjectDescription = (props) => {
	const policy = window.trustedTypes.defaultPolicy;
	const html = policy?.createHTML(props.projectData?.description);
	return (
		<div className="project_description_container">
			<div className="project_description_container_images">
				{props.projectData?.image1 ? (
					<img
						loading="lazy"
						alt="Project detail image"
						src={props.projectData?.image1}
					></img>
				) : null}
				{props.projectData?.image2 ? (
					<img
						loading="lazy"
						alt="Project detail image"
						src={props.projectData?.image2}
					></img>
				) : null}
				{props.projectData?.image3 ? (
					<img
						loading="lazy"
						alt="Project detail image"
						src={props.projectData?.image3}
					></img>
				) : null}
				{props.projectData?.image4 ? (
					<img
						loading="lazy"
						alt="Project detail image"
						src={props.projectData?.image4}
					></img>
				) : null}
			</div>
			<div className="project_description_text_container _word-wrap--break-word">
				{props.projectData?.clientName && (
					<div className="_margin-bottom--1rem">
						<h3>{props.projectData?.clientName}</h3>
						<p
							style={{
								fontSize: "12pt",
								marginTop: "0",
								marginBottom: "0"
							}}
						>
							{props.projectData?.jobTitle}
						</p>
						<span>
							{props.projectData?.startDateMonth &&
								props.projectData?.startDateMonth}
							{props.projectData?.startDateYear &&
								" " + props.projectData?.startDateYear}
							{props.projectData?.endDateYear && " - "}
							{props.projectData?.endDateMonth &&
								props.projectData?.endDateMonth}
							{props.projectData?.endDateYear &&
								" " + props.projectData?.endDateYear}
						</span>
					</div>
				)}
				<div
					dangerouslySetInnerHTML={{
						__html: html
					}}
				></div>

				<div className="back-button">
					<a href="/">
						<ChevronLeftIcon size="10px" />
						<ChevronLeftIcon size="10px" />
					</a>
				</div>
			</div>
		</div>
	);
};
