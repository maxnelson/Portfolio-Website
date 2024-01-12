import {
  StyleSheet,
  PDFViewer,
  Document,
  Font,
  Page,
  View,
  Text,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { resumeItemPropObjectChico } from "@/components/Resume/ResumeData";
export const ResumeFooter = () => {
  return (
    <View style={styles.job_header_container}>
      <View style={styles.footer_section}>
        <Text style={styles.section_title}>EDUCATION</Text>
        <Svg viewBox="0 0 0 0" width="270" height="10">
          <Line x1="0" y1="5" x2="270" y2="5" strokeWidth={1} stroke="black" />
        </Svg>
        <ResumeItem {...resumeItemPropObjectChico} />
      </View>
      <View style={styles.footer_section}>
        <Text style={styles.section_title}>ADDITIONAL QUALIFICATIONS</Text>
        <Svg viewBox="0 0 0 0" width="270" height="10">
          <Line x1="0" y1="5" x2="270" y2="5" strokeWidth={1} stroke="black" />
        </Svg>
        <Text style={styles.body_copy}>
          • Completed the 'AEM Developer' and 'Advanced AEM Developer' training
          courses at Adobe.
        </Text>
        <Text style={styles.body_copy}>
          • Adept at conducting AEM admin operations using tools including the
          QueryBuilder, Bulk Editor, VLT-RPC & more.
        </Text>
        <Text style={styles.body_copy}>
          • Helped organize Smartling integration, creating workflows and
          training authors globally to review / approve content.
        </Text>
      </View>
    </View>
  );
};
