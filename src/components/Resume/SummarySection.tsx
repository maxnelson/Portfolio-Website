import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
export const SummarySection = () => {
  return (
    <View>
      <Text style={[styles.margin_top_0, styles.font_size_medium]}>
        Frontend Web Developer with eight years of experience developing web
        applications using Java, Python, and Node, and website components using
        Javascript, HTML and CSS, and integrating with a variety of data
        structures through standard web protocols.
      </Text>
    </View>
  );
};
