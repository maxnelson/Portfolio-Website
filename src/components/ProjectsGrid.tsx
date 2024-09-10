import { ProjectDescription } from "./ProjectDescription";
import { ProjectGridItem } from "./ProjectsGridItem";
import { useState, useEffect } from "react";
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
          startDateMonth={projectDescriptionContent?.startDateMonth}
          startDateYear={projectDescriptionContent?.startDateYear}
          endDateMonth={projectDescriptionContent?.endDateMonth}
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
          <ProjectGridItem
            image1={projectGridData?.apple.image1}
            clientName={projectGridData?.apple.clientName}
            startDateYear={projectGridData?.apple.startDateYear}
            endDateYear={projectGridData?.apple.endDateYear}
            clickHandler={() => {
              clickHandler(projectGridData?.apple);
            }}
          />
          <ProjectGridItem
            image1={projectGridData?.rubrik.image1}
            clientName={projectGridData?.rubrik.clientName}
            startDateYear={projectGridData?.rubrik.startDateYear}
            endDateYear={projectGridData?.rubrik.endDateYear}
            clickHandler={() => {
              clickHandler(projectGridData?.rubrik);
            }}
          />
          <ProjectGridItem
            image1={projectGridData?.cloudera.image1}
            clientName={projectGridData?.cloudera.clientName}
            startDateYear={projectGridData?.cloudera.startDateYear}
            endDateYear={projectGridData?.cloudera.endDateYear}
            clickHandler={() => {
              clickHandler(projectGridData?.cloudera);
            }}
          />
          <ProjectGridItem
            image1={projectGridData?.gifhov.image1}
            clientName={projectGridData?.gifhov.clientName}
            startDateYear={projectGridData?.gifhov.startDateYear}
            endDateYear={projectGridData?.gifhov.endDateYear}
            clickHandler={() => {
              clickHandler(projectGridData?.gifhov);
            }}
          />
          <ProjectGridItem
            image1={projectGridData?.blog.image1}
            clientName={projectGridData?.blog.clientName}
            startDateYear={projectGridData?.blog.startDateYear}
            endDateYear={projectGridData?.blog.endDateYear}
            clickHandler={() => {
              clickHandler(projectGridData?.blog);
            }}
          />
        </div>
      )}
    </>
  );
};
