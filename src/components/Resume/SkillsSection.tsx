import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const SkillsSection = () => {
  return (
    <View style={[styles.margin_top_5, styles.font_size_medium]}>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>Javascript:</Text>{" "}
        React • Node • D3 • Tpescript • JS and CSS pre/post processing tools
        (Webpack • Babel • Rollup • Grunt • Gulp • Vite) • Express
      </Text>
      <View style={[]}>
        <Text style={[]}>
          <Text style={[styles.font_family_helvetica_bold]}>PHP:</Text> Timber •
          Twig
        </Text>
      </View>
      <View style={[]}>
        <Text style={[]}>
          <Text style={[styles.font_family_helvetica_bold]}>Python:</Text> Flask
          • Associated build tools (pip, virtualenv)
        </Text>
      </View>
      <View style={[]}>
        <Text style={[]}>
          <Text style={[styles.font_family_helvetica_bold]}>Java:</Text> AEM
          Stack (Maven • OSGi [Apache Felix] • JCR [Apache JackRabbit OAK] • JSP
          • Apache Sling)
        </Text>
      </View>
      <View style={[]}>
        <Text style={[]}>
          <Text style={[styles.font_family_helvetica_bold]}>Devops:</Text>{" "}
          Docker • Jenkins • Proxyman • Oauth2 • Google Cloud Build • Git
        </Text>
      </View>
    </View>
  );
};
