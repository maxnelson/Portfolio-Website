type resumeItemType = {
  image_0?: string;
  image_1?: string;
  image_2?: string;
  image_3?: string;
  image_4?: string;
  image_5?: string;
  image_6?: string;
  image_7?: string;
  image_8?: string;
  id?: string;
  startDateMonth?: string;
  startDateYear?: string;
  endDateMonth?: string;
  endDateYear?: string;
  client_name?: string;
  client_name_detail?: string;
  jobTitle?: string;
  location?: string;
  descriptio0?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  description7?: string;
  description8?: string;
  description9?: string;
  description10?: string;
  description11?: string;
  description12?: string;
  description13?: string;
  popoverDescription?: string;
  technologies_used?: string;
  descriptionFormatted?: JSX.Element;
};

export const resumeItemPropObjectApple: resumeItemType = {
  image_0: "/images/projects/apple/explore_app_simulator_1.jpg",
  image_1: "/images/projects/apple/explore_app_simulator_1.jpg",
  image_2: "/images/projects/apple/explore_app_simulator_2.png",
  image_3: "/images/projects/apple/explore_app_simulator_3.png",

  startDateMonth: "Aug",
  startDateYear: "2020",
  endDateMonth: "Sept",
  endDateYear: "2023",
  client_name: "Apple",
  client_name_detail: "Apple",
  jobTitle: "Lead UI Developer",
  location: "Cupertino, CA",
  description1:
    "Implemented Frontend production requirements for Retail display applications, including the ’Explore’ app, which is the default retail display application for iPhone (the one that opens when you interrupt the screensaver on iPhone display models).",
  description2:
    "Used an internal Swift application builder tool, utilizing SwiftUI syntax and patterns (HStacks, VStacks, etc.), to implement design, animation, and functional requirements from Marcom into pixel-perfect, highly-performant iOS applications, with high traffic volume, as the default display application in Apple Stores globally. Advanced from UI Editor to UI Dev Lead by:",
  description3:
    "Organizing Projects - Architecting project content into JSON data structures that satisfied complex business and application requirements.",
  description4:
    "Automating Processes - Writing Python scripts to verify the file signature of image files, compare and modify JSON documents. ",
  description5:
    "Troubleshooting Application Issues - Using tools like Proxyman, Xcode, and iOS Simulator, to QA and assist in resolving issues at many levels of the iOS application stack.",
  description6:
    "Managing - The day-to-day work of 2-5 other UI Editors during projects with firm deadlines dictated by Apple’s seasonal product release dates. Created educational resources used to onboard new UI Editors.",

  technologies_used:
    "Internal iOS application builder tool, SwiftUI syntax and patterns, JSON, Python, Proxyman, AEM, Git.",

  /*
    description2:
    "Advanced from UI Editor to UI Dev Lead by working closely with Retail engineering to troubleshoot application issues.",
  description3:
    "Organized projects, automated processes (wrote Python scripts), and created resources for other UI Editors. Managed the day-to-day work of 2-5 other UI Editors during projects with very firm deadlines.",
  
  popoverDescription:
    "Worked with Marcom and Retail Engineering to produce and deploy Retail Experience applications for iPhone.",
*/
};

