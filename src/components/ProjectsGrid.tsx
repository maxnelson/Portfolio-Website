import { ProjectDescription } from "./ProjectDescription";
import { ProjectGridItem } from "./ProjectsGridItem";
import { useState } from "react";
import {
  resumeItemPropObjectApple,
  resumeItemPropObjectRubrik,
  resumeItemPropObjectCloudera,
} from "@/components/Resume/ResumeData";

export const ProjectsGrid = ({
  projectDescriptionVisible,
  setProjectDescriptionVisible,
}) => {
  const [projectDescriptionContent, setProjectDescriptionContent] = useState();

  const clickHandler = (prop_object) => {
    setProjectDescriptionVisible(true);
    setProjectDescriptionContent(prop_object);
  };

  const appleDescription = (
    <>
      <p>{resumeItemPropObjectApple.description1}</p>
      <br />
      <ul>
        <li>{resumeItemPropObjectApple.description2?.slice(2)}</li>
        <li>{resumeItemPropObjectApple.description3?.slice(2)}</li>
      </ul>
      <div>
        <b>Technologies Used: </b>
        <p>{resumeItemPropObjectApple.technologies_used}</p>
      </div>
    </>
  );
  const rubrikDescription = (
    <>
      <p>{resumeItemPropObjectRubrik.description1}</p>
      <br />
      <ul>
        <li>{resumeItemPropObjectRubrik.description2?.slice(2)}</li>
      </ul>
      <div>
        <b>Technologies Used: </b>
        <p>{resumeItemPropObjectRubrik.technologies_used}</p>
      </div>
    </>
  );
  const clouderaDescription = (
    <>
      <p>{resumeItemPropObjectCloudera.description1}</p>
      <br />
      <ul>
        <li>{resumeItemPropObjectCloudera.description2?.slice(2)}</li>
        <li>{resumeItemPropObjectCloudera.description3?.slice(2)}</li>
      </ul>
      <div>
        <b>Technologies Used: </b>
        <p>{resumeItemPropObjectCloudera.technologies_used}</p>
      </div>
    </>
  );
  resumeItemPropObjectApple.descriptionFormatted = appleDescription;
  resumeItemPropObjectRubrik.descriptionFormatted = rubrikDescription;
  resumeItemPropObjectCloudera.descriptionFormatted = clouderaDescription;
  return (
    <>
      {projectDescriptionVisible ? (
        <ProjectDescription
          data_object={projectDescriptionContent}
          clickHandler={() => {
            setProjectDescriptionVisible(false);
          }}
        />
      ) : (
        <div className="project_grid_container" id="project_grid_container">
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
        </div>
      )}
    </>
  );
};
