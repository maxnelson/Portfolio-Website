import { View, Text, Svg, Line } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@src/components/Resume/resumeStyles";

export const ResumeSectionHeader = (props) => {
	return (
		<>
			<View style={[styles.margin_bottom_5]}>
				<Text
					style={[
						styles.font_family_helvetica_bold,
						styles.font_size_medium,
						styles.line_height_0
					]}>
					{props.title ? props.title.toUpperCase() : ""}
				</Text>
				<Svg
					viewBox="0 0 0 0"
					height="2"
					style={[]}>
					<Line
						x1="0"
						y1="1"
						x2="570"
						y2="1"
						strokeWidth={1}
						stroke="black"
					/>
				</Svg>
			</View>
		</>
	);
};
