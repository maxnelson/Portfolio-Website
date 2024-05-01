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
                  <View style={styles.summary_section}>
                    <Text style={styles.section_title}>SUMMARY</Text>
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
                    <Text style={styles.body_copy}>
                      Web Developer with 8 years of experience developing
                      maintainable website applications and components using
                      Python, Javascript, HTML, and CSS, and integrating with a
                      variety of APIs, databases, and content repositories.
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.section_title}>EXPERIENCE</Text>
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
                    <View style={styles.experience_section}>
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
