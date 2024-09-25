import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import {
  useEffect,
  useState,
} from "react";
import { getResumeData } from "@/utility_functions/fetchData/getResumeData";
import { ResumePicker } from "@/components/Resume/ResumePicker/ResumePicker";
import { ResumePDF } from "@/components/Resume/PDF/ResumePDF";
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
      description5: string;
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

export const ResumePage = (
  _,
  setProjectDescriptionVisible
) => {
  const [resumeData, setResumeData] =
    useState<resumeDataInterface | null>(
      null
    );
  const [resumeType, setResumeType] =
    useState("single");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedResumeData =
        await getResumeData();
      setResumeData(fetchedResumeData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={
            setProjectDescriptionVisible
          }
        />
        <div className="main_section">
          <ResumePicker
            resumeType={resumeType}
            setResumeType={
              setResumeType
            }
          />
          <ResumePDF
            resumeType={resumeType}
            resumeData={resumeData}
          />

          <div className="display_block _margin-top--2rem">
            <p>
              This Resume was generated
              using React-PDF :)
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
