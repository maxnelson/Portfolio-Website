import { ResumeHeader } from "@/components/Resume/PDF/ResumeHeader";
import { ResumeFooter } from "@/components/Resume/PDF/ResumeFooter";
import { ResumeItem } from "@/components/Resume/PDF/ResumeItem";
import { PDFViewer, Document, Page, View } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { ResumeSectionHeader } from "@/components/Resume/PDF/ResumeSectionHeader";
import { SummarySection } from "@/components/Resume/PDF/SummarySection";

export const SinglePageResume = (props) => {
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "75rem" }}>
        <Document>
          <Page size="LETTER">
            <View style={styles.page_container}>
              <ResumeHeader
                name={props.resumeData?.name.toUpperCase()}
                title={props.resumeData?.title}
                email={props.resumeData?.contactInfo.email}
                phone={props.resumeData?.contactInfo.phone}
                website={props.resumeData?.contactInfo.website}
              />
              <SummarySection
                summary1={props.resumeData?.summary1}
                summary2={props.resumeData?.summary2}
              />
              <ResumeSectionHeader title={props.resumeData?.section1.title} />
              <View>
                <ResumeItem
                  clientName={props.resumeData?.section1.apple.clientName}
                  jobTitle={props.resumeData?.section1.apple.jobTitle}
                  startDateMonth={
                    props.resumeData?.section1.apple.startDateMonth
                  }
                  endDateMonth={props.resumeData?.section1.apple.endDateMonth}
                  startDateYear={props.resumeData?.section1.apple.startDateYear}
                  endDateYear={props.resumeData?.section1.apple.endDateYear}
                  description1={props.resumeData?.section1.apple.description1}
                  description2={props.resumeData?.section1.apple.description2}
                  description3={props.resumeData?.section1.apple.description3}
                  description4={props.resumeData?.section1.apple.description4}
                  description5={props.resumeData?.section1.apple.description5}
                  technologies_used={
                    props.resumeData?.section1.apple.technologies_used
                  }
                />
                <ResumeItem
                  clientName={props.resumeData?.section1.rubrik.clientName}
                  jobTitle={props.resumeData?.section1.rubrik.jobTitle}
                  startDateMonth={
                    props.resumeData?.section1.rubrik.startDateMonth
                  }
                  endDateMonth={props.resumeData?.section1.rubrik.endDateMonth}
                  startDateYear={
                    props.resumeData?.section1.rubrik.startDateYear
                  }
                  endDateYear={props.resumeData?.section1.rubrik.endDateYear}
                  description1={props.resumeData?.section1.rubrik.description1}
                  description2={props.resumeData?.section1.rubrik.description2}
                  description3={props.resumeData?.section1.rubrik.description3}
                  description4={props.resumeData?.section1.rubrik.description4}
                  technologies_used={
                    props.resumeData?.section1.rubrik.technologies_used
                  }
                />
                <ResumeItem
                  clientName={props.resumeData?.section1.cloudera.clientName}
                  jobTitle={props.resumeData?.section1.cloudera.jobTitle}
                  startDateMonth={
                    props.resumeData?.section1.cloudera.startDateMonth
                  }
                  endDateMonth={
                    props.resumeData?.section1.cloudera.endDateMonth
                  }
                  startDateYear={
                    props.resumeData?.section1.cloudera.startDateYear
                  }
                  endDateYear={props.resumeData?.section1.cloudera.endDateYear}
                  description1={
                    props.resumeData?.section1.cloudera.description1
                  }
                  description2={
                    props.resumeData?.section1.cloudera.description2
                  }
                  description3={
                    props.resumeData?.section1.cloudera.description3
                  }
                  description4={
                    props.resumeData?.section1.cloudera.description4
                  }
                  technologies_used={
                    props.resumeData?.section1.cloudera.technologies_used
                  }
                />
                <ResumeFooter
                  educationTitle={props.resumeData?.section2.education.title}
                  degree={props.resumeData?.section2.education.degree}
                  school={props.resumeData?.section2.education.school}
                  startDateYear={
                    props.resumeData?.section2.education.startDateYear
                  }
                  endDateYear={props.resumeData?.section2.education.endDateYear}
                  description={props.resumeData?.section2.education.description}
                  skillsTitle={props.resumeData?.section2.skills.title}
                  skill1Title={props.resumeData?.section2.skills.skill1.title}
                  skill2Title={props.resumeData?.section2.skills.skill2.title}
                  skill3Title={props.resumeData?.section2.skills.skill3.title}
                  skill4Title={props.resumeData?.section2.skills.skill4.title}
                  skill5Title={props.resumeData?.section2.skills.skill5.title}
                  skill6Title={props.resumeData?.section2.skills.skill6.title}
                  skill1Description={
                    props.resumeData?.section2.skills.skill1.description
                  }
                  skill2Description={
                    props.resumeData?.section2.skills.skill2.description
                  }
                  skill3Description={
                    props.resumeData?.section2.skills.skill3.description
                  }
                  skill4Description={
                    props.resumeData?.section2.skills.skill4.description
                  }
                  skill5Description={
                    props.resumeData?.section2.skills.skill5.description
                  }
                  skill6Description={
                    props.resumeData?.section2.skills.skill6.description
                  }
                />
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};
