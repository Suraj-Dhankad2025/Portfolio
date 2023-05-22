import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4gauhUvHyP_g8424Ecl75TVUlEyLLjv0",
  authDomain: "suraj-dhankad-portfolio-6314e.firebaseapp.com",
  projectId: "suraj-dhankad-portfolio-6314e",
  storageBucket: "suraj-dhankad-portfolio-6314e.appspot.com",
  messagingSenderId: "160507181290",
  appId: "1:160507181290:web:40e2079e0b452c3ca4ff93",
  measurementId: "G-116FRZ4P2F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();