// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "achievement-portal.firebaseapp.com",
  projectId: "achievement-portal",
  storageBucket: "achievement-portal.appspot.com",
  messagingSenderId: "488976718552",
  appId: "1:488976718552:web:f575a6937ff01a12ee95ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);