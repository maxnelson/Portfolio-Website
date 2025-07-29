import { View, Text, Svg, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@src/components/Resume/resumeStyles";

export const DurationLockup = (props) => {
	return (
		<>
			<View
				style={[
					styles.flex_direction_row,
					styles.align_items_center,
					styles.line_height_0
				]}>
				<Svg
					width="12"
					height="12"
					viewBox="0 0 512 512"
					style={[styles.margin_right_5]}>
					<Path
						fill="#000"
						d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
					/>
				</Svg>
				<Text style={[styles.font_size_small]}>
					{props.startDateMonth && props.startDateMonth + " "}
					{props.startDateYear && props.startDateYear}
					{" - "}
					{props.endDateMonth && props.endDateMonth + " "}
					{props.endDateYear && props.endDateYear}
				</Text>
			</View>
		</>
	);
};
