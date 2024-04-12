import { StyleSheet } from "@react-pdf/renderer";

export const resumeStyles = StyleSheet.create({
  page_container: {
    paddingTop: "10",
    paddingBottom: "10",
    paddingLeft: "30",
    paddingRight: "30",
  },
  section_title: {
    fontFamily: "Helvetica-Bold",
    fontSize: "11pt",
  },
  body_copy: {
    fontSize: "10pt",
    marginBottom: "1",
    whiteSpace: "nowrap",
  },
  experience_section: {
    marginTop: "5",
  },
  summary_section: {
    marginBottom: "10",
  },
  section_padding: {
    marginBottom: "10",
  },
  header_section: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_text: {
    fontSize: "50pt",
    color: "#666",
    fontFamily: "Helvetica-Bold",
    lineHeight: "0.8",
  },
  contact_info_title: {
    fontSize: "10pt",
    fontFamily: "Helvetica-Bold",
    color: "#3382b0",
    paddingBottom: "2px",
  },
  contact_info_container: {
    marginTop: "5",
    marginLeft: "50",
  },
  contact_info_content: {
    fontFamily: "Helvetica-Bold",
    color: "#000",
    fontSize: "9pt",
    //color: "#666",
  },
  contact_info_section: {
    marginBottom: "4",
  },

  job_header_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  job_header_info_container: {
    fontSize: "9pt",
    fontFamily: "Helvetica-Bold",
    flexDirection: "column",
    marginRight: "30",
  },
  month_duration: {
    fontSize: "8pt",
  },
  client_name: {
    fontFamily: "Helvetica-Bold",
    color: "#3382b0",
  },
  job_title: {
    fontFamily: "Helvetica-Bold",
  },
  job_description_container: {
    marginTop: "5",
  },
  footer_section_left: {
    width: "45%",
    marginRight: "5%",
  },
  footer_section_right: {
    width: "50%",
    //marginLeft: "5%",
  },
  bullet_point_container: {
    display: "flex",
    flexDirection: "row",
    //marginLeft: "3",
  },
});
