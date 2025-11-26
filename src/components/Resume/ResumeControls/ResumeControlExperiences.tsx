export const ResumeControlExperiences = (props) => {
	const jobs = [
		"timeline",
		"datafinity_group",
		"apple",
		"aquent",
		"rubrik",
		"apple_bizweb",
		"cloudera",
		"levi_strauss",
		"numi_tea",
		"strings_magazine",
		"autumn_press",
		"the_orion",
		"trucker_deluxe"
	];

	const handleCheckboxChange = (value: string) => {
		props.setVisibleExperiences((prev) => {
			return prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
		});
	};

	return (
		<>
			<div>
				<p
					style={{
						color: "#aaa",
						display: "block",
						marginBottom: "10px"
					}}>
					Experiences:
				</p>
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
					checked={props.visibleExperiences.includes(props.experienceName)}
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
