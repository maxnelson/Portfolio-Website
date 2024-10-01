import { readFileSync } from "fs";
import projectGridData from "#src/content/projectGridData.json";
import { firestore_database_service_account } from "#src/utility_functions/config/firebaseAdminConfig.js";

export const uploadProjectGridData =
  async () => {
    const timelineDescription =
      readFileSync(
        "src/content/projectDescriptionsHTML/timelineDescription.html",
        "utf-8"
      );
    const appleDescription =
      readFileSync(
        "src/content/projectDescriptionsHTML/appleDescription.html",
        "utf-8"
      );
    const rubrikDescription =
      readFileSync(
        "src/content/projectDescriptionsHTML/rubrikDescription.html",
        "utf-8"
      );
    const clouderaDescription =
      readFileSync(
        "src/content/projectDescriptionsHTML/clouderaDescription.html",
        "utf-8"
      );
    const gifhovDescription =
      readFileSync(
        "src/content/projectDescriptionsHTML/gifhovDescription.html",
        "utf-8"
      );
    const blogDescription =
      readFileSync(
        "src/content/projectDescriptionsHTML/blogDescription.html",
        "utf-8"
      );
    projectGridData.timeline.description =
      timelineDescription;
    projectGridData.apple.description =
      appleDescription;
    projectGridData.rubrik.description =
      rubrikDescription;
    projectGridData.cloudera.description =
      clouderaDescription;
    projectGridData.gifhov.description =
      gifhovDescription;
    projectGridData.blog.description =
      blogDescription;
    const docRef =
      firestore_database_service_account.doc(
        "resumeData/projectGridData"
      );

    await docRef.update({
      projectGridDataField:
        projectGridData,
    });
  };
uploadProjectGridData();
