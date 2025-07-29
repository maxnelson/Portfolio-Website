import { View, Text, Svg, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@src/components/Resume/resumeStyles";
import { DurationLockup } from "@src/components/Resume/PDF/Experience/DurationLockup";

export const EducationSection = (props) => {
	return (
		<>
			<View
				style={[
					styles.font_size_medium,
					styles.flex_direction_row,
					styles.align_items_center,
					styles.justify_content_space_between,
					styles.line_height_0
				]}>
				<View style={[styles.display_flex, styles.flex_direction_column]}>
					<Text style={[styles.font_family_helvetica_bold]}>{props.degree}</Text>
					<Text>{props.school}</Text>
				</View>
				<DurationLockup
					startDateYear={props.startDateYear}
					endDateYear={props.endDateYear}
				/>
			</View>
			<View>
				<Text
					wrap={false}
					style={[styles.margin_top_5, styles.font_size_medium, styles.line_height_1_2]}>
					{props.description}
				</Text>
			</View>
		</>
	);
};
