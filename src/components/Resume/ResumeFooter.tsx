import { View } from "@react-pdf/renderer";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { resumeItemPropObjectChico } from "@/components/Resume/ResumeData";
import { ResumeSectionHeader } from "@/components/Resume/ResumeSectionHeader";
import { SkillsSection } from "@/components/Resume/SkillsSection";
import { EducationSection } from "@/components/Resume/EducationSection";

export const ResumeFooter = () => {
  return (
    <View style={[styles.flex_direction_row]}>
      <View style={[styles.width_45_percent, styles.margin_right_5_percent]}>
        <ResumeSectionHeader headerText="EDUCATION" />
        <EducationSection {...resumeItemPropObjectChico} />
      </View>
      <View style={styles.width_50_percent}>
        <ResumeSectionHeader headerText="SKILLS" />
        <SkillsSection />
      </View>
    </View>
  );
};
