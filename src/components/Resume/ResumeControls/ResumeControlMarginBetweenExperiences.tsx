export const ResumeControlMarginBetweenExperiences = (props) => {
	return (
		<>
			<div
				style={{
					marginBottom: "1rem"
				}}
			>
				<div>
					<label
						htmlFor="marginBetweenExperiencesSlider"
						style={{ color: "#aaa", marginBottom: "5px", display: "block" }}
					>
						Margin between experiences:
					</label>
					<input
						type="range"
						id="marginBetweenExperiencesSlider"
						name="marginBetweenExperiencesSlider"
						min="0"
						max="10"
						step="1"
						defaultValue={props.defaultMarginBetweenExperiences}
						style={{ width: "100%", cursor: "pointer" }}
						onChange={(event) =>
							props.setMarginBetweenExperiences(event?.target.value)
						}
					></input>
				</div>
			</div>
		</>
	);
};
