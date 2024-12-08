// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4193b.firebaseapp.com",
  projectId: "mern-estate-4193b",
  storageBucket: "mern-estate-4193b.firebasestorage.app",
  messagingSenderId: "944079532534",
  appId: "1:944079532534:web:e8a415e92a139c0510d7d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);