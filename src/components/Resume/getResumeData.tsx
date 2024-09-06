import { doc, getDoc } from "firebase/firestore";
import { firestore_database } from "@/utility_functions/firebaseConfig";

export const getResumeData = async () => {
  const docRef = doc(firestore_database, "resumeData", "resumeData");
  const docSnap = await getDoc(docRef);
  const docSnapData = docSnap.data();
  const docSnapDataValue = docSnapData.resumeData;
  return docSnapDataValue;
};
