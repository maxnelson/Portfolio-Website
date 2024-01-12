import { StyleSheet } from "@react-pdf/renderer";

export const resumeStyles = StyleSheet.create({
  page_container: {
    padding: "20",
  },
  section_title: {
    fontFamily: "Helvetica-Bold",
    fontSize: "12pt",
  },
  body_copy: {
    fontSize: "10pt",
  },
  section_padding: {
    marginBottom: "15",
  },
  header_section: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_text: {
    fontSize: "45pt",
    color: "#777",
    fontFamily: "Helvetica",
    lineHeight: "0.8",
  },
  contact_info_title: {
    fontSize: "10pt",
    fontFamily: "Helvetica-Bold",
    color: "#3382b0",
    paddingBottom: "2px",
  },
  contact_info_content: {
    fontFamily: "Helvetica-Bold",
    fontSize: "10pt",
  },
  line_rule: {
    marginBottom: "5",
  },

  job_header_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  job_header_info_container: {
    fontSize: "10pt",
    fontFamily: "Helvetica-Bold",
    flexDirection: "column",
    marginRight: "30",
  },
  job_title: {
    color: "#3382b0",
  },
  footer_section: {
    width: "50%",
  },
});
