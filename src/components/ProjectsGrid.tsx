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
  resumeItemPropObjectMcdonalds,
  resumeItemPropObjectSanPellegrino,
  resumeItemPropObjectTimeline,
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

  const appleDescription = (
    <>
      <p>{resumeItemPropObjectApple.description1}</p>
      <p>{resumeItemPropObjectApple.description2}</p>
      <br />
      <ul>
        <li>{resumeItemPropObjectApple.description3}</li>
        <li>{resumeItemPropObjectApple.description4}</li>
        <li>{resumeItemPropObjectApple.description5}</li>
        <li>{resumeItemPropObjectApple.description6}</li>
      </ul>
      <div>
        <p>
          <b>Technologies Used: </b>
          {resumeItemPropObjectApple.technologies_used}
        </p>
      </div>
    </>
  );

  const rubrikDescription = (
    <>
      <p dangerouslySetInnerHTML={rubrik_description_formatted}></p>
      <br />
      <ul>
        <li>{resumeItemPropObjectRubrik.description2}</li>
        <li>{resumeItemPropObjectRubrik.description3}</li>
        <li>{resumeItemPropObjectRubrik.description10}</li>
        <li>{resumeItemPropObjectRubrik.description11}</li>
        <li>{resumeItemPropObjectRubrik.description12}</li>
        <li>{resumeItemPropObjectRubrik.description13}</li>
      </ul>
      <div>
        <p>
          <b>Technologies Used: </b>
          {resumeItemPropObjectRubrik.technologies_used}
        </p>
      </div>
    </>
  );
  const clouderaDescription = (
    <>
      <p> {resumeItemPropObjectCloudera.description1}</p>
      <br />
      <ul>
        <li>{resumeItemPropObjectCloudera.description2}</li>
        <li>{resumeItemPropObjectCloudera.description3}</li>
        <li>{resumeItemPropObjectCloudera.description4}</li>
        <li>{resumeItemPropObjectCloudera.description5}</li>
        <li>{resumeItemPropObjectCloudera.description6}</li>
        <li>{resumeItemPropObjectCloudera.description7}</li>
        <li>{resumeItemPropObjectCloudera.description8}</li>
      </ul>
      <div>
        <p>
          <b>Technologies Used: </b>
          {resumeItemPropObjectCloudera.technologies_used}
        </p>
      </div>
    </>
  );
  const levisDescription = (
    <>
      <p>{resumeItemPropObjectLevis.description1}</p>
      <br />
      <ul>
        <li>{resumeItemPropObjectLevis.description2}</li>
        <li>{resumeItemPropObjectLevis.description3}</li>
        <li>{resumeItemPropObjectLevis.description4}</li>
      </ul>
    </>
  );
  const gifhovDescription = (
    <>
      <p>{resumeItemPropObjectGifhov.description1}</p>
      <br />
      <p>{resumeItemPropObjectGifhov.description2}</p>
      <br />
      <iframe
        scrolling="no"
        frameBorder="0"
        src="gifhov2.appspot.com/embed/b51999b34395"
        height="236"
        width="449"
      ></iframe>
      <a href="https://new-gifhov.wl.r.appspot.com/" target="_blank">
        https://new-gifhov.wl.r.appspot.com/
      </a>
      <br />
      <br />

      <p>
        <b>Technologies Used: </b>
        {resumeItemPropObjectGifhov.technologies_used}
      </p>
    </>
  );
  const sketchblogDescription = (
    <>
      <p>{resumeItemPropObjectSketchblog.description1}</p>
      <br />
      <NavLink
        onClick={() => setProjectDescriptionVisible(false)}
        to={"/sketchblog/design"}
      >
        sketchblog.maxnelsonart.com
      </NavLink>
    </>
  );
  const mcdonaldsDescription = (
    <>
      <p>{resumeItemPropObjectMcdonalds.description1}</p>
      <br />
      <p>
        Feel free to check out my old schoolwork and more on my Design Blog:
      </p>

      <br />
      <p>
        <a
          target="_blank"
          href={
            window.location.origin +
            "/sketchblog/schoolwork/schoolwork_mcdonalds"
          }
        >
          {window.location.origin +
            "/sketchblog/schoolwork/schoolwork_mcdonalds"}
        </a>
      </p>
      <br />
      <p>
        <b>Technologies Used: </b>
        {resumeItemPropObjectMcdonalds.technologies_used}
      </p>
    </>
  );
  const sanpellegrinoDescription = (
    <>
      <p>{resumeItemPropObjectSanPellegrino.description1}</p>
      <br />

      <p>
        <b>Technologies Used: </b>
        {resumeItemPropObjectSanPellegrino.technologies_used}
      </p>
    </>
  );
  const timelineDescription = (
    <>
      <p>{resumeItemPropObjectTimeline.description1}</p>
      <br />
      <p>{resumeItemPropObjectTimeline.description2}</p>
      <br />
      <a href="https://timeline-react.wl.r.appspot.com/" target="_blank">
        https://timeline-react.wl.r.appspot.com/
      </a>
      <br />
      <br />
      <p>
        <b>Technologies Used: </b>
        {resumeItemPropObjectTimeline.technologies_used}
      </p>
    </>
  );
  resumeItemPropObjectApple.descriptionFormatted = appleDescription;
  resumeItemPropObjectRubrik.descriptionFormatted = rubrikDescription;
  resumeItemPropObjectCloudera.descriptionFormatted = clouderaDescription;
  resumeItemPropObjectLevis.descriptionFormatted = levisDescription;
  resumeItemPropObjectSketchblog.descriptionFormatted = sketchblogDescription;
  resumeItemPropObjectGifhov.descriptionFormatted = gifhovDescription;
  resumeItemPropObjectMcdonalds.descriptionFormatted = mcdonaldsDescription;
  resumeItemPropObjectSanPellegrino.descriptionFormatted =
    sanpellegrinoDescription;
  resumeItemPropObjectTimeline.descriptionFormatted = timelineDescription;

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
        <div className="project_grid_container">
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
            data_object={resumeItemPropObjectTimeline}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectTimeline);
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
            data_object={resumeItemPropObjectMcdonalds}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectMcdonalds);
            }}
          />
          {/*
          <ProjectGridItem
            data_object={resumeItemPropObjectSanPellegrino}
            clickHandler={() => {
              clickHandler(resumeItemPropObjectSanPellegrino);
            }}
          />
          */}
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
