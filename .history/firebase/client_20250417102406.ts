// Import the functions you need from the SDKs you need
// firebase/client.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwzF0kPrmvgVy_JsD959tTfZmqzksd5-I",
  authDomain: "prepwise-3be56.firebaseapp.com",
  projectId: "prepwise-3be56",
  storageBucket: "prepwise-3be56.appspot.com", // Corrected storageBucket domain
  messagingSenderId: "524258176316",
  appId: "1:524258176316:web:09f1a59dabd0362bf68239",
  measurementId: "G-16KR3YMYQS",
};

// Avoid re-initializing Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
