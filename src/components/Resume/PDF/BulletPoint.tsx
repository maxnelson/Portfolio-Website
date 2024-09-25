import {
  View,
  Text,
  Circle,
  Svg,
} from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const BulletPoint = (props) => {
  return (
    <>
      <View
        style={[
          styles.display_flex,
          styles.flex_direction_row,
        ]}
      >
        <Svg width={8} height={9}>
          <Circle
            cx="3"
            cy="6"
            r="1.3"
            fill="black"
          />
        </Svg>
        <Text
          style={[
            styles.margin_bottom_1,
            styles.lineHeight,
          ]}
        >
          {props.text}
        </Text>
      </View>
    </>
  );
};
