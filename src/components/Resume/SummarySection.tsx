import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
export const SummarySection = () => {
  return (
    <View>
      <Text style={[styles.font_size_medium]}>
        Web Developer with eight years of experience developing web applications
        using a variety of languages and frameworks, and website components
        using Javascript, HTML, and CSS.
      </Text>
    </View>
  );
};
