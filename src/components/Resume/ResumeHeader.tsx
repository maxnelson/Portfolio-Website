import { View, Text, Svg, Line, Image, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import envelope from "/images/icons/envelope.svg";

const line_padding = "1";
const svg_height = "2";
const contact_info_container_width = "170";
export const ResumeHeader = () => {
  return (
    <View
      style={[styles.flex_direction_row, styles.justify_content_space_between]}
    >
      <Text
        style={[
          styles.font_size_50pt,
          styles.font_family_helvetica_bold,
          styles.color_666,
          styles.line_height_0_8,
        ]}
      >
        MAX NELSON
      </Text>
      <View>
        <View style={[styles.margin_top_5, styles.maegin_left_50]}>
          <View style={styles.margin_bottom_4}>
            <View style={styles.flex_direction_row}>
              <Svg width="10" height="10" viewBox="0 0 512 512">
                <Path
                  fill="#000"
                  strokeWidth={30}
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </Svg>
              <Text
                style={[
                  styles.font_size_9pt,
                  styles.font_family_helvetica_bold,
                  styles.color_black,
                ]}
              >
                MAXNELSON88@GMAIL.COM
              </Text>
            </View>
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
          <View style={styles.margin_bottom_4}>
            <Text
              style={[
                styles.font_size_10pt,
                styles.font_family_helvetica_bold,
                styles.color_blue_50,
                styles.padding_bottom_2px,
              ]}
            >
              PHONE
            </Text>
            <Text
              style={[
                styles.font_size_9pt,
                styles.font_family_helvetica_bold,
                styles.color_black,
              ]}
            >
              (510) 508-1392
            </Text>
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
          <View style={styles.margin_bottom_4}>
            <Text
              style={[
                styles.font_size_10pt,
                styles.font_family_helvetica_bold,
                styles.color_blue_50,
                styles.padding_bottom_2px,
              ]}
            >
              WEBSITE
            </Text>
            <Text
              style={[
                styles.font_size_9pt,
                styles.font_family_helvetica_bold,
                styles.color_black,
              ]}
            >
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
