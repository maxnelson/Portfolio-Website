import { Font } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";

Font.registerHyphenationCallback((word) => [word]);

const font_size_small = "10pt";
const font_size_medium = "11pt";
const font_size_large = "14pt";

export const resumeStyles = StyleSheet.create({
  page_container: {
    paddingTop: "20",
    paddingBottom: "0",
    paddingLeft: "30",
    paddingRight: "30",
  },
  color_black: {
    color: "#000",
  },
  color_555: {
    color: "#555",
  },
  color_666: {
    color: "#666",
  },
  color_777: {
    color: "#777",
  },
  color_888: {
    color: "#888",
  },
  color_999: {
    color: "#999",
  },
  color_aaa: {
    color: "#aaa",
  },
  color_a0a0a0: {
    color: "#a0a0a0",
  },
  color_bbb: {
    color: "#bbb",
  },
  color_ccc: {
    color: "#ccc",
  },
  color_ddd: {
    color: "#ddd",
  },
  color_blue_50: {
    color: "#3382b0",
  },
  color_blue_100: {
    color: "#0e71b8",
  },
  color_gray_50: {
    color: "#555",
    fill: "#555",
  },
  white_space_nowrap: {
    //whiteSpace: "nowrap",
  },
  display_flex: {
    display: "flex",
  },
  vertical_align_middle: {
    //verticalAlign: "middle",
  },
  align_items_left: {
    //alignItems: "left",
  },
  align_items_right: {
    //alignItems: "right",
  },
  align_items_bottom: {
    //alignItems: "bottom",
  },

  align_items_top: {
    //alignItems: "top",
  },
  align_self_left: {
    //alignSelf: "left",
  },
  align_self_right: {
    //alignSelf: "right",
  },
  align_self_bottom: {
    //alignSelf: "bottom",
  },
  align_self_center: {
    alignSelf: "center",
  },
  align_self_top: {
    //alignSelf: "top",
  },
  align_items_center: {
    alignItems: "center",
  },
  font_weight_bold: {
    fontWeight: "bold",
  },
  font_style_bold: {
    fontWeight: "bold",
  },
  justify_content_flex_start: {
    justifyContent: "flex-start",
  },
  justify_content_space_between: {
    justifyContent: "space-between",
  },
  line_height_0: {
    lineHeight: "0",
  },
  line_height_0_8: {
    lineHeight: "0.8",
  },
  line_height_1: {
    lineHeight: "1",
  },
  font_size_8pt: {
    fontSize: "8pt",
  },
  font_size_9pt: {
    fontSize: "9pt",
  },
  font_size_10pt: {
    fontSize: "10pt",
  },
  font_size_11pt: {
    fontSize: "11pt",
  },
  font_size_12pt: {
    fontSize: "12pt",
  },
  font_size_13pt: {
    fontSize: "13pt",
  },
  font_size_14pt: {
    fontSize: "14pt",
  },
  font_size_15pt: {
    fontSize: "15pt",
  },
  font_size_30pt: {
    fontSize: "30pt",
  },
  font_size_35pt: {
    fontSize: "35pt",
  },
  font_size_40pt: {
    fontSize: "40pt",
  },
  font_size_45pt: {
    fontSize: "45pt",
  },
  font_size_50pt: {
    fontSize: "50pt",
  },
  font_size_small: {
    fontSize: font_size_small,
  },
  font_size_medium: {
    fontSize: font_size_medium,
  },
  font_size_large: {
    fontSize: font_size_large,
  },
  font_family_helvetica_bold: {
    fontFamily: "Helvetica-Bold",
  },
  font_family_roboto: {
    fontFamily: "Roboto",
  },
  flex_direction_row: {
    flexDirection: "row",
  },
  flex_direction_column: {
    flexDirection: "column",
  },
  width_10_percent: {
    width: "10%",
  },
  width_20_percent: {
    width: "20%",
  },
  width_30_percent: {
    width: "30%",
  },
  width_40_percent: {
    width: "40%",
  },
  width_45_percent: {
    width: "45%",
  },
  width_50_percent: {
    width: "50%",
  },
  width_60_percent: {
    width: "60%",
  },
  width_70_percent: {
    width: "70%",
  },
  width_75_percent: {
    width: "75%",
  },
  width_80_percent: {
    width: "80%",
  },
  width_85_percent: {
    width: "85%",
  },
  width_90_percent: {
    width: "90%",
  },
  width_100_percent: {
    width: "100%",
  },
  margin_top_1: {
    marginTop: "1",
  },
  margin_top_2: {
    marginTop: "2",
  },
  margin_top_3: {
    marginTop: "3",
  },
  margin_top_4: {
    marginTop: "4",
  },
  margin_top_5: {
    marginTop: "5",
  },
  margin_top_6: {
    marginTop: "6",
  },
  margin_top_7: {
    marginTop: "7",
  },
  margin_top_8: {
    marginTop: "8",
  },
  margin_top_9: {
    marginTop: "9",
  },
  margin_top_10: {
    marginTop: "10",
  },
  margin_bottom_1: {
    marginBottom: "1",
  },
  margin_bottom_2: {
    marginBottom: "2",
  },
  margin_bottom_3: {
    marginBottom: "3",
  },
  margin_bottom_4: {
    marginBottom: "4",
  },
  margin_bottom_5: {
    marginBottom: "5",
  },
  margin_bottom_10: {
    marginBottom: "10",
  },
  margin_right_1: {
    marginRight: "1",
  },
  margin_right_2: {
    marginRight: "2",
  },
  margin_right_3: {
    marginRight: "3",
  },
  margin_right_4: {
    marginRight: "4",
  },
  margin_right_5: {
    marginRight: "5",
  },
  margin_right_6: {
    marginRight: "6",
  },
  margin_right_7: {
    marginRight: "7",
  },
  margin_right_8: {
    marginRight: "8",
  },
  margin_right_9: {
    marginRight: "9",
  },
  margin_right_10: {
    marginRight: "10",
  },
  margin_right_30: {
    marginRight: "30",
  },
  margin_right_5_percent: {
    marginRight: "5%",
  },
  margin_left_10n: {
    marginLeft: "-10",
  },
  margin_left_9n: {
    marginLeft: "-9",
  },
  margin_left_8n: {
    marginLeft: "-8",
  },
  margin_left_7n: {
    marginLeft: "-7",
  },
  margin_left_6n: {
    marginLeft: "-6",
  },
  margin_left_5n: {
    marginLeft: "-5",
  },
  margin_left_4n: {
    marginLeft: "-4",
  },
  margin_left_3n: {
    marginLeft: "-3",
  },
  margin_left_2n: {
    marginLeft: "-2",
  },
  margin_left_1n: {
    marginLeft: "-1",
  },
  margin_left_1: {
    marginLeft: "1",
  },
  margin_left_2: {
    marginLeft: "2",
  },
  margin_left_3: {
    marginLeft: "3",
  },
  margin_left_4: {
    marginLeft: "4",
  },
  margin_left_5: {
    marginLeft: "5",
  },
  margin_left_6: {
    marginLeft: "6",
  },
  margin_left_7: {
    marginLeft: "7",
  },
  margin_left_8: {
    marginLeft: "8",
  },
  margin_left_9: {
    marginLeft: "9",
  },
  margin_left_10: {
    marginLeft: "10",
  },
  margin_left_11: {
    marginLeft: "11",
  },
  margin_left_12: {
    marginLeft: "12",
  },
  margin_left_13: {
    marginLeft: "13",
  },
  margin_left_14: {
    marginLeft: "14",
  },
  margin_left_15: {
    marginLeft: "15",
  },
  margin_left_20: {
    marginLeft: "20",
  },
  margin_left_30: {
    marginLeft: "30",
  },
  margin_left_40: {
    marginLeft: "40",
  },
  margin_left_50: {
    marginLeft: "50",
  },
  padding_top_10: {
    paddingTop: "10",
  },
  padding_bottom_10: {
    paddingBottom: "10",
  },
  padding_bottom_2px: {
    paddingBottom: "2px",
  },
  padding_left_30: {
    paddingLeft: "30",
  },
  padding_right_30: {
    paddingRight: "30",
  },
  word_break_keep_all: {
    //wordBreak: "keep-all",
  },
  overflow_wrap_normal: {
    //overflowWrap: "normal",
  },
  whitespace_pre: {
    //whiteSpace: "pre",
  },
  text_decoration_none: {
    textDecoration: "none",
  },
});
