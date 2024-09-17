import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const SkillsSection = (props) => {
  return (
    <View style={[styles.margin_top_5, styles.font_size_medium]}>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          {props.skill1Title} {": "}
        </Text>

        {props.skill1Description}
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          {props.skill2Title}
          {": "}
        </Text>

        {props.skill2Description}
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          {props.skill3Title}
          {": "}
        </Text>

        {props.skill3Description}
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          {props.skill4Title}
          {": "}
        </Text>

        {props.skill4Description}
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          {props.skill5Title}
          {": "}
        </Text>

        {props.skill5Description}
      </Text>
      <Text style={[]}>
        <Text style={[styles.font_family_helvetica_bold]}>
          {props.skill6Title}
          {": "}
        </Text>

        {props.skill6Description}
      </Text>
    </View>
  );
};
