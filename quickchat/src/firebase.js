import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkpH5JeJLrCy8Im8_PVZzXBaUo0Akc5yQ",
  authDomain: "quickchat-9e94b.firebaseapp.com",
  projectId: "quickchat-9e94b",
  storageBucket: "quickchat-9e94b.appspot.com",
  messagingSenderId: "726561986585",
  appId: "1:726561986585:web:795a3d7ca26be1bd023288",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
