import { updateDoc, doc } from "firebase/firestore";
//import { firestore_database } from "#root/src/utility_functions/config/firebaseConfig.js";
import resumeData from "#src/scripts/uploadResumeData/resumeData.json" with { type: "json" };
import { firestore_database_service_account } from "#root/src/utility_functions/config/firebaseAdminConfig.js";
export const uploadResumeData = async () => {
  /*
  var document_reference = doc(
    firestore_database_service_account,
    "resumeData",
    "resumeData"
  );
  const resumeDataObject = { resumeDataKey: resumeData };
  await updateDoc(document_reference, resumeDataObject);
  */
  const docRef = firestore_database_service_account.doc(
    "resumeData/resumeData"
  );
  await docRef.update({ someField2: resumeData });
};

uploadResumeData();
