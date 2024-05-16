import { View, Text, Svg, Line, Image, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

const line_padding = "1";
const svg_height = "2";
const contact_info_container_width = "170";
export const ResumeHeader = () => {
  return (
    <View
      style={[styles.flex_direction_row, styles.justify_content_space_between]}
    >
      <View>
        <Text
          style={[
            styles.font_size_50pt,
            styles.font_family_helvetica_bold,
            styles.color_black,
            styles.margin_left_2n,
          ]}
        >
          MAX NELSON
        </Text>
        <Text style={[styles.font_family_helvetica_bold]}>
          Frontend Web Engineer
        </Text>
      </View>

      <View>
        <View style={[styles.margin_top_5, styles.margin_left_50]}>
          <View
            style={[
              styles.margin_top_4,
              styles.margin_bottom_10,
              styles.flex_direction_row,
              styles.align_items_center,
              styles.vertical_align_middle,
            ]}
          >
            <Svg width="15" height="15" viewBox="0 0 512 512">
              <Path
                fill="#000"
                //d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
            </Svg>
            <Text
              style={[
                styles.font_family_helvetica_bold,
                styles.font_size_11pt,
                styles.color_black,
                styles.margin_left_10,
              ]}
            >
              maxnelson88@gmail.com
            </Text>
          </View>
          <View
            style={[
              styles.flex_direction_row,
              styles.align_items_center,
              styles.margin_bottom_10,
            ]}
          >
            <Svg
              style={styles.margin_left_2}
              width="12"
              height="12"
              viewBox="0 0 512 512"
            >
              <Path
                fill="#000"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                //d="M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 295.2 175.2 485.6 400.1 509.5c9.8 1 19.6 1.8 29.6 2.2c0 0 0 0 0 0c0 0 .1 0 .1 0c6.1 .2 12.1 .4 18.2 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM441.5 464C225.8 460.5 51.5 286.2 48.1 70.5l99.2-21.3 43 100.4L154.4 179c-18.2 14.9-22.9 40.8-11.1 61.2c30.9 53.3 75.3 97.7 128.6 128.6c20.4 11.8 46.3 7.1 61.2-11.1l29.4-35.9 100.4 43L441.5 464zM48 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0s0 0 0 0"
              />
            </Svg>
            <Text
              style={[
                styles.font_family_helvetica_bold,
                styles.font_size_11pt,
                styles.color_black,
                styles.margin_left_12,
              ]}
            >
              +1.510-508-1392
            </Text>
          </View>

          <View style={[styles.flex_direction_row, styles.align_items_center]}>
            <Svg width="18" height="12" viewBox="0 0 512 512">
              <Path
                fill="#000"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </Svg>
            <Text
              style={[
                styles.font_family_helvetica_bold,
                styles.font_size_11pt,
                styles.color_black,
                styles.margin_left_8,
              ]}
            >
              maxnelsonwebsite.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
