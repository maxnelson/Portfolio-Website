import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
export const SummarySection = () => {
  return (
    <View>
      <Text style={[styles.margin_top_5, styles.font_size_medium]}>
        Web Developer with eight years of experience developing maintainable web
        applications using Python and Node, and website components using
        Javascript, HTML and CSS, and integrating with a variety of web
        services, APIs, and content repositories.
      </Text>
    </View>
  );
};
