import { readFileSync } from "fs";
import { firestore_database_service_account } from "#root/src/utility_functions/config/firebaseAdminConfig.js";

export const uploadAboutPagedData =
  async () => {
    const aboutPageDescription =
      readFileSync(
        "src/content/projectDescriptionsHTML/aboutPage.html",
        "utf-8"
      );
    const aboutPageDataObject = {
      data: aboutPageDescription,
    };
    const aboutPageDocRef =
      firestore_database_service_account.doc(
        "resumeData/aboutPage"
      );
    await aboutPageDocRef.update({
      aboutPageDataField:
        aboutPageDataObject.data,
    });
  };
uploadAboutPagedData();
