import resumeData from "#src/content/resumeData.json";
import { firestore_database_service_account } from "#root/src/utility_functions/config/firebaseAdminConfig.js";
export const uploadResumeData =
  async () => {
    const docRef =
      firestore_database_service_account.doc(
        "resumeData/resumeData"
      );
    await docRef.update({
      resumeDataField: resumeData,
    });
  };
uploadResumeData();
