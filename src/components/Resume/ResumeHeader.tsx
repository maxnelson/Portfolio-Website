import { View, Text, Svg, Line } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
const contact_info_container_width = "170";
export const ResumeHeader = () => {
  return (
    <View style={styles.header_section}>
      <Text style={styles.header_text}>MAX NELSON</Text>
      <View>
        <View style={styles.contact_info_container}>
          <View style={styles.contact_info_section}>
            <Text style={styles.contact_info_title}>EMAIL</Text>
            <Text style={styles.contact_info_content}>
              MAXNELSON88@GMAIL.COM
            </Text>

            <Svg
              viewBox="0 0 0 0"
              width={contact_info_container_width}
              height="10"
            >
              <Line
                x1="0"
                y1="5"
                x2={contact_info_container_width}
                y2="5"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
          </View>
          <View style={styles.contact_info_section}>
            <Text style={styles.contact_info_title}>PHONE</Text>
            <Svg
              viewBox="0 0 0 0"
              width={contact_info_container_width}
              height="25"
            >
              <Line
                x1="0"
                y1="5"
                x2={contact_info_container_width}
                y2="5"
                strokeWidth={15}
                stroke="#9b9b9b"
              />
              <Line
                x1="0"
                y1="18"
                x2={contact_info_container_width}
                y2="18"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
          </View>
          <View style={styles.contact_info_section}>
            <Text style={styles.contact_info_title}>WEBSITE</Text>
            <Text style={styles.contact_info_content}>
              MAXNELSONWEBSITE.COM
            </Text>
            <Svg
              viewBox="0 0 0 0"
              width={contact_info_container_width}
              height="10"
            >
              <Line
                x1="0"
                y1="5"
                x2={contact_info_container_width}
                y2="5"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
};
