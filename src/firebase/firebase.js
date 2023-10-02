import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcn8WFOKcDiep6TZC2HJPKVSS5ZpDGh5g",
  authDomain: "finzet1.firebaseapp.com",
  projectId: "finzet1",
  storageBucket: "finzet1.appspot.com",
  messagingSenderId: "696053866468",
  appId: "1:696053866468:web:2470a38365649c898d71f1",
  measurementId: "G-N71GHZHN9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
