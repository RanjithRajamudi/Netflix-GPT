// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD3CFjWG5SKOCCjD-ORicXtCLMHv7q778",
  authDomain: "netflixgpt-a66e3.firebaseapp.com",
  projectId: "netflixgpt-a66e3",
  storageBucket: "netflixgpt-a66e3.appspot.com",
  messagingSenderId: "1052041050335",
  appId: "1:1052041050335:web:70a01f861cfcc78285916a",
  measurementId: "G-Z3SLGDW5CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();