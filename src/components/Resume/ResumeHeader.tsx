import { View, Text, Svg, Line } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
const line_padding = "1";
const svg_height = "2";
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
              height={svg_height}
            >
              <Line
                x1="0"
                y1={line_padding}
                x2={contact_info_container_width}
                y2={line_padding}
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
          </View>
          <View style={styles.contact_info_section}>
            <Text style={styles.contact_info_title}>PHONE</Text>
            <Text style={styles.contact_info_content}>(510) 508-1392</Text>
            <Svg
              viewBox="0 0 0 0"
              width={contact_info_container_width}
              height={svg_height}
            >
              {/* 
              <Line
                x1="0"
                y1={line_padding}
                x2={contact_info_container_width}
                y2={line_padding}
                strokeWidth={15}
                stroke="#9b9b9b"
              />
              */}
              <Line
                x1="0"
                y1={line_padding}
                x2={contact_info_container_width}
                y2={line_padding}
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
              height={svg_height}
            >
              <Line
                x1="0"
                y1={line_padding}
                x2={contact_info_container_width}
                y2={line_padding}
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
