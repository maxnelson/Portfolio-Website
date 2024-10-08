import { doc, getDoc } from "firebase/firestore";
import { firestore_database } from "#root/src/utility_functions/config/firebaseConfig.js";

export const getResumeData = async () => {
  const docRef = doc(firestore_database, "resumeData", "resumeData");
  const docSnap = await getDoc(docRef);
  const docSnapData = docSnap.data();
  const docSnapDataValue = docSnapData?.resumeDataField;
  return docSnapDataValue;
};
