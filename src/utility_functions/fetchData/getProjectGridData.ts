import { doc, getDoc, collection } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { firestore_database } from "#root/src/utility_functions/config/firebaseConfig.js";

export const getProjectGridData = async () => {
	const docRef = doc(firestore_database, "resumeData", "projectGridData");
	const docSnap = await getDoc(docRef);
	const docSnapData = docSnap.data();
	const docSnapDataValue = docSnapData?.projectGridDataField;
	return docSnapDataValue;
};

export const getProjectData = (name) => {
	return useSuspenseQuery({
		queryKey: ["projectGriditem", { name: name }],
		queryFn: fetchProjectData
	});
};

export const fetchProjectData = async ({ queryKey }) => {
	try {
		const docRef = doc(firestore_database, "projectGridData", queryKey[1].name);
		const docSnap = await getDoc(docRef);
		const docSnapData = docSnap.data();
		return docSnapData;
	} catch (error) {
		console.warn(error);
	}
};
