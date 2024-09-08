import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-website-410901.firebaseapp.com",
  projectId: "portfolio-website-410901",
  storageBucket: "portfolio-website-410901.appspot.com",
  messagingSenderId: "997554075481",
  appId: process.env.FIREBAE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export const firebase_app = initializeApp(firebaseConfig);
export const firestore_database = getFirestore(firebase_app);
