import { ProjectDescription } from "./ProjectDescription";
import { ProjectGridItem } from "./ProjectsGridItem";
import { useState } from "react";
import {
  resumeItemPropObjectApple,
  resumeItemPropObjectRubrik,
  resumeItemPropObjectCloudera,
  resumeItemPropObjectLevis,
  resumeItemPropObjectSketchblog,
  resumeItemPropObjectGifhov,
} from "@/components/Resume/ResumeData";
import { linkify_text } from "@/utility_functions/linkify_text";
import { NavLink } from "react-router-dom";

export const ProjectsGrid = ({
  projectDescriptionVisible,
  setProjectDescriptionVisible,
}) => {
  const [projectDescriptionContent, setProjectDescriptionContent] = useState();

  const clickHandler = (prop_object) => {
    setProjectDescriptionVisible(true);
    setProjectDescriptionContent(prop_object);
  };
  const rubrik_description_formatted = {
    __html: linkify_text(resumeItemPropObjectRubrik.description1),
  };
  const cloudera_description_formatted = {
    __html: linkify_text(resumeItemPropObjectCloudera.description1),
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
      <p dangerouslySetInnerHTML={rubrik_description_formatted}></p>
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
      <p dangerouslySetInnerHTML={cloudera_description_formatted}></p>
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
  const levisDescription = (
    <>
      <p>{resumeItemPropObjectLevis.description1}</p>
    </>
  );
  const gifhovDescription = (
    <>
      <p>{resumeItemPropObjectGifhov.description1}</p>
      <br />
      <a href="https://gifhov2.appspot.com/">gifhov2.appspot.com</a>
      <br />
      <br />

      <b>Technologies Used: </b>
      <p>{resumeItemPropObjectGifhov.technologies_used}</p>
    </>
  );
  const sketchblogDescription = (
    <>
      <p>{resumeItemPropObjectSketchblog.description1}</p>
      <br />
      <NavLink
        onClick={() => setProjectDescriptionVisible(false)}
        to={"/sketchblog"}
      >
        sketchblog.maxnelsonart.com
      </NavLink>
    </>
  );
  resumeItemPropObjectApple.descriptionFormatted = appleDescription;
  resumeItemPropObjectRubrik.descriptionFormatted = rubrikDescription;
  resumeItemPropObjectCloudera.descriptionFormatted = clouderaDescription;
  resumeItemPropObjectLevis.descriptionFormatted = levisDescription;
  resumeItemPropObjectSketchblog.descriptionFormatted = sketchblogDescription;
  resumeItemPropObjectGifhov.descriptionFormatted = gifhovDescription;

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
          <ProjectGridItem
            data_object={resumeItemPropObjectGifhov}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectGifhov);
            }}
          />
          <ProjectGridItem
            data_object={resumeItemPropObjectLevis}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectLevis);
            }}
          />
          <ProjectGridItem
            data_object={resumeItemPropObjectSketchblog}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectSketchblog);
            }}
          />
        </div>
      )}
    </>
  );
};
