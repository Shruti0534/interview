// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwzF0kPrmvgVy_JsD959tTfZmqzksd5-I",
  authDomain: "prepwise-3be56.firebaseapp.com",
  projectId: "prepwise-3be56",
  storageBucket: "prepwise-3be56.firebasestorage.app",
  messagingSenderId: "524258176316",
  appId: "1:524258176316:web:09f1a59dabd0362bf68239",
  measurementId: "G-16KR3YMYQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);