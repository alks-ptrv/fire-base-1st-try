// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvvJ-zEjdMJuIq-61Imv5QieaATotJymM",
  authDomain: "fire-base-1st-try.firebaseapp.com",
  projectId: "fire-base-1st-try",
  storageBucket: "fire-base-1st-try.appspot.com",
  messagingSenderId: "537824395603",
  appId: "1:537824395603:web:72e469c101ed095a4ba1a6",
  measurementId: "G-0GBW2GZ43G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;