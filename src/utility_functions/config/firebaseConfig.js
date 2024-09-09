import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk8mxT5l7myXYe5lKbjuhL04aeMzaYMTg",
  authDomain: "portfolio-website-410901.firebaseapp.com",
  projectId: "portfolio-website-410901",
  storageBucket: "portfolio-website-410901.appspot.com",
  messagingSenderId: "997554075481",
  appId: "1:997554075481:web:c8f57ef874ebac5b593e48",
  measurementId: "G-9PKFHG5J4R",
};

export const firebase_app = initializeApp(firebaseConfig);
export const firestore_database = getFirestore(firebase_app);
