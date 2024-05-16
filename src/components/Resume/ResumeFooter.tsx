import { View, Text, Svg, Circle, Line } from "@react-pdf/renderer";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { resumeItemPropObjectChico } from "@/components/Resume/ResumeData";
export const ResumeFooter = () => {
  return (
    <View
      style={[
        styles.flex_direction_row,
        styles.justify_content_space_between,
        styles.margin_top_10,
      ]}
    >
      <View style={[styles.width_50_percent]}>
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
      <View style={styles.width_45_percent}>
        <Text
          style={[styles.font_family_helvetica_bold, styles.font_size_11pt]}
        >
          SKILLS
        </Text>
        <Svg viewBox="0 0 0 0" height="10">
          <Line x1="0" y1="5" x2="350" y2="5" strokeWidth={1} stroke="black" />
        </Svg>
        <View style={[]}>
          <Text style={[styles.font_size_10pt, styles.font_family_roboto]}>
            <Text
              style={[
                styles.font_size_10pt,
                styles.font_family_roboto,
                styles.font_style_bold,
              ]}
            >
              Javascript:
            </Text>{" "}
            React • Node • D3 • JS and CSS pre/post processing tools (Webpack •
            Babel • Rollup • Grunt • Gulp • Vite) • Express
          </Text>
        </View>
        <View style={[]}>
          <Text style={[styles.font_size_10pt, styles.font_family_roboto]}>
            <Text
              style={[
                styles.font_size_10pt,
                styles.font_family_roboto,
                styles.font_style_bold,
              ]}
            >
              Python:
            </Text>{" "}
            Flask • Associated build tools (pip, virtualenv)
          </Text>
        </View>
        <View style={[]}>
          <Text style={[styles.font_size_10pt, styles.font_family_roboto]}>
            <Text
              style={[
                styles.font_size_10pt,
                styles.font_family_roboto,
                styles.font_style_bold,
              ]}
            >
              Java:
            </Text>{" "}
            Maven • JSP • AEM
          </Text>
        </View>
      </View>
    </View>
  );
};
