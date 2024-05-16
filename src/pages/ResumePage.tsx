import { ResumeHeader } from "@/components/Resume/ResumeHeader";
import { ResumeFooter } from "@/components/Resume/ResumeFooter";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { PDFViewer, Document, Page, View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import {
  resumeItemPropObjectApple,
  resumeItemPropObjectRubrik,
  resumeItemPropObjectApple2,
  resumeItemPropObjectCloudera,
} from "@/components/Resume/ResumeData";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import { ResumeSectionHeader } from "@/components/Resume/ResumeSectionHeader";

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
                  <View>
                    <Text
                      style={[
                        styles.white_space_nowrap,
                        styles.margin_top_10,
                        styles.font_size_10pt,
                      ]}
                    >
                      Frontend Web Developer with eight years of experience
                      developing website applications and components using Java,
                      Python, Node, Javascript, HTML and CSS, and integrating
                      with a variety of web services, databases, and content
                      repositories.
                    </Text>
                  </View>
                  <ResumeSectionHeader headerText="EXPERIENCE" />

                  <View>
                    <ResumeItem {...resumeItemPropObjectApple} />
                    <ResumeItem {...resumeItemPropObjectRubrik} />
                    <ResumeItem {...resumeItemPropObjectApple2} />
                    <ResumeItem {...resumeItemPropObjectCloudera} />
                    <ResumeFooter />
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
