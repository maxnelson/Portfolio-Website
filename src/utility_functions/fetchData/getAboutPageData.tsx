import {
  doc,
  getDoc,
} from "firebase/firestore";
import { firestore_database } from "#root/src/utility_functions/config/firebaseConfig.js";

export const getAboutPageData =
  async () => {
    const docRef = doc(
      firestore_database,
      "resumeData",
      "aboutPage"
    );
    const docSnap =
      await getDoc(docRef);
    const docSnapData = docSnap.data();
    const docSnapDataValue =
      docSnapData?.aboutPageDataField;
    return docSnapDataValue;
  };
