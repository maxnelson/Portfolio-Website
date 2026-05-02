export const ResumeControlTitleFontSize = (props) => {
	return (
		<>
			<div
				style={{
					marginBottom: "1rem"
				}}
			>
				<div>
					<label
						htmlFor="titleFontSizeSlider"
						style={{ color: "#aaa", marginBottom: "5px", display: "block" }}
					>
						Title font size:
					</label>
					<input
						type="range"
						id="titleFontSizeSlider"
						name="titleFontSizeSlider"
						min="12"
						max="14"
						step="1"
						defaultValue="12"
						style={{ width: "100%", cursor: "pointer" }}
						onChange={(event) => props.setTitleFontSize(event?.target.value)}
					></input>
				</div>
			</div>
		</>
	);
};
