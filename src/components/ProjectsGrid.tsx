import { ProjectDescription } from "./ProjectDescription";
import { ProjectGridItem } from "./ProjectsGridItem";
import {
  useState,
  useEffect,
} from "react";
import { getProjectGridData } from "@/utility_functions/fetchData/getProjectGridData";

interface projectGridDataInterface {
  timeline: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    clientName: string;
    jobTitle: string;
    location: string;
    startDateYear: string;
    endDateYear: string;
    description: string;
  };
  apple: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    clientName: string;
    jobTitle: string;
    location: string;
    startDateYear: string;
    endDateYear: string;
    description: string;
  };
  rubrik: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    clientName: string;
    jobTitle: string;
    location: string;
    startDateYear: string;
    endDateYear: string;
    description: string;
  };
  cloudera: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    clientName: string;
    jobTitle: string;
    location: string;
    startDateYear: string;
    endDateYear: string;
    description: string;
  };
  gifhov: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    clientName: string;
    jobTitle: string;
    location: string;
    startDateYear: string;
    endDateYear: string;
    description: string;
  };
  blog: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    clientName: string;
    jobTitle: string;
    location: string;
    startDateYear: string;
    endDateYear: string;
    description: string;
  };
}

export const ProjectsGrid = ({
  projectDescriptionVisible,
  projectDescriptionContentName,
}) => {
  const [
    projectGridData,
    setProjectGridData,
  ] =
    useState<projectGridDataInterface | null>(
      null
    );
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjectGridData =
        await getProjectGridData();
      setProjectGridData(
        fetchedProjectGridData
      );
    };
    fetchData();
  }, []);

  const sortedProjectGridData =
    projectGridData
      ? Object.values(
          projectGridData
        ).sort((a, b) => {
          return (
            a.gridSequence -
            b.gridSequence
          );
        })
      : [];

  return (
    <>
      {projectDescriptionVisible ? (
        <ProjectDescription
          data_object={
            projectGridData?.[
              projectDescriptionContentName
            ]
          }
        />
      ) : (
        <div className="project_grid_container">
          {sortedProjectGridData.map(
            (projectData) => {
              return (
                <ProjectGridItem
                  image1={
                    projectData?.image1
                  }
                  clientName={
                    projectData?.clientName
                  }
                  startDateYear={
                    projectData?.startDateYear
                  }
                  endDateYear={
                    projectData?.endDateYear
                  }
                  projectDescriptionContentName={projectData?.clientName.toLowerCase()}
                  key={
                    projectData?.clientName
                  }
                />
              );
            }
          )}
        </div>
      )}
    </>
  );
};
