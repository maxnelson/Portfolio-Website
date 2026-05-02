import { doc, getDoc } from "firebase/firestore";
import { useSuspenseQuery } from "@tanstack/react-query";
import { firestore_database } from "#root/src/utility_functions/config/firebaseConfig.js";

export const getProjectData = (name) => {
	return useSuspenseQuery({
		queryKey: ["projectGridData", { name: name }],
		queryFn: fetchProjectData
	});
};

export const fetchProjectData = async ({ queryKey }) => {
	try {
		const docRef = doc(firestore_database, queryKey[0], queryKey[1].name);
		const docSnap = await getDoc(docRef);
		const docSnapData = docSnap.data();
		return docSnapData;
	} catch (error) {
		console.warn(error);
	}
};

export const getProjectDescriptionData = (name) => {
	return useSuspenseQuery({
		queryKey: ["projectGridDescriptionData", { name: name }],
		queryFn: fetchProjectDescriptionData
	});
};

export const fetchProjectDescriptionData = async ({ queryKey }) => {
	try {
		const docRef = doc(firestore_database, queryKey[0], queryKey[1].name);
		const docSnap = await getDoc(docRef);
		const docSnapData = docSnap.data();
		return docSnapData;
	} catch (error) {
		console.warn(error);
	}
};
