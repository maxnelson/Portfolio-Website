import { readFileSync } from "fs";
import projectGridData from "#root/src/content/projectGridData.json" with { type: "json" };
import projectGridDescriptionData from "#root/src/content/projectGridDescriptionData.json" with { type: "json" };
import { firestore_database_service_account } from "#root/server/config/firebaseAdminConfig.js";

export const uploadProjectGridData = async () => {
	await firestore_database_service_account
		.collection("projectGridData")
		.doc("wastedata")
		.set(projectGridData.wastedata);
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

export const uploadProjectGridDescriptionData = async () => {
	const wastedataDescription = readFileSync(
		"src/content/projectDescriptionsHTML/wastedataDescription.html",
		"utf-8"
	);
	const timelineDescription = readFileSync(
		"src/content/projectDescriptionsHTML/timelineDescription.html",
		"utf-8"
	);
	const appleDescription = readFileSync(
		"src/content/projectDescriptionsHTML/appleDescription.html",
		"utf-8"
	);
	const rubrikDescription = readFileSync(
		"src/content/projectDescriptionsHTML/rubrikDescription.html",
		"utf-8"
	);
	const clouderaDescription = readFileSync(
		"src/content/projectDescriptionsHTML/clouderaDescription.html",
		"utf-8"
	);
	const gifhovDescription = readFileSync(
		"src/content/projectDescriptionsHTML/gifhovDescription.html",
		"utf-8"
	);
	const blogDescription = readFileSync(
		"src/content/projectDescriptionsHTML/blogDescription.html",
		"utf-8"
	);
	projectGridDescriptionData.wastedata.description = wastedataDescription;
	projectGridDescriptionData.timeline.description = timelineDescription;
	projectGridDescriptionData.apple.description = appleDescription;
	projectGridDescriptionData.rubrik.description = rubrikDescription;
	projectGridDescriptionData.cloudera.description = clouderaDescription;
	projectGridDescriptionData.gifhov.description = gifhovDescription;
	projectGridDescriptionData.blog.description = blogDescription;

	await firestore_database_service_account
		.collection("projectGridDescriptionData")
		.doc("wastedata")
		.set(projectGridDescriptionData.wastedata);
	await firestore_database_service_account
		.collection("projectGridDescriptionData")
		.doc("apple")
		.set(projectGridDescriptionData.apple);
	await firestore_database_service_account
		.collection("projectGridDescriptionData")
		.doc("cloudera")
		.set(projectGridDescriptionData.cloudera);
	await firestore_database_service_account
		.collection("projectGridDescriptionData")
		.doc("rubrik")
		.set(projectGridDescriptionData.rubrik);
	await firestore_database_service_account
		.collection("projectGridDescriptionData")
		.doc("blog")
		.set(projectGridDescriptionData.blog);
	await firestore_database_service_account
		.collection("projectGridDescriptionData")
		.doc("timeline")
		.set(projectGridDescriptionData.timeline);
	await firestore_database_service_account
		.collection("projectGridDescriptionData")
		.doc("gifhov")
		.set(projectGridDescriptionData.gifhov);
};

uploadProjectGridData();
uploadProjectGridDescriptionData();
