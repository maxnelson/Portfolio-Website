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

interface resumeDataInterface {
  name: string;
  title: string;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  summary1: string;
  summary2: string;
  section1: {
    title: string;
    apple: {
      clientName: string;
      jobTitle: string;
      startDateMonth: string;
      startDateYear: string;
      endDateMonth: string;
      endDateYear: string;
      location: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
      technologies_used: string;
    };
    rubrik: {
      clientName: string;
      jobTitle: string;
      location: string;
      startDateMonth: string;
      startDateYear: string;
      endDateMonth: string;
      endDateYear: string;
      description1: string;
      description3: string;
      description2: string;
      description4: string;
      technologies_used: string;
    };
    cloudera: {
      clientName: string;
      jobTitle: string;
      location: string;
      startDateMonth: string;
      startDateYear: string;
      endDateMonth: string;
      endDateYear: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
      technologies_used: string;
    };
  };
  section2: {
    education: {
      title: string;
      degree: string;
      school: string;
      startDateYear: string;
      endDateYear: string;
      description: string;
    };
    skills: {
      title: string;
      skill1: {
        title: string;
        description: string;
      };
      skill2: {
        title: string;
        description: string;
      };
      skill3: {
        title: string;
        description: string;
      };
      skill4: {
        title: string;
        description: string;
      };
      skill5: {
        title: string;
        description: string;
      };
      skill6: {
        title: string;
        description: string;
      };
    };
  };
}

export const ResumePage = (_, setProjectDescriptionVisible) => {
  const [resumeData, setResumeData] = useState<resumeDataInterface | null>(
    null
  );
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
                  <ResumeSectionHeader title={resumeData?.section1.title} />
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
                    <ResumeFooter
                      educationTitle={resumeData?.section2.education.title}
                      degree={resumeData?.section2.education.degree}
                      school={resumeData?.section2.education.school}
                      startDateYear={
                        resumeData?.section2.education.startDateYear
                      }
                      endDateYear={resumeData?.section2.education.endDateYear}
                      description={resumeData?.section2.education.description}
                      skillsTitle={resumeData?.section2.skills.title}
                      skill1Title={resumeData?.section2.skills.skill1.title}
                      skill2Title={resumeData?.section2.skills.skill2.title}
                      skill3Title={resumeData?.section2.skills.skill3.title}
                      skill4Title={resumeData?.section2.skills.skill4.title}
                      skill5Title={resumeData?.section2.skills.skill5.title}
                      skill6Title={resumeData?.section2.skills.skill6.title}
                      skill1Description={
                        resumeData?.section2.skills.skill1.description
                      }
                      skill2Description={
                        resumeData?.section2.skills.skill2.description
                      }
                      skill3Description={
                        resumeData?.section2.skills.skill3.description
                      }
                      skill4Description={
                        resumeData?.section2.skills.skill4.description
                      }
                      skill5Description={
                        resumeData?.section2.skills.skill5.description
                      }
                      skill6Description={
                        resumeData?.section2.skills.skill6.description
                      }
                    />
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
