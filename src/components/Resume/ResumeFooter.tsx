import { View, Text, Svg, Line } from "@react-pdf/renderer";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { resumeItemPropObjectChico } from "@/components/Resume/ResumeData";
export const ResumeFooter = () => {
  return (
    <View style={styles.job_header_container}>
      <View style={styles.footer_section_left}>
        <Text style={styles.section_title}>EDUCATION</Text>
        <Svg viewBox="0 0 0 0" height="10">
          <Line x1="0" y1="5" x2="250" y2="5" strokeWidth={1} stroke="black" />
        </Svg>
        <ResumeItem {...resumeItemPropObjectChico} />
      </View>
      <View style={styles.footer_section_right}>
        <Text style={styles.section_title}>ADDITIONAL QUALIFICATIONS</Text>
        <Svg viewBox="0 0 0 0" height="10">
          <Line x1="0" y1="5" x2="350" y2="5" strokeWidth={1} stroke="black" />
        </Svg>
        <Text style={styles.body_copy}>
          • Intermediate experience in React framework. This resume was
          generated using React-PDF :).
        </Text>
        <Text style={styles.body_copy}>
          • Experience implementing Oauth2 protocol in Python and Javascript
          integrating with a variety of federated login services.
        </Text>

        <Text style={styles.body_copy}>
          • Experience troubleshooting network issues within complex server
          architectures.
        </Text>
        <Text style={styles.body_copy}>
          • Completed the 'AEM Developer' and 'Advanced AEM Developer' training
          courses at Adobe.
        </Text>
      </View>
    </View>
  );
};
