import { ResumeHeader } from "@/components/Resume/ResumeHeader";
import { ResumeFooter } from "@/components/Resume/ResumeFooter";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import { PDFViewer, Document, Page, View } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import { ResumeSectionHeader } from "@/components/Resume/ResumeSectionHeader";
import { SummarySection } from "@/components/Resume/SummarySection";
import { useEffect, useState } from "react";
import { getResumeData } from "@/utility_functions/fetchData/getResumeData";

export const ResumePage = (_, setProjectDescriptionVisible) => {
  const [resumeData, setResumeData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedResumeData = await getResumeData();
      setResumeData(fetchedResumeData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={setProjectDescriptionVisible}
        />
        <div className="main_section">
          <PDFViewer style={{ width: "100%", height: "75rem" }}>
            <Document>
              <Page size="LETTER">
                <View style={styles.page_container}>
                  <ResumeHeader
                    name={resumeData?.name.toUpperCase()}
                    title={resumeData?.title}
                    email={resumeData?.contactInfo.email}
                    phone={resumeData?.contactInfo.phone}
                    website={resumeData?.contactInfo.website}
                  />
                  <SummarySection
                    summary1={resumeData?.summary1}
                    summary2={resumeData?.summary2}
                  />
                  <ResumeSectionHeader
                    sectionTitle={resumeData?.section1.title.toUpperCase()}
                  />
                  <View>
                    <ResumeItem
                      clientName={resumeData?.section1.apple.clientName}
                      jobTitle={resumeData?.section1.apple.jobTitle}
                      startDateMonth={resumeData?.section1.apple.startDateMonth}
                      endDateMonth={resumeData?.section1.apple.endDateMonth}
                      startDateYear={resumeData?.section1.apple.startDateYear}
                      endDateYear={resumeData?.section1.apple.endDateYear}
                      description1={resumeData?.section1.apple.description1}
                      description2={resumeData?.section1.apple.description2}
                      description3={resumeData?.section1.apple.description3}
                      description4={resumeData?.section1.apple.description4}
                      technologies_used={
                        resumeData?.section1.apple.technologies_used
                      }
                    />
                    <ResumeItem
                      clientName={resumeData?.section1.rubrik.clientName}
                      jobTitle={resumeData?.section1.rubrik.jobTitle}
                      startDateMonth={
                        resumeData?.section1.rubrik.startDateMonth
                      }
                      endDateMonth={resumeData?.section1.rubrik.endDateMonth}
                      startDateYear={resumeData?.section1.rubrik.startDateYear}
                      endDateYear={resumeData?.section1.rubrik.endDateYear}
                      description1={resumeData?.section1.rubrik.description1}
                      description2={resumeData?.section1.rubrik.description2}
                      description3={resumeData?.section1.rubrik.description3}
                      description4={resumeData?.section1.rubrik.description4}
                      technologies_used={
                        resumeData?.section1.rubrik.technologies_used
                      }
                    />
                    <ResumeItem
                      clientName={resumeData?.section1.cloudera.clientName}
                      jobTitle={resumeData?.section1.cloudera.jobTitle}
                      startDateMonth={
                        resumeData?.section1.cloudera.startDateMonth
                      }
                      endDateMonth={resumeData?.section1.cloudera.endDateMonth}
                      startDateYear={
                        resumeData?.section1.cloudera.startDateYear
                      }
                      endDateYear={resumeData?.section1.cloudera.endDateYear}
                      description1={resumeData?.section1.cloudera.description1}
                      description2={resumeData?.section1.cloudera.description2}
                      description3={resumeData?.section1.cloudera.description3}
                      description4={resumeData?.section1.cloudera.description4}
                      technologies_used={
                        resumeData?.section1.cloudera.technologies_used
                      }
                    />
                    <ResumeFooter />
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>
          <div className="display_block _margin-top--2rem">
            <p>This Resume was generated using React-PDF :)</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
