import { ResumeHeader } from "@/components/Resume/ResumeHeader";
import { ResumeFooter } from "@/components/Resume/ResumeFooter";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { PDFViewer, Document, Page, View } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import {
  resumeItemPropObjectApple,
  resumeItemPropObjectRubrik,
  //resumeItemPropObjectApple2,
  resumeItemPropObjectCloudera,
} from "@/components/Resume/ResumeData";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import { ResumeSectionHeader } from "@/components/Resume/ResumeSectionHeader";
import { SummarySection } from "@/components/Resume/SummarySection";

export const ResumePage = (_, setProjectDescriptionVisible) => {
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section">
          <PDFViewer style={{ width: "100%", height: "64.5rem" }}>
            <Document>
              <Page size="LETTER">
                <View style={styles.page_container}>
                  <ResumeHeader />
                  <SummarySection />
                  <ResumeSectionHeader headerText="EXPERIENCE" />
                  <View>
                    <ResumeItem {...resumeItemPropObjectApple} />
                    <ResumeItem {...resumeItemPropObjectRubrik} />
                    {/*}
                    <ResumeItem {...resumeItemPropObjectApple2} />
                    */}
                    <ResumeItem {...resumeItemPropObjectCloudera} />
                    <ResumeFooter />
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </div>
        <div className="display_block">
          <p>Decided to have some fun and build my Resume using React-PDF.</p>
        </div>
        <Footer />
      </div>
    </>
  );
};