export const resumeItemPropObjectRubrik: resumeItemType = {
  image_0: "/images/projects/rubrik/rubrik_homepage_1.png",
  image_1: "/images/projects/rubrik/rubrik_homepage_1.png",
  image_2: "/images/projects/rubrik/rubrik_homepage_2.png",
  image_3: "/images/projects/rubrik/rubrik_homepage_3.png",
  startDateMonth: "Jan",
  startDateYear: "2019",
  endDateMonth: "Feb",
  endDateYear: "2020",
  client_name: "Rubrik",
  client_name_detail: "Rubrik",
  jobTitle: "Frontend Web Developer",
  location: "Palo Alto, CA",
  description1:
    "Updated, maintained, and developed new page templates and components for the rubrik.com website using HTML, CSS (BEM), Javascript and PHP (Timber, Twig).",
  description2:
    "Developed marketing page sections, navigation menus, dynamic web forms with strict frontend validation, and more.",
  description3:
    "Used Javascript to develop Frontend integration with Greenhouse API, in order to develop the careers listing, careers detail, and Job application form components.",
  description10:
    "Used Java build tools (Maven) to maintain local instance of AEM for Frontend component development.",
  description11:
    "Used CRXDE Lite and AEM CMS to manage, sync and replicate content (marketing copy, image assets) between AEM instances (dev, stage, prod, pub).",
  description12:
    "Assisted in managing a CDN migration, working with Cloudflare and later Akamai to implement proper DNS configurations on existing, as well as newly acquired web domains.",
  description13:
    "Managed Google Analytics reports, as well as website performance testing for Marketing department.",
  technologies_used:
    "Docker, Wordpress, Timber, Twig, Javascript, Node, HTML, CSS (BEM), Git, AEM",
};

export const resumeItemPropObjectApple2: resumeItemType = {
  startDateMonth: "June",
  startDateYear: "2018",
  endDateMonth: "Jan",
  endDateYear: "2019",
  client_name: "Apple",
  client_name_detail: "Apple",
  jobTitle: "Email Template Developer",
  location: "Sunnyvale, CA",
  description1:
    "Used HTML, CSS (Stylus), and an internal templating framework to to develop a series of user-customizable email templates (newsletter, onboarding, announcements, etc) for use within global B2B sales department and across the company.",
  description2:
    "Worked closely with designers to negotiate cusomization boundaries and develop a modular design system capable of yielding consistent treatments for a range of possible component configurations and viewport sizes.",
  technologies_used: "HTML, CSS, Stylus, Node, Gulp, Git.",
};

export const resumeItemPropObjectCloudera: resumeItemType = {
  image_0: "/images/projects/cloudera/cloudera_homepage_1.png",
  image_1: "/images/projects/cloudera/cloudera_homepage_1.png",
  image_2: "/images/projects/cloudera/cloudera_homepage_2.png",
  image_3: "/images/projects/cloudera/cloudera_homepage_3.png",
  startDateMonth: "Oct",
  startDateYear: "2013",
  endDateMonth: "Aug",
  endDateYear: "2017",
  client_name: "Cloudera",
  client_name_detail: "Cloudera",
  jobTitle: "Frontend Web Developer",
  location: "San Francisco, CA",
  description1:
    "Worked with small team and agencies to develop and maintain the cloudera.com website and its associated web properties during a time of rapid company growth. Wore many hats, including the following:",
  description2:
    "Maintained, improved, and added new components to cloudera.com, using HTML, CSS, Javascript, JSP and HTL.",
  description3:
    "Developed a variety of Frontend components, including marketing page templates, filter-able grids, navigation menus, and dynamic forms with strict validation rules. Built corresponding authorable components in the AEM CMS using Granite and Coral UI, consumed author input values into website components using JSP scriptlets, later updating to HTL.",
  description5:
    "Used Java build tools (Maven) to maintain local AEM instance (Version 5.5, later upgrading to 5.6, 6.0 and 6.1) for Frontend component development. Used Git, Gitflow, and SourceTree to maintain version control. ",
  description6:
    "Administered the publication of website content. Used tools like CRXDE Lite, VLT-RPC, Query Builder to manage, sync and replicate content (user accounts, marketing copy, image assets) between AEM instances (dev, stage, prod, pub).",
  technologies_used:
    "AEM Stack, Apache Maven, JSP, HTL, Grunt, Jenkins, Javascript, HTML, CSS (SCSS), Git. ",
};

