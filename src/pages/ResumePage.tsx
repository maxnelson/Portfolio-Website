import { ResumeHeader } from "@/components/Resume/ResumeHeader";
import { ResumeFooter } from "@/components/Resume/ResumeFooter";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import {
  resumeItemPropObjectApple,
  resumeItemPropObjectRubrik,
  resumeItemPropObjectApple2,
  resumeItemPropObjectCloudera,
} from "@/components/Resume/ResumeData";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";

export const ResumePage = (_, setProjectDescriptionVisible) => {
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section">
          <PDFViewer style={{ width: "100%", height: "71rem" }}>
            <Document>
              <Page size="LETTER">
                <View style={styles.page_container}>
                  <ResumeHeader />
                  <View style={styles.margin_bottom_10}>
                    <Text
                      style={[
                        styles.font_family_helvetica_bold,
                        styles.font_size_11pt,
                      ]}
                    >
                      SUMMARY
                    </Text>
                    <Svg viewBox="0 0 0 0" height="5">
                      <Line
                        x1="0"
                        y1="1"
                        x2="570"
                        y2="1"
                        strokeWidth={1}
                        stroke="black"
                      />
                    </Svg>
                    <Text
                      style={[
                        styles.white_space_nowrap,
                        styles.margin_bottom_1,
                        styles.font_size_10pt,
                      ]}
                    >
                      Web Developer with 8 years of experience developing
                      maintainable website applications and components using a
                      variety of web languages, including Javascript, Python,
                      HTML and CSS, and implementing integrations with a variety
                      of APIs, databases, and content repositories.
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.font_family_helvetica_bold,
                        styles.font_size_11pt,
                      ]}
                    >
                      EXPERIENCE
                    </Text>
                    <Svg viewBox="0 0 0 0" height="10">
                      <Line
                        x1="0"
                        y1="5"
                        x2="570"
                        y2="5"
                        strokeWidth={1}
                        stroke="black"
                      />
                    </Svg>
                    <View style={styles.margin_top_5}>
                      <ResumeItem {...resumeItemPropObjectApple} />
                      <ResumeItem {...resumeItemPropObjectRubrik} />
                      <ResumeItem {...resumeItemPropObjectApple2} />
                      <ResumeItem {...resumeItemPropObjectCloudera} />
                      <ResumeFooter />
                    </View>
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </div>
        <Footer />
      </div>
    </>
  );
};
