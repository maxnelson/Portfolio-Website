import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { Buffer } from "buffer";

const base64Credentials = process.env.GOOGLE_CLOUD_CREDENTIALS;
const decodedCredentials = JSON.parse(
	Buffer.from(base64Credentials, "base64").toString("utf8")
);

const firebaseConfig = {
	credential: cert(decodedCredentials),
	projectId: "portfolio-website-410901",
	storageBucket: "portfolio-website-410901.appspot.com"
};

export const firebase_app = initializeApp(firebaseConfig);
export const firestore_database_service_account = getFirestore(firebase_app);
