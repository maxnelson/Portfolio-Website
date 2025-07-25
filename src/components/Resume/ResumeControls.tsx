export const ResumeControls = (props) => {
	return (
		<>
			<div
				style={{
					border: "1px solid black",
					borderRadius: "4px",
					marginTop: "3rem"
				}}>
				<div
					style={{
						borderBottom: "1px solid black",
						padding: "1rem",
						backgroundColor: "#efefef",
						borderTopRightRadius: "4px",
						borderTopLeftRadius: "4px"
					}}>
					<p>Customize Resume</p>
				</div>
				<div
					style={{
						padding: "1rem"
					}}>
					<div>
						<label
							htmlFor="marginBetweenExperiencesSlider"
							style={{ color: "#aaa", marginBottom: "1rem", display: "block" }}>
							Margin between experiences:
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
			</div>
		</>
	);
};
