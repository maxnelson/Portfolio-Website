export const ResumeControlTitleFontSize = (props) => {
	return (
		<>
			<div
				style={{
					marginBottom: "1rem"
				}}>
				<div>
					<label
						htmlFor="titleFontSizeSlider"
						style={{ color: "#aaa", marginBottom: "10px", display: "block" }}>
						TitleFontSize:
					</label>
					<input
						type="range"
						id="titleFontSizeSlider"
						name="titleFontSizeSlider"
						min="12"
						max="14"
						step="1"
						defaultValue="12"
						style={{ cursor: "pointer" }}
						onChange={(event) => props.setTitleFontSize(event?.target.value)}></input>
				</div>
			</div>
		</>
	);
};
