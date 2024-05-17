import { View, Text, Circle, Svg, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const BulletPoint = (props) => {
  return (
    <>
      <View style={[styles.display_flex, styles.flex_direction_row]}>
        <Svg width={8} height={8}>
          <Circle cx="3" cy="5" r="1.25" fill="black" />
        </Svg>
        <Text style={[styles.white_space_nowrap, styles.margin_bottom_1]}>
          {props.text}
        </Text>
      </View>
    </>
  );
};
