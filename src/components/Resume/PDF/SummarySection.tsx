import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@src/components/Resume/resumeStyles";
export const SummarySection = (props) => {
	return (
		<View style={[styles.margin_bottom_5]}>
			<Text style={[styles.font_size_11pt]}>{props.summary1}</Text>
			{/* <Text style={[styles.font_size_medium, styles.margin_top_5]}>{props.summary2}</Text>*/}
		</View>
	);
};
