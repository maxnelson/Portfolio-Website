import { ProjectDescription } from "./ProjectDescription";
import { ProjectGridItem } from "./ProjectsGridItem";
import { useState, useEffect } from "react";
import {
  resumeItemPropObjectApple,
  resumeItemPropObjectRubrik,
  resumeItemPropObjectCloudera,
  resumeItemPropObjectSketchblog,
  resumeItemPropObjectGifhov,
} from "@/components/Resume/ResumeData";
import { linkify_text } from "@/utility_functions/linkify_text";
import { NavLink } from "react-router-dom";
import { getProjectGridData } from "@/utility_functions/fetchData/getProjectGridData";

export const ProjectsGrid = ({
  projectDescriptionVisible,
  setProjectDescriptionVisible,
}) => {
  const [projectDescriptionContent, setProjectDescriptionContent] = useState();
  const [projectGridData, setProjectGridData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjectGridData = await getProjectGridData();
      setProjectGridData(fetchedProjectGridData);
    };
    fetchData();
  }, []);
  console.log(projectGridData);

  const clickHandler = (gridItemDataObject) => {
    setProjectDescriptionVisible(true);
    setProjectDescriptionContent(gridItemDataObject);
  };
  return (
    <>
      {projectDescriptionVisible ? (
        <ProjectDescription
          data_object={projectDescriptionContent}
          image1={projectDescriptionContent?.image1}
          image2={projectDescriptionContent?.image2}
          image3={projectDescriptionContent?.image3}
          image4={projectDescriptionContent?.image4}
          clientName={projectDescriptionContent?.clientName}
          jobTitle={projectDescriptionContent?.jobTitle}
          startDateYear={projectDescriptionContent?.startDateYear}
          endDateYear={projectDescriptionContent?.endDateYear}
          description={projectDescriptionContent?.description}
          clickHandler={() => {
            setProjectDescriptionVisible(false);
          }}
        />
      ) : (
        <div className="project_grid_container">
          <ProjectGridItem
            image1={projectGridData?.timeline.image1}
            clientName={projectGridData?.timeline.clientName}
            startDateYear={projectGridData?.timeline.startDateYear}
            endDateYear={projectGridData?.timeline.endDateYear}
            clickHandler={() => {
              clickHandler(projectGridData?.timeline);
            }}
          />
          {/* 
          <ProjectGridItem
            data_object={resumeItemPropObjectApple}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectApple);
            }}
          />
          
          <ProjectGridItem
            data_object={resumeItemPropObjectRubrik}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectRubrik);
            }}
          />
          <ProjectGridItem
            data_object={resumeItemPropObjectCloudera}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectCloudera);
            }}
          />

          <ProjectGridItem
            data_object={resumeItemPropObjectGifhov}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectGifhov);
            }}
          />
          <ProjectGridItem
            data_object={resumeItemPropObjectSketchblog}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectSketchblog);
            }}
          />
          */}
        </div>
      )}
    </>
  );
};
