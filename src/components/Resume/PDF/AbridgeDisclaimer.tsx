import { View, Text, Link } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const AbridgeDisclaimer = () => {
  return (
    <>
      <View style={[styles.display_flex, styles.flex_direction_row, styles.font_size_smaller, styles.margin_top_15]}>
        <View style={[styles.width_35_percent]}></View>
        <View style={[styles.display_flex, styles.flex_direction_row]}>
          <View style={[]}>
            <Text style={[]}>This Resume has been abridged to fit on a single page. Click </Text>
          </View>
          <View style={[]}>
            <Link src={"https://maxnelsonwebsite.com/resume/full"} style={[styles.color_blue_100, styles.font_weight_bold, styles.text_decoration_none]}>
              {"here"}
            </Link>
          </View>
          <View style={[]}>
            <Text style={[]}> to view the full version.</Text>
          </View>
        </View>
      </View>
    </>
  );
};