export const resumeItemPropObjectTimeline: resumeItemType = {
  image_0:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fprojects%2Ftimeline%2Ftimeline_homepage_2.jpg?alt=media&token=d632a6c6-d838-4213-9f8a-70cba399ad22",
  image_1:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fprojects%2Ftimeline%2Ftimeline_homepage_2.jpg?alt=media&token=d632a6c6-d838-4213-9f8a-70cba399ad22",

  startDateMonth: "",
  endDateMonth: "",
  startDateYear: "2023",
  endDateYear: "Current",
  client_name: "Timeline",
  client_name_detail: "Timeline",
  jobTitle: "",
  description1: "A web application for creating and sharing timelines.",
  description2:
    "This is a self-initiated project that I have built in order to keep up to date with a few of the technologies I’m interested, including React, D3.js and the OAuth2 protocol.",
  technologies_used: "Express, React, D3, Firebase, Google Cloud",
};

export const resumeItemPropObjectGifhov: resumeItemType = {
  image_0:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fdigital_art%2Fgifhov%2Fgifhov_screenshot_1.jpg?alt=media&token=ca52c3c8-29a8-439a-8555-74cebde5401d",
  image_1:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fdigital_art%2Fgifhov%2Fgifhov_project_grid_1.jpg?alt=media&token=8167e2a0-1355-4d3e-a2be-3e4773d2f5c3",
  startDateMonth: "Jan",
  startDateYear: "2014",
  endDateMonth: "Aug",
  endDateYear: "2015",
  client_name: "Gifhov",
  client_name_detail: "Gifhov",
  jobTitle: "",
  description1:
    "A web application for creating and sharing gif+audio combinations.",
  description2:
    "This is a self-initiated project that I built in 2015 as a way of getting more familiar with server and database technologies like Python Flask and PostgreSQL. Although I ended up learning a good deal about a few of the built-in (browser-implemented) Web APIs like the Web Audio API and the File API, as well.",
  description3:
    "Back then, this took me a couple months to build, but I recently rebuilt it using Express, React and Firestore, and it took me only a handful of hours. ",
  technologies_used:
    "Python, Flask, PostgreSQL, Javascript, Express, React HTML, CSS, Google Cloud Platform ",
};

export const resumeItemPropObjectLevis: resumeItemType = {
  image_0: "/images/projects/levis/levis_arcuate_image_1.jpg",
  image_1:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fdesign%2Fdesign_levis%2Fthe-arcuate-01.jpg?alt=media&token=c6672a33-3288-4a03-9100-d58b0e1ffde2",
  image_2:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fdesign%2Fdesign_levis%2Fthe-arcuate-02.jpg?alt=media&token=ec43e112-ff38-473f-996e-43497b306be9",
  image_3:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fdesign%2Fdesign_levis%2Fthe-arcuate-04.jpg?alt=media&token=91eb7873-95eb-4fc2-86f6-190133de4a27",

  startDateMonth: "May",
  startDateYear: "2012",
  endDateMonth: "Feb",
  endDateYear: "2013",
  client_name: "Levis",
  client_name_detail: "Levi Strauss & Co.",
  jobTitle: "Production Artist",
  description1:
    "Worked with Store Operations and Brand Environment, using Adobe Photoshop and Adobe Indesign to design and produce a variety of Retail communications including:",
  description2:
    "Monthly Retail Newsletter (printed and distributed to employees in Retail Stores globally)",
  description3:
    "Monthly Store Layout Instructions (printed and distributed to employees in Retail Stores globally)",
  description4: "Conference graphics (banners, signage, badges)",
  technologies_used: "Adobe Indesign, Adobe Photoshop, Adobe Illustrator",
  popoverDescription:
    "Worked with Store Operations and Brand Environment to design and produce a variety of Retail communications.",
};

