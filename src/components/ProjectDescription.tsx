import {
  useState,
  useEffect,
} from "react";
import { getProjectData } from "#src/utility_functions/fetchData/getProjectGridData.js";
import { projectDataModel } from "#src/types/models.ts";

export const ProjectDescription = (
  props
) => {
  const [projectData, setProjectData] =
    useState<projectDataModel | null>(
      null
    );
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjectData =
        await getProjectData(
          props.projectDescriptionContentName
        );
      setProjectData(
        fetchedProjectData
      );
    };
    fetchData();
  }, []);
  console.log(
    props.projectDescriptionContentName
  );
  console.log(projectData);
  return (
    <div className="project_description_container">
      <div className="project_description_container_images">
        {projectData?.image1 ? (
          <img
            src={projectData?.image1}
          ></img>
        ) : null}
        {projectData?.image2 ? (
          <img
            src={projectData?.image2}
          ></img>
        ) : null}
        {projectData?.image3 ? (
          <img
            src={projectData?.image3}
          ></img>
        ) : null}
        {projectData?.image4 ? (
          <img
            src={projectData?.image4}
          ></img>
        ) : null}
      </div>
      <div className="project_description_text_container _word-wrap--break-word">
        {projectData?.clientName && (
          <div className="_margin-bottom--1rem">
            <h3>
              {projectData?.clientName}
            </h3>
            <p
              style={{
                fontSize: "12pt",
                marginTop: "0",
                marginBottom: "0",
              }}
            >
              {projectData?.jobTitle}
            </p>
            <span>
              {(projectData?.startDateYear
                ? projectData?.startDateMonth +
                  " " +
                  projectData?.startDateYear
                : "") +
                (projectData?.endDateYear
                  ? " - " +
                    projectData?.endDateMonth +
                    " " +
                    projectData?.endDateYear
                  : "")}
            </span>
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html:
              projectData?.description ||
              "",
          }}
        ></div>

        <div className="back-button">
          <a href="/">
            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-left"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
