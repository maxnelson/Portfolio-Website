import admin from "firebase-admin";
import { Buffer } from "buffer";

const base64Credentials = process.env.GOOGLE_CLOUD_CREDENTIALS;
const decodedCredentials = JSON.parse(
  Buffer.from(base64Credentials, "base64").toString("utf8")
);

const firebaseConfig = {
  credential: admin.credential.cert(decodedCredentials),
  projectId: "portfolio-website-410901",
  storageBucket: "portfolio-website-410901.appspot.com",
};

export const firebase_app = admin.initializeApp(firebaseConfig);
export const firestore_database_service_account = admin.firestore();
