export const ResumeControlTitleFontSize = (props) => {
	return (
		<>
			<div
				style={{
					padding: "1rem"
				}}>
				<div>
					<label
						htmlFor="marginBetweenExperiencesSlider"
						style={{ color: "#aaa", marginBottom: "1rem", display: "block" }}>
						TitleFontSize:
					</label>
					<input
						type="range"
						id="marginBetweenExperiencesSlider"
						name="marginBetweenExperiencesSlider"
						min="2"
						max="10"
						step="1"
						style={{ cursor: "pointer" }}
						onChange={(event) =>
							props.setMarginBetweenExperiences(event?.target.value)
						}></input>
				</div>
			</div>
		</>
	);
};
