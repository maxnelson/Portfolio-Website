import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
export const SummarySection = () => {
  return (
    <View>
      <Text style={[styles.font_size_medium]}>
        Web developer with 8 years of experience working on high-traffic,
        highly-visible websites and applications.
      </Text>
      <Text break style={[styles.font_size_medium, styles.margin_top_5]}>
        Experienced in developing maintainable frontend build systems, solving
        complex problems and delivering quality solutions to fast-growing
        startups and large companies alike. Developing website applications,
        tools, features and components using many languages and frameworks
        including, Node, Python, AEM, Wordpress, GCP, Javascript, React, HTML
        and CSS; integrating data from a variety of web services, databases, and
        content repositories.
      </Text>
    </View>
  );
};
