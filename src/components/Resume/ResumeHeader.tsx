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
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const ResumeHeader = () => {
  return (
    <View style={styles.header_section}>
      <Text style={styles.header_text}>MAX NELSON</Text>
      <View>
        <View style={styles.line_rule}>
          <Text style={styles.contact_info_title}>EMAIL</Text>
          <Text style={styles.contact_info_content}>MAXNELSON88@GMAIL.COM</Text>

          <Svg viewBox="0 0 0 0" width="200" height="10">
            <Line
              x1="0"
              y1="5"
              x2="300"
              y2="5"
              strokeWidth={1}
              stroke="black"
            />
          </Svg>
        </View>
        <View style={styles.line_rule}>
          <Text style={styles.contact_info_title}>PHONE</Text>
          <Svg viewBox="0 0 0 0" width="200" height="25">
            <Line
              x1="0"
              y1="5"
              x2="170"
              y2="5"
              strokeWidth={20}
              stroke="#aaa"
            />
            <Line
              x1="0"
              y1="20"
              x2="250"
              y2="20"
              strokeWidth={1}
              stroke="black"
            />
          </Svg>
        </View>
        <View style={styles.line_rule}>
          <Text style={styles.contact_info_title}>WEBSITE</Text>
          <Text style={styles.contact_info_content}>MAXNELSONDESIGN.COM</Text>
          <Svg viewBox="0 0 0 0" width="200" height="10">
            <Line
              x1="0"
              y1="5"
              x2="300"
              y2="5"
              strokeWidth={1}
              stroke="black"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};
