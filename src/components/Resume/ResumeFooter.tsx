import { View, Text, Svg, Circle, Line } from "@react-pdf/renderer";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { resumeItemPropObjectChico } from "@/components/Resume/ResumeData";
export const ResumeFooter = () => {
  return (
    <View
      style={[styles.flex_direction_row, styles.justify_content_space_between]}
    >
      <View style={[styles.width_45_percent, styles.margin_right_5_percent]}>
        <Text
          style={[styles.font_family_helvetica_bold, styles.font_size_11pt]}
        >
          EDUCATION
        </Text>
        <Svg viewBox="0 0 0 0" height="10">
          <Line x1="0" y1="5" x2="250" y2="5" strokeWidth={1} stroke="black" />
        </Svg>
        <ResumeItem {...resumeItemPropObjectChico} />
      </View>
      <View style={styles.width_50_percent}>
        <Text
          style={[styles.font_family_helvetica_bold, styles.font_size_11pt]}
        >
          ADDITIONAL QUALIFICATIONS
        </Text>
        <Svg viewBox="0 0 0 0" height="10">
          <Line x1="0" y1="5" x2="350" y2="5" strokeWidth={1} stroke="black" />
        </Svg>
        <View style={[styles.display_flex, styles.flex_direction_row]}>
          <Svg width={8} height={8}>
            <Circle cx="3" cy="5" r="1.25" fill="black" />
          </Svg>
          <Text
            style={[
              styles.white_space_nowrap,
              styles.margin_bottom_1,
              styles.font_size_10pt,
            ]}
          >
            Proficient in React. This Resumé was generated using React-PDF :)
          </Text>
        </View>
        <View style={[styles.display_flex, styles.flex_direction_row]}>
          <Svg width={8} height={8}>
            <Circle cx="3" cy="5" r="1.25" fill="black" />
          </Svg>
          <Text
            style={[
              styles.white_space_nowrap,
              styles.margin_bottom_1,
              styles.font_size_10pt,
            ]}
          >
            Experience implementing Oauth2 protocol in Python and Javascript,
            integrating with a variety of federated login services.
          </Text>
        </View>
        <View style={[styles.display_flex, styles.flex_direction_row]}>
          <Svg width={8} height={8}>
            <Circle cx="3" cy="5" r="1.25" fill="black" />
          </Svg>
          <Text
            style={[
              styles.white_space_nowrap,
              styles.margin_bottom_1,
              styles.font_size_10pt,
            ]}
          >
            Completed the 'AEM Developer' and 'Advanced AEM Developer' training
            courses at Adobe.
          </Text>
        </View>
      </View>
    </View>
  );
};