export const resumeItemPropObjectMcdonalds: resumeItemType = {
  image_0:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds_project_grid.jpg?alt=media&token=16136497-1144-43c8-b6ee-2689db2d3aca",
  image_1:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-01.png?alt=media&token=0eb5cca8-81ef-4d6a-8e76-2d7cf5fcda16",
  image_2:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-02.png?alt=media&token=d40699c8-064c-49d3-bd6a-079e8a8af354",
  image_3:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-03.png?alt=media&token=9677320d-e027-4225-977a-0b6eeff8191f",
  image_4:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-04.png?alt=media&token=67634957-b7fc-4c56-9b70-533dc4db86f2",
  image_5:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-05.png?alt=media&token=a32b64de-3531-4ad1-a8ac-0466f144c746",
  image_6:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-07.png?alt=media&token=81d4d5f8-4135-4340-a93d-08b18781d11f",
  image_7:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-07.png?alt=media&token=81d4d5f8-4135-4340-a93d-08b18781d11f",
  image_8:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fmcdonalds%2Fmcdonalds-06.png?alt=media&token=d747f1dd-b87e-49e4-a556-5852c72dfdc8",

  startDateMonth: "March",
  startDateYear: "2010",
  endDateMonth: "April",
  endDateYear: "2011",
  client_name: "Schoolwork",
  client_name_detail: "",
  jobTitle: "",
  description1: "An assignment for a Corporate Design class at CSU Chico.",
  technologies_used: "Adobe Indesign, Adobe Photoshop, Adobe Illustrator",
};

export const resumeItemPropObjectSanPellegrino: resumeItemType = {
  image_0:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fsan_pellegrino%2Fsan_pellegrino_project_grid_2.jpg?alt=media&token=a24fe6d8-25ae-4638-b94c-71dc22c18e2f",
  image_1:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fsan_pellegrino%2FSan_Pellegrino.jpg?alt=media&token=830c84fc-04c8-48aa-9cd2-a79b6c66baea",
  image_2:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/sketchblog%2Fschoolwork%2Fsan_pellegrino%2Fnewbottle.jpg?alt=media&token=4213c7d2-379e-436c-b6ba-b7f2c4fb0b26",

  startDateMonth: "",
  endDateMonth: "",
  startDateYear: "2010",
  endDateYear: "2011",
  client_name: "Schoolwork",
  client_name_detail: "",
  jobTitle: "",
  description1:
    "An assignment for a Packaging design class taken at CSU Chico.",
  technologies_used: "Photoshop, Illustrator",
};

export const resumeItemPropObjectSketchblog: resumeItemType = {
  image_0:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fprojects%2Fsketchblog%2Fblog_screenshot_4.jpg?alt=media&token=a452d951-eb22-43d0-9541-89e1d66d4fac",
  image_1:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fprojects%2Fsketchblog%2Fblog_screenshot_4.jpg?alt=media&token=a452d951-eb22-43d0-9541-89e1d66d4fac",
  image_2:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fprojects%2Fsketchblog%2Fblog_screenshot.jpg?alt=media&token=c8b96986-9fa6-4745-b857-2813f0e026a7",
  image_3:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fprojects%2Fsketchblog%2Fblog_screenshot_3.jpg?alt=media&token=a61ec311-389f-4491-9ea7-b40c7f0cac1e",
  image_4:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fprojects%2Fsketchblog%2Fblog_screenshot_2.jpg?alt=media&token=b5b37db3-937d-4d19-9542-52932dbee7df",

  startDateMonth: "",
  startDateYear: "2008",
  endDateMonth: "",
  endDateYear: "2013",
  client_name: "Sketchblog",
  client_name_detail: "Sketchblog",
  jobTitle: "",
  description1:
    "My sketchblog is where I have posted a lot of my old design work, as well as drawings and digital art. Feel free to check it out!",
  description2: "sketchblog.maxnelsonwebsite.com",
  popoverDescription:
    "My sketchblog is where I have posted a lot of my old design work, as well as drawings and digital art.",
};

export const resumeItemPropObjectChico: resumeItemType = {
  startDateMonth: "Sept",
  startDateYear: "2007",
  endDateMonth: "Sept",
  endDateYear: "2011",
  client_name: "California State university, Chico",
  client_name_detail: "California State university, Chico",
  jobTitle: "BA in Graphic Design",
  location: "Chico, CA",
  id: "Chico",
  description1:
    "Studied many mediums of Graphic Design, including Information Design, Packaging, Corporate Identity, Typography, Illustration and Website Design with an upper-division theme in computer programming.",
};
