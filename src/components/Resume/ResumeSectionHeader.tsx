import { View, Text, Svg, Line } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const ResumeSectionHeader = (props) => {
  return (
    <>
      <View style={styles.margin_top_10}>
        <Text
          style={[styles.font_family_helvetica_bold, styles.font_size_11pt]}
        >
          {props.headerText}
        </Text>
        <Svg viewBox="0 0 0 0" height="5">
          <Line x1="0" y1="2" x2="570" y2="2" strokeWidth={1} stroke="black" />
        </Svg>
      </View>
    </>
  );
};
