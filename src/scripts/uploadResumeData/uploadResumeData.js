import { updateDoc, doc } from "firebase/firestore";
import { firestore_database } from "#src/utility_functions/firebaseConfig.js";
import resumeData from "#src/scripts/uploadResumeData/resumeData.json" with { type: "json" };
export const uploadResumeData = async () => {
  console.log(resumeData);
  var document_reference = doc(firestore_database, "resumeData", "resumeData");
  const resumeDataObject = { resumeDataKey: resumeData };
  console.log(resumeDataObject);
  await updateDoc(document_reference, resumeDataObject);
};

uploadResumeData();
