import { readFileSync } from "fs";
import projectGridData from "#src/content/projectGridData.json" with { type: "json" };
import { firestore_database_service_account } from "#root/src/utility_functions/config/firebaseAdminConfig.js";

export const uploadProjectGridData = async () => {
  const timelineDescription = readFileSync(
    "src/content/projectDescriptionsHTML/timelineDescription.html",
    "utf-8"
  );
  projectGridData.timeline.description = timelineDescription;
  const docRef = firestore_database_service_account.doc(
    "resumeData/projectGridData"
  );
  await docRef.update({ projectGridDataField: projectGridData });
};
uploadProjectGridData();
