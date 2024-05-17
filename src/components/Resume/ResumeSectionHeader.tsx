import { View, Text, Svg, Line } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const ResumeSectionHeader = (props) => {
  return (
    <>
      <View style={[styles.margin_top_10]}>
        <Text
          style={[styles.font_family_helvetica_bold, styles.font_size_medium]}
        >
          {props.headerText}
        </Text>
        <Svg viewBox="0 0 0 0" height="2" style={[styles.margin_top_2]}>
          <Line x1="0" y1="1" x2="570" y2="1" strokeWidth={1} stroke="black" />
        </Svg>
      </View>
    </>
  );
};
