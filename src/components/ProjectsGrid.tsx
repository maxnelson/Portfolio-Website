import { ProjectDescription } from "./ProjectDescription";
import { ProjectGridItem } from "./ProjectsGridItem";
import { useState } from "react";

export const ProjectsGrid = () => {
  const [projectDescriptionVisible, setProjectDescriptionVisible] =
    useState(false);
  const [projectDescriptionContent, setProjectDescriptionContent] = useState();

  const appleClickHandler = () => {
    setProjectDescriptionVisible(true);
    setProjectDescriptionContent(project_grid_prop_apple);
  };
  const rubrikClickHandler = () => {
    setProjectDescriptionVisible(true);
    setProjectDescriptionContent(project_grid_prop_rubrik);
  };
  const clouderaClickHandler = () => {
    setProjectDescriptionVisible(true);
    setProjectDescriptionContent(project_grid_prop_cloudera);
  };

  const project_grid_prop_apple = {
    image: "/public/images/projects/apple/apple_square.jpg",
    client_name: "Apple",
    duration_text: "2020 - 2023",
    clickHandler: appleClickHandler,
    set_description_false: () => {
      setProjectDescriptionVisible(false);
    },
    title: "UI Dev Lead",
    description: (
      <>
        <p>
          Working cross-functionally between MarCom and Retail Engineering teams
          to develop and deploy Retail Experience applications for iPhone,
          available on in-store devices in Apple stores globally.
        </p>
        <br />
        <ul>
          <li>
            Overseeing the implementation of static designs and functional
            requirements from Marcom into iPhone applications with Apple-level
            scrutiny towards fidelity to layout specifications and animation
            behavior.
          </li>
          <li>
            Advanced from UI Editor to UI Dev Lead by organizing projects,
            automating processes, and creating resources for other UI Editors.
          </li>
          <li>
            Technologies Used: Internal iPhone Application Development Tools,
            Swift & SwiftUI, AEM, JSON, Proxyman, Git.
          </li>
        </ul>
      </>
    ),
  };
  const project_grid_prop_rubrik = {
    image: "/public/images/projects/rubrik/rubrik_homepage_square.jpg",
    client_name: "Rubrik",
    duration_text: "2019 - 2020",
    title: "Front End Web Developer",
    clickHandler: rubrikClickHandler,
    set_description_false: () => {
      setProjectDescriptionVisible(false);
    },
    description: (
      <>
        <p>
          Working with team and agencies to develop and maintain the rubrik.com
          web property. Developing Wordpress page templates with advanced front
          end requirements, dynamic web form experiences, and API integrations
          with multiple web services.
        </p>
        <br />
        <ul>
          <li>
            Working with remote agencies and developers to develop authorable
            web components integrating with a JSR-170 repository.
          </li>
          <li>
            Technologies Used: HTML, SCSS, Javascript, Wordpress, PHP, Timber,
            Twig, Marketo, AEM, HTL (Sightly), Maven, NPM, Git.
          </li>
        </ul>
      </>
    ),
  };
  const project_grid_prop_cloudera = {
    image: "/public/images/projects/cloudera/cloudera_homepage_square.jpg",
    client_name: "Cloudera",
    duration_text: "2013 - 2017",
    title: "Front End Web Developer",
    clickHandler: clouderaClickHandler,
    set_description_false: () => {
      setProjectDescriptionVisible(false);
    },
    description: (
      <>
        <p>
          Working closely with team and agencies to develop and maintain the
          cloudera.com website and it’s associated web properties. •
        </p>
        <br />
        <ul>
          <li>
            Developing platform integrations utilizing data from various APIs
            including Learndot, Demandbase, Jobvite, Eloqua and SFDC.
          </li>
          <li>
            Creating dynamic AEM components with advanced front-end
            functionality, utilizing JSP scriptlets, later updating to Sightly.
          </li>
          <li>
            Technologies Used: AEM stack [Java, OSGi, JCR (JackRabbit Oak), CRX,
            JSP, Apache Sling, ExtJS, Sightly], Apache Maven, Apache Ant XSLT,
            Eloqua, SFDC, Apex, Git, Wordpress, PHP, Javascript, jQuery, ES6,
            HTML5, CSS3, SCSS, Grunt, Jenkins.
          </li>
        </ul>
      </>
    ),
  };
  return (
    <div className="projects_section">
      {projectDescriptionVisible ? (
        <ProjectDescription {...projectDescriptionContent} />
      ) : (
        <div className="project_grid_container" id="project_grid_container">
          <ProjectGridItem {...project_grid_prop_apple} />
          <ProjectGridItem {...project_grid_prop_rubrik} />
          <ProjectGridItem {...project_grid_prop_cloudera} />
          <ProjectGridItem {...project_grid_prop_cloudera} />
          <ProjectGridItem {...project_grid_prop_cloudera} />
        </div>
      )}
    </div>
  );
};
