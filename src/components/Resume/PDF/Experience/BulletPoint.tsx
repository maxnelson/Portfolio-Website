import { View, Text, Circle, Svg } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@src/components/Resume/resumeStyles";

export const BulletPoint = (props) => {
	return (
		<>
			<View
				style={[
					styles.display_flex,
					styles.flex_direction_row,
					//props.spaceBetweenBullets[0],
					//props.spaceBetweenBullets[1],
					styles.font_size_11pt,
					{
						marginBottom: `${props.marginBetweenExperiences}`,
						marginTop: `${props.marginBetweenExperiences}`
					}
				]}>
				{props.bullet === "bullet" && (
					<Svg
						width={8}
						height={9}>
						<Circle
							cx="3"
							cy="6"
							r="1.3"
							fill="black"
						/>
					</Svg>
				)}
				{props.bullet === "technologies" && (
					<Text style={[styles.font_family_helvetica_bold]}>
						Technologies Used:&nbsp;
					</Text>
				)}
				<Text style={[styles.margin_bottom_1, styles.line_height_1_2]}>{props.text}</Text>
			</View>
		</>
	);
};
