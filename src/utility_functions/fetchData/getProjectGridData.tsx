import {
  doc,
  getDoc,
} from "firebase/firestore";
import { firestore_database } from "#root/src/utility_functions/config/firebaseConfig.js";

export const getProjectGridData =
  async () => {
    const docRef = doc(
      firestore_database,
      "resumeData",
      "projectGridData"
    );
    const docSnap =
      await getDoc(docRef);
    const docSnapData = docSnap.data();
    const docSnapDataValue =
      docSnapData?.projectGridDataField;
    return docSnapDataValue;
  };

export const getProjectData = async (
  projectDescriptionContentName
) => {
  const docRef = doc(
    firestore_database,
    "resumeData",
    "projectGridData"
  );
  const docSnap = await getDoc(docRef);
  const docSnapData = docSnap.data();
  const docSnapDataValue =
    docSnapData?.projectGridDataField[
      projectDescriptionContentName
    ];
  return docSnapDataValue;
};
