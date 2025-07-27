import { readFileSync } from "fs";
import projectGridData from "#root/src/content/projectGridData.json" with { type: "json" };
import { firestore_database_service_account } from "#root/server/config/firebaseAdminConfig.js";

export const uploadProjectGridData = async () => {
	await firestore_database_service_account
		.collection("projectGridData")
		.doc("apple")
		.set(projectGridData.apple);
	await firestore_database_service_account
		.collection("projectGridData")
		.doc("cloudera")
		.set(projectGridData.cloudera);
	await firestore_database_service_account
		.collection("projectGridData")
		.doc("rubrik")
		.set(projectGridData.rubrik);
	await firestore_database_service_account
		.collection("projectGridData")
		.doc("blog")
		.set(projectGridData.blog);
	await firestore_database_service_account
		.collection("projectGridData")
		.doc("timeline")
		.set(projectGridData.timeline);
	await firestore_database_service_account
		.collection("projectGridData")
		.doc("gifhov")
		.set(projectGridData.gifhov);
};
uploadProjectGridData();
