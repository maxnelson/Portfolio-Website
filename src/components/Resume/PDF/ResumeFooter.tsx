import { View } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { ResumeSectionHeader } from "@/components/Resume/PDF/ResumeSectionHeader";
import { SkillsSection } from "@/components/Resume/PDF/SkillsSection";
import { EducationSection } from "@/components/Resume/PDF/EducationSection";

export const ResumeFooter = (props) => {
  return (
    <View
      style={[
        styles.flex_direction_row,
      ]}
    >
      <View
        style={[
          styles.width_45_percent,
          styles.margin_right_5_percent,
        ]}
      >
        <ResumeSectionHeader
          title={props.educationTitle}
        />
        <EducationSection
          degree={props.degree}
          school={props.school}
          startDateYear={
            props.startDateYear
          }
          endDateYear={
            props.endDateYear
          }
          description={
            props.description
          }
        />
      </View>
      <View
        style={styles.width_50_percent}
      >
        <ResumeSectionHeader
          title={props.skillsTitle}
        />
        <SkillsSection
          skill1Title={
            props.skill1Title
          }
          skill2Title={
            props.skill2Title
          }
          skill3Title={
            props.skill3Title
          }
          skill4Title={
            props.skill4Title
          }
          skill5Title={
            props.skill5Title
          }
          skill6Title={
            props.skill6Title
          }
          skill1Description={
            props.skill1Description
          }
          skill2Description={
            props.skill2Description
          }
          skill3Description={
            props.skill3Description
          }
          skill4Description={
            props.skill4Description
          }
          skill5Description={
            props.skill5Description
          }
          skill6Description={
            props.skill6Description
          }
        />
      </View>
    </View>
  );
};
