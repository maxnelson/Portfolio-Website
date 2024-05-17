import { View, Text, Svg, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
export const ContactInfoItem = (props) => {
  return (
    <View
      style={[
        styles.margin_bottom_5,
        styles.flex_direction_row,
        styles.align_items_center,
        styles.vertical_align_middle,
      ]}
    >
      <Svg
        style={props.svgStyles}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      >
        <Path fill="#000" d={props.icon} />
      </Svg>
      <Text
        style={[
          //styles.font_family_helvetica_bold,
          styles.font_size_medium,
          styles.color_black,
          styles.margin_left_10,
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
};
