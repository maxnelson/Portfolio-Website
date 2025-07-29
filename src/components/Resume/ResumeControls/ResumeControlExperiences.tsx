export const ResumeControlExperiences = (props) => {
	const jobs = [
		"timeline",
		"datafinity",
		"apple",
		"aquent",
		"rubrik",
		"cloudera",
		"levis",
		"numi",
		"strings",
		"orion",
		"trucker"
	];

	const handleCheckboxChange = (value: string) => {
		props.setVisibleExperiences((prev) =>
			prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
		);
		console.log(props.visibleExperiences);
	};

	return (
		<>
			<div>
				<label
					style={{
						color: "#aaa",
						display: "block",
						lineHeight: "0",
						marginBottom: "10px"
					}}>
					Experiences:
				</label>
				<hr className="resume_control_hr" />
				{jobs.map((element, index) => {
					return (
						<ResumeControlExperienceCheckbox
							key={element}
							experienceName={element}
							handleChange={handleCheckboxChange}
							visibleExperiences={props.visibleExperiences}
						/>
					);
				})}
			</div>
		</>
	);
};

export const ResumeControlExperienceCheckbox = (props) => {
	return (
		<>
			<div className="resume_control_experience_checkbox_container">
				<input
					className="resume_control_experience_checkbox"
					type="checkbox"
					id={props.experienceName}
					name={props.experienceName}
					value={props.experienceName}
					defaultChecked={props.visibleExperiences.includes(props.experienceName)}
					onChange={() => {
						props.handleChange(props.experienceName);
					}}
				/>
				<label
					htmlFor={props.experienceName}
					className="resume_control_experience_checkbox_label">
					{props.experienceName}
				</label>
			</div>
		</>
	);
};
